import zipfile
import xml.etree.ElementTree as ET
import re

z = zipfile.ZipFile('Venezuela Educacion e Inteligencia Artificial.docx')

# Extract document.xml
doc_xml = z.read('word/document.xml')
tree = ET.fromstring(doc_xml)

namespaces = {
    'w': 'http://schemas.openxmlformats.org/wordprocessingml/2006/main',
}

paragraphs = []
for p in tree.iter('{http://schemas.openxmlformats.org/wordprocessingml/2006/main}p'):
    texts = [node.text for node in p.iter('{http://schemas.openxmlformats.org/wordprocessingml/2006/main}t') if node.text]
    full_text = "".join(texts).strip()
    if full_text:
        # Check style if possible
        style_elem = p.find('.//w:pStyle', namespaces)
        style = style_elem.attrib.get('{http://schemas.openxmlformats.org/wordprocessingml/2006/main}val') if style_elem is not None else None
        paragraphs.append((style, full_text))

print(f"Total non-empty paragraphs in docx: {len(paragraphs)}")

# Check footnotes.xml
fn_paragraphs = []
if 'word/footnotes.xml' in z.namelist():
    fn_xml = z.read('word/footnotes.xml')
    fn_tree = ET.fromstring(fn_xml)
    for fn in fn_tree.iter('{http://schemas.openxmlformats.org/wordprocessingml/2006/main}footnote'):
        fn_id = fn.attrib.get('{http://schemas.openxmlformats.org/wordprocessingml/2006/main}id')
        texts = [node.text for node in fn.iter('{http://schemas.openxmlformats.org/wordprocessingml/2006/main}t') if node.text]
        txt = "".join(texts).strip()
        if txt:
            fn_paragraphs.append((fn_id, txt))

print(f"Total footnotes in docx: {len(fn_paragraphs)}")

# Show first 30 paragraphs
print("\n--- FIRST 30 PARAGRAPHS ---")
for i, (st, p) in enumerate(paragraphs[:30]):
    print(f"[{i}] ({st}): {p[:120]}")

# Show table count
tables = tree.findall('.//w:tbl', namespaces)
print(f"\nTotal tables in docx: {len(tables)}")

# Save full text to a file for easy diffing
with open('extracted_docx_text.txt', 'w', encoding='utf-8') as f:
    for st, p in paragraphs:
        f.write(f"[{st}] {p}\n\n")

with open('extracted_docx_footnotes.txt', 'w', encoding='utf-8') as f:
    for fn_id, txt in fn_paragraphs:
        f.write(f"Footnote {fn_id}: {txt}\n\n")

print("Saved extracted_docx_text.txt and extracted_docx_footnotes.txt")
