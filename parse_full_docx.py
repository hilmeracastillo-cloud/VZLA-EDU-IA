import zipfile
import xml.etree.ElementTree as ET
import json
import re

z = zipfile.ZipFile('Venezuela Educacion e Inteligencia Artificial.docx')
doc_xml = z.read('word/document.xml')
tree = ET.fromstring(doc_xml)

ns = {'w': 'http://schemas.openxmlformats.org/wordprocessingml/2006/main'}

# We want to iterate through all children of w:body in document.xml
body = tree.find('.//w:body', ns)

elements = []
for child in body:
    tag = child.tag.split('}')[-1]
    if tag == 'p':
        # Paragraph
        style_elem = child.find('.//w:pStyle', ns)
        style = style_elem.attrib.get(f"{{{ns['w']}}}val") if style_elem is not None else None
        
        # Check if list item
        num_pr = child.find('.//w:numPr', ns)
        is_list = num_pr is not None
        
        # Extract text runs with bold/italic info if needed
        full_text = "".join([t.text for t in child.iter(f"{{{ns['w']}}}t") if t.text]).strip()
        if full_text:
            elements.append({
                'type': 'p',
                'style': style,
                'is_list': is_list,
                'text': full_text
            })
    elif tag == 'tbl':
        # Table
        rows_data = []
        for row in child.findall('.//w:tr', ns):
            row_cells = []
            for cell in row.findall('.//w:tc', ns):
                cell_text = "".join([t.text for t in cell.iter(f"{{{ns['w']}}}t") if t.text]).strip()
                row_cells.append(cell_text)
            rows_data.append(row_cells)
        elements.append({
            'type': 'table',
            'rows': rows_data
        })

print(f"Total elements extracted: {len(elements)}")

with open('parsed_docx_elements.json', 'w', encoding='utf-8') as f:
    json.dump(elements, f, ensure_ascii=False, indent=2)

print("Saved parsed_docx_elements.json")
