import json
import re

with open('parsed_docx_elements.json', 'r', encoding='utf-8') as f:
    elements = json.load(f)

print("Starting deep verification of DOCX elements vs current data...")

# Let's inspect sections:
sections_map = {
    'intro': (115, 147),
    'executive': (147, 233),
    'part1_body': (233, 267),
    'part1_refs': (267, 280),
    'part2_body': (280, 441),
    'part2_refs': (441, 516),
    'part3_body': (516, 875),
    'part3_refs': (875, 946),
    'appendix1': (946, 1222),
    'appendix2': (1222, len(elements))
}

for name, (s, e) in sections_map.items():
    p_count = 0
    t_count = 0
    for i in range(s, e):
        if elements[i]['type'] == 'p':
            p_count += 1
        elif elements[i]['type'] == 'table':
            t_count += 1
    print(f"Section {name:15}: {p_count:4} paragraphs, {t_count} tables (elements {s} to {e})")

