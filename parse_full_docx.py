import zipfile
import xml.etree.ElementTree as ET
import json
import re

z = zipfile.ZipFile('Venezuela Educacion e Inteligencia Artificial.docx')
doc_xml = z.read('word/document.xml')
tree = ET.fromstring(doc_xml)

ns = {'w': 'http://schemas.openxmlformats.org/wordprocessingml/2006/main'}
body = tree.find('.//w:body', ns)

def extract_runs(p):
    runs = []
    for r in p.findall('.//w:r', ns):
        # Check bold
        b_elem = r.find('.//w:b', ns)
        b_cs = r.find('.//w:bCs', ns)
        is_b = False
        if b_elem is not None:
            val = b_elem.attrib.get(f'{{{ns["w"]}}}val')
            is_b = val not in ['0', 'false', 'none']
        elif b_cs is not None:
            val = b_cs.attrib.get(f'{{{ns["w"]}}}val')
            is_b = val not in ['0', 'false', 'none']
            
        # Check italic
        i_elem = r.find('.//w:i', ns)
        is_i = False
        if i_elem is not None:
            val = i_elem.attrib.get(f'{{{ns["w"]}}}val')
            is_i = val not in ['0', 'false', 'none']

        t_parts = []
        for child in r:
            tag = child.tag.split('}')[-1]
            if tag == 't':
                if child.text:
                    t_parts.append(child.text)
            elif tag == 'tab':
                t_parts.append(' ')
            elif tag == 'br':
                t_parts.append('\n')
        text = ''.join(t_parts)
        if text:
            runs.append((text, is_b, is_i))
            
    # Combine consecutive runs with same formatting
    combined = []
    for text, is_b, is_i in runs:
        if combined and combined[-1][1] == is_b and combined[-1][2] == is_i:
            combined[-1] = (combined[-1][0] + text, is_b, is_i)
        else:
            combined.append((text, is_b, is_i))
            
    md_parts = []
    raw_parts = []
    for text, is_b, is_i in combined:
        raw_parts.append(text)
        
        # Preserve whitespace outside formatting
        lead_match = re.match(r'^(\s*)', text)
        trail_match = re.search(r'(\s*)$', text)
        lead = lead_match.group(1) if lead_match else ''
        trail = trail_match.group(1) if trail_match else ''
        core = text.strip()
        
        if not core:
            md_parts.append(text)
            continue
            
        formatted = core
        if is_i:
            formatted = f'*{formatted}*'
        if is_b:
            formatted = f'**{formatted}**'
            
        md_parts.append(f'{lead}{formatted}{trail}')
        
    return ''.join(md_parts).strip(), ''.join(raw_parts).strip()

elements = []
for child in body:
    tag = child.tag.split('}')[-1]
    if tag == 'p':
        style_elem = child.find('.//w:pStyle', ns)
        style = style_elem.attrib.get(f"{{{ns['w']}}}val") if style_elem is not None else None
        
        ind = child.find('.//w:ind', ns)
        hanging = ind.attrib.get(f"{{{ns['w']}}}hanging") if ind is not None else None
        left = ind.attrib.get(f"{{{ns['w']}}}left") if ind is not None else None
        
        num_pr = child.find('.//w:numPr', ns)
        is_list = num_pr is not None or (style == 'ListParagraph')
        
        md_text, raw_text = extract_runs(child)
        if raw_text:
            elements.append({
                'type': 'p',
                'style': style,
                'is_list': is_list,
                'hanging': hanging,
                'left': left,
                'has_hanging': bool(hanging),
                'text': md_text,
                'raw_text': raw_text
            })
    elif tag == 'tbl':
        rows_data = []
        for row in child.findall('.//w:tr', ns):
            row_cells = []
            for cell in row.findall('.//w:tc', ns):
                cell_p_parts = []
                for p in cell.findall('.//w:p', ns):
                    p_md, _ = extract_runs(p)
                    if p_md:
                        cell_p_parts.append(p_md)
                row_cells.append('\n'.join(cell_p_parts).strip())
            rows_data.append(row_cells)
        elements.append({
            'type': 'table',
            'rows': rows_data
        })

print(f"Total elements extracted: {len(elements)}")
with open('parsed_docx_elements.json', 'w', encoding='utf-8') as f:
    json.dump(elements, f, ensure_ascii=False, indent=2)

print("Saved parsed_docx_elements.json with bold and hanging indent information!")
