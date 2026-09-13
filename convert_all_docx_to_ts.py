#!/usr/bin/env python3
import json
import re

with open('parsed_docx_elements.json', 'r', encoding='utf-8') as f:
    elements = json.load(f)

URL_REPLACEMENTS = [
    ('the-fate-ofrome?srsltid=AfmBOooXaJTM7QGIV8YXerqGjuQiMG8FzKPYIi6nMYjG30oAOEktYWZc', 'the-fate-of-rome'),
    ('the-fate-ofrome', 'the-fate-of-rome'),
    ('bringing-the-future-of-educationto-brazil', 'bringing-the-future-of-education-to-brazil'),
    ('ia-en-lasaulas-latinoamericanas-mapeando-un-futuro-en-construccion', 'ia-en-las-aulas-latinoamericanas-mapeando-un-futuro-en-construccion'),
    ('study-and-learn-aibuilt-for-your-student', 'study-and-learn-ai-built-for-your-student'),
    ('when-teachersbecome-builders-vibe', 'when-teachers-become-builders-vibe'),
    ('the-economicpotential-of-generative-ai', 'the-economic-potential-of-generative-ai'),
    ('guideto-a-bani-world-that-doesnt-make-sense', 'guide-to-a-bani-world-that-doesnt-make-sense'),
    ('guidancereports/metacognition', 'guidance-reports/metacognition'),
    ('neuroeducacin-solo-se-puedeaprender-aquello-que-se-ama', 'neuroeducacion-solo-se-puede-aprender-aquello-que-se-ama'),
    ('the-hard-thing-about-hard-things-benhorowitz', 'the-hard-thing-about-hard-things-ben-horowitz'),
    ('defining-new-models-ofeducation-for-the-fourth-industrial-revolution', 'defining-new-models-of-education-for-the-fourth-industrial-revolution'),
    ('capitalismo-socialismo-ydemocracia', 'capitalismo-socialismo-y-democracia'),
    ('ordenasuspender-la-aplicacion-del-nuevo-curriculum', 'ordena-suspender-la-aplicacion-del-nuevo-curriculum'),
    ('educacion-ucab-propuesta-dereorganizacion', 'educacion-ucab-propuesta-de-reorganizacion'),
    ('squirrelai-learning-shines', 'squirrel-ai-learning-shines'),
    ('siteal.iiep.unesco.org/bdnp/3345/resolucion1432016lineamientosprocesotransformacioncurriculartodosniveles', 'siteal.iiep.unesco.org/pais/venezuela'),
    ('https://buenosaires.gob.ar/gcabahistorico/sistema-de-alerta-temprana-de-abandono-escolar-satae', 'https://buenosaires.gob.ar/educacion'),
    ('buenosaires.gob.ar/gcabahistorico/sistema-de-alerta-temprana-de-abandono-escolar-satae', 'buenosaires.gob.ar/educacion'),
    ('https://anih.org/', 'https://acading.org.ve/'),
    ('https://anih.org', 'https://acading.org.ve/'),
    ('https://encovi.ucab.edu.ve/', 'https://www.proyectoencovi.com/'),
    ('https://encovi.ucab.edu.ve', 'https://www.proyectoencovi.com/'),
    ('https://www.anovacg.org/', 'https://devtechsys.com/insights/'),
    ('https://www.anovacg.org', 'https://devtechsys.com/insights/'),
    ('https://telli.schule/', 'https://www.schulministerium.nrw/presse/pressemitteilungen/von-fuerst-stochastikus-bis-zu-telli-05-12-2025'),
    ('https://telli.schule', 'https://www.schulministerium.nrw/presse/pressemitteilungen/von-fuerst-stochastikus-bis-zu-telli-05-12-2025'),
    ('https://observatorioeducacion.org/', 'https://elucabista.com/'),
    ('https://observatorioeducacion.org', 'https://elucabista.com/'),
    ('https://humvenezuela.com/', 'https://reliefweb.int/organization/humvenezuela'),
    ('https://humvenezuela.com', 'https://reliefweb.int/organization/humvenezuela'),
]

def sanitize_urls(text):
    res = text
    for bad, good in URL_REPLACEMENTS:
        res = res.replace(bad, good)
    return res

def clean_txt(t):
    cleaned = ' '.join(t.split())
    return sanitize_urls(cleaned)

def escape_ts(s):
    return s.replace('\\', '\\\\').replace('`', '\\`').replace('${', '\\${')

def extract_citations(text):
    return re.findall(r'\[([0-9]+\.[0-9]+)\]', text)

def is_subheading_line(txt):
    t = txt.strip()
    return bool(re.match(r'^(Oportunidad(es)?\s+(Medular(es)?|Funcional(es)?|Estructurales?)|Oportunidad\s+\d+:?|Destrezas para La Vida|Objetivos:|Ejemplos de actividades:)\s*$', t, re.I))

def is_numbered_line(txt):
    t = txt.strip()
    return bool(re.match(r'^(\d+[\.\)]|[a-zA-Z][\.\)])\s*', t))

def flush_list(blocks, c_list, prefix):
    if not c_list:
        return
    num_cnt = sum(1 for it in c_list if is_numbered_line(it))
    is_ordered = (num_cnt >= len(c_list) / 2)
    b_type = "orderedList" if is_ordered else "list"
    blocks.append({
        "id": f"{prefix}-{b_type}-{len(blocks)}",
        "type": b_type,
        "items": list(c_list)
    })
    c_list.clear()

def parse_ref_item(raw_text):
    text = clean_txt(raw_text)
    m = re.match(r'\[([0-9]+)\.([0-9]+)\]\s*(.*)', text)
    if not m:
        return None
    part_num = m.group(1)
    ref_num = m.group(2)
    code = f"[{part_num}.{ref_num}]"
    rest = m.group(3)
    
    url_m = re.search(r'(https?://[^\s\"\'\>\<\`\)]+)', rest)
    url = url_m.group(1).rstrip('.,;()[]\"\'') if url_m else ""
    
    clean = rest.replace(url, '').strip().rstrip('.,;')
    
    # Extract year
    year_m = re.search(r'\((\d{4}[^\)]*)\)', clean)
    year = year_m.group(1).strip() if year_m else "s.f."
    
    # Extract author (up to dot or parenthesis, or fallback)
    auth_m = re.match(r'^([^\.\(\)]+)(?:\.|\s*\()', clean)
    author = auth_m.group(1).strip() if auth_m else f"Referencia {code}"
    
    # Extract title
    title = clean
    if year != "s.f." and f"({year})" in title:
        idx = title.find(f"({year})")
        title = title[idx + len(f"({year})"):].strip(' .,:')
    elif author and title.startswith(author):
        title = title[len(author):].strip(' .,:')
        
    final_title = title if title else clean
        
    return {
        "ref_id": f"ref-{part_num}-{ref_num}",
        "code": code,
        "citation": text,
        "url": url,
        "num": ref_num,
        "author": author,
        "year": year,
        "title": final_title or author
    }

# ==============================================================================
# 1. BOOK METADATA
# ==============================================================================
book_meta_ts = """export interface BookMetadata {
  title: string;
  subtitle: string;
  program: string;
  author: string;
  email: string;
  date: string;
  version: string;
  totalChapters: number;
  totalCaseStudies: number;
  totalAITools: number;
}

export const bookMeta: BookMetadata = {
  title: 'Venezuela, Educación e Inteligencia Artificial',
  subtitle: 'Tormenta de Oportunidades',
  program: 'Programa Esta Tierra de Gracia',
  author: 'Hilmer Castillo Bescanza',
  email: 'Hilmer.castillo@comcast.net',
  date: 'Septiembre 2026',
  version: '1.0.0',
  totalChapters: 7,
  totalCaseStudies: 25,
  totalAITools: 13,
};
"""
with open('src/data/bookMeta.ts', 'w', encoding='utf-8') as f:
    f.write(book_meta_ts)
print("Updated src/data/bookMeta.ts")

# ==============================================================================
# 2. INTRODUCTION
# ==============================================================================
intro_elements = elements[115:147]
intro_blocks = []
sub_sections_intro = [
    {"id": "intro-origen", "title": "El origen de una pasión educativa (1972)", "level": 2},
    {"id": "intro-educonsulta", "title": "Entrenamiento y Principios del Aprendizaje", "level": 2},
    {"id": "intro-trayectoria", "title": "Innovaciones y Aplicaciones Prácticas", "level": 2},
    {"id": "intro-revoluciones", "title": "Las Cinco Revoluciones de la Humanidad", "level": 2},
    {"id": "intro-socrates", "title": "Un Sócrates para cada estudiante", "level": 2}
]

cur_list = []
for el in intro_elements[1:]:
    txt = clean_txt(el['text'])
    if not txt:
        continue
    is_list = el.get('is_list') or el.get('style') == 'ListParagraph'
    
    if "En el entrenamiento en Metodología de la Enseñanza" in txt:
        flush_list(intro_blocks, cur_list, "intro")
        intro_blocks.append({"id": "intro-educonsulta", "type": "heading2", "text": "Entrenamiento y Principios del Aprendizaje"})
    elif "Aquí se inició un largo camino en la innovación" in txt:
        flush_list(intro_blocks, cur_list, "intro")
        intro_blocks.append({"id": "intro-trayectoria", "type": "heading2", "text": "Innovaciones y Aplicaciones Prácticas"})
    elif "Para no hacer la historia muy larga aterrizamos al 30 de noviembre de 2022" in txt:
        flush_list(intro_blocks, cur_list, "intro")
        intro_blocks.append({"id": "intro-revoluciones", "type": "heading2", "text": "Las Cinco Revoluciones de la Humanidad"})
    elif "Los docentes siempre hemos estado atraídos por el método socrático" in txt:
        flush_list(intro_blocks, cur_list, "intro")
        intro_blocks.append({"id": "intro-socrates", "type": "heading2", "text": "Un Sócrates para cada estudiante"})
    elif "Desde 1972 quedé atrapado" in txt:
        flush_list(intro_blocks, cur_list, "intro")
        intro_blocks.append({"id": "intro-origen", "type": "heading2", "text": "El origen de una pasión educativa (1972)"})

    if is_list:
        cur_list.append(txt)
    else:
        flush_list(intro_blocks, cur_list, "intro")
        b_type = "lead" if len(intro_blocks) == 0 else "paragraph"
        intro_blocks.append({
            "id": f"intro-p-{len(intro_blocks)}",
            "type": b_type,
            "text": txt
        })
flush_list(intro_blocks, cur_list, "intro")

intro_ts = f"""import {{ Chapter }} from '../types';

export const introductionChapter: Chapter = {{
  id: 'introduccion',
  slug: 'introduccion',
  part: 'Preliminares',
  partNumber: '0',
  number: '0.1',
  title: 'Introducción',
  author: 'Hilmer Castillo Bescanza',
  authorEmail: 'hilmer.castillo@comcast.net',
  readingTimeMinutes: 5,
  subSections: {json.dumps(sub_sections_intro, ensure_ascii=False, indent=4)},
  blocks: [
"""
for b in intro_blocks:
    intro_ts += f"    {{\n      id: '{b['id']}',\n      type: '{b['type']}',\n"
    if "text" in b:
        intro_ts += f"      text: `{escape_ts(b['text'])}`,\n"
    if "items" in b:
        intro_ts += f"      items: {json.dumps(b['items'], ensure_ascii=False, indent=8).strip()},\n"
    intro_ts += "    },\n"

intro_ts += """  ],
  footnotes: {},
  references: [],
};
"""
with open('src/data/introduction.ts', 'w', encoding='utf-8') as f:
    f.write(intro_ts)
print("Updated src/data/introduction.ts")

# ==============================================================================
# 3. EXECUTIVE SUMMARY
# ==============================================================================
exec_elements = elements[147:233]
exec_blocks = []
sub_sections_exec = [
    {"id": "exec-donde-estamos", "title": "¿Dónde estamos?", "level": 2},
    {"id": "exec-situacion-ia", "title": "¿Cuál es la situación del uso de la IA en la Educación Básica en el Mundo?", "level": 2},
    {"id": "exec-tormenta", "title": "¿Cómo aprovechar la Tormenta de Oportunidades que se presentarán?", "level": 2},
    {"id": "exec-medulares", "title": "Oportunidades Medulares (1, 2, 3)", "level": 3},
    {"id": "exec-funcionales", "title": "Oportunidades Funcionales (4)", "level": 3},
    {"id": "exec-estructurales", "title": "Oportunidades Estructurales (5, 6, 7)", "level": 3},
]

cur_list = []
for el in exec_elements[1:]:
    txt = clean_txt(el['text'])
    if not txt:
        continue
    txt = txt.replace("¡El reto es inmenso", "El reto es inmenso")
    txt = txt.replace("hacer A la Venezolana!", "hacer ¡A la Venezolana!")
    st = el.get('style')
    is_list = el.get('is_list') or st == 'ListParagraph'
    
    if st == 'Heading2':
        flush_list(exec_blocks, cur_list, "exec")
        h_id = "exec-donde-estamos" if "¿Dónde estamos?" in txt else ("exec-situacion-ia" if "situación del uso" in txt else "exec-tormenta")
        exec_blocks.append({"id": h_id, "type": "heading2", "text": txt})
        continue
    
    if is_subheading_line(txt):
        flush_list(exec_blocks, cur_list, "exec")
        sub_id = f"exec-sub-{len(exec_blocks)}"
        if "Oportunidades Medulares" in txt:
            sub_id = "exec-medulares"
        elif "Oportunidad Funcional" in txt:
            sub_id = "exec-funcionales"
        elif "Oportunidades Estructurales" in txt:
            sub_id = "exec-estructurales"
        clean_heading = re.sub(r'^(Oportunidad\s+\d+):$', r'\1', txt)
        exec_blocks.append({"id": sub_id, "type": "heading3", "text": clean_heading})
        continue

    # If it is a numbered line
    if is_numbered_line(txt):
        # If cur_list had unnumbered items, flush
        if cur_list and not any(is_numbered_line(x) for x in cur_list):
            flush_list(exec_blocks, cur_list, "exec")
        cur_list.append(txt)
        continue

    # If it ends with colon or is plain paragraph
    if txt.endswith(':') or txt.startswith('Establecer los niveles') or not is_list:
        flush_list(exec_blocks, cur_list, "exec")
        b_type = "lead" if len(exec_blocks) == 0 else "paragraph"
        exec_blocks.append({
            "id": f"exec-p-{len(exec_blocks)}",
            "type": b_type,
            "text": txt
        })
        continue

    # Otherwise it is an unnumbered bullet list item
    if cur_list and any(is_numbered_line(x) for x in cur_list):
        flush_list(exec_blocks, cur_list, "exec")
    cur_list.append(txt)

flush_list(exec_blocks, cur_list, "exec")

exec_ts = f"""import {{ Chapter }} from '../types';

export const executiveSummaryChapter: Chapter = {{
  id: 'resumen-ejecutivo',
  slug: 'resumen-ejecutivo',
  part: 'Preliminares',
  partNumber: '0',
  number: '0.2',
  title: 'Resumen Ejecutivo',
  subtitle: 'Hoja de ruta y síntesis estratégica para la transformación educativa',
  author: 'Hilmer Castillo Bescanza',
  authorEmail: 'hilmer.castillo@comcast.net',
  readingTimeMinutes: 7,
  subSections: {json.dumps(sub_sections_exec, ensure_ascii=False, indent=4)},
  blocks: [
"""
for b in exec_blocks:
    exec_ts += f"    {{\n      id: '{b['id']}',\n      type: '{b['type']}',\n"
    if "text" in b:
        exec_ts += f"      text: `{escape_ts(b['text'])}`,\n"
    if "items" in b:
        exec_ts += f"      items: {json.dumps(b['items'], ensure_ascii=False, indent=8).strip()},\n"
    exec_ts += "    },\n"

exec_ts += """  ],
  footnotes: {},
  references: [],
};
"""
with open('src/data/executiveSummary.ts', 'w', encoding='utf-8') as f:
    f.write(exec_ts)
print("Updated src/data/executiveSummary.ts")

# ==============================================================================
# 4. PART 1
# ==============================================================================
part1_body = elements[233:267]
part1_refs = elements[267:280]

p1_ref_items = []
p1_footnotes = {}
for el in part1_refs[1:]:
    ref = parse_ref_item(el['text'])
    if ref:
        p1_ref_items.append({
            "id": ref["ref_id"],
            "code": ref["code"],
            "citation": ref["citation"],
            "url": ref["url"]
        })
        p1_footnotes[ref["code"]] = {
            "id": ref["num"],
            "code": ref["code"],
            "title": ref["title"],
            "authorOrSource": ref["author"],
            "year": ref["year"],
            "justification": f"Evidencia y sustento estadístico para la Parte 1 ({ref['author']}, {ref['year']}).",
            "url": ref["url"]
        }

p1_subsections = [
    {"id": "p1-1-estudiantes", "title": "1.1. Estudiantes", "level": 2},
    {"id": "p1-2-profesores", "title": "1.2. Profesores", "level": 2},
    {"id": "p1-3-planes", "title": "1.3. Planes de Estudio", "level": 2},
    {"id": "p1-4-hogares", "title": "1.4. Hogares", "level": 2},
    {"id": "p1-5-trabajadores", "title": "1.5. Trabajadores", "level": 2},
    {"id": "p1-6-oportunidades", "title": "1.6. Oportunidades", "level": 2},
]

p1_blocks = []
cur_list = []
for el in part1_body[2:]: # Skip PARTE 1 and ¿Dónde estamos?
    if el['type'] == 'table':
        flush_list(p1_blocks, cur_list, "p1")
        headers = el['rows'][0]
        rows = el['rows'][1:]
        p1_blocks.append({
            "id": "p1-tabla-1",
            "type": "table",
            "tableData": {
                "caption": "Tabla 1. Indicadores del mercado laboral venezolano, 2015-2024",
                "headers": headers,
                "rows": rows
            }
        })
        continue

    txt = clean_txt(el['text'])
    if not txt:
        continue
    st = el.get('style')
    is_list = el.get('is_list') or st == 'ListParagraph'

    if st == 'Heading2':
        flush_list(p1_blocks, cur_list, "p1")
        sec_m = re.match(r'1\.([1-6])\.\s*(.*)', txt)
        h_id = f"p1-{sec_m.group(1)}-{sec_m.group(2).lower()[:12]}" if sec_m else f"p1-h2-{len(p1_blocks)}"
        p1_blocks.append({
            "id": h_id,
            "type": "heading2",
            "text": txt
        })
        continue

    if "Tabla 1. Indicadores del mercado laboral" in txt:
        continue

    if is_numbered_line(txt):
        if cur_list and not any(is_numbered_line(x) for x in cur_list):
            flush_list(p1_blocks, cur_list, "p1")
        cur_list.append(txt)
        continue

    if is_list:
        if cur_list and any(is_numbered_line(x) for x in cur_list):
            flush_list(p1_blocks, cur_list, "p1")
        cur_list.append(txt)
        continue

    flush_list(p1_blocks, cur_list, "p1")
    b_type = "lead" if len(p1_blocks) == 0 else "paragraph"
    cits = extract_citations(txt)
    fn_ids = [f"fn-{c.replace('.', '-')}" for c in cits]
    p1_blocks.append({
        "id": f"p1-b-{len(p1_blocks)}",
        "type": b_type,
        "text": txt,
        "footnoteIds": fn_ids if fn_ids else None
    })
flush_list(p1_blocks, cur_list, "p1")

p1_ts = f"""import {{ Chapter }} from '../types';

export const part1Chapter: Chapter = {{
  id: 'parte-1',
  slug: 'parte-1',
  part: 'Parte I',
  partNumber: '1',
  number: '1',
  title: '¿Dónde estamos?',
  subtitle: 'Diagnóstico multidimensional de la crisis educativa y el mercado laboral',
  author: 'Hilmer Castillo Bescanza',
  readingTimeMinutes: 10,
  subSections: {json.dumps(p1_subsections, ensure_ascii=False, indent=4)},
  blocks: [
"""
for b in p1_blocks:
    p1_ts += f"    {{\n      id: '{b['id']}',\n      type: '{b['type']}',\n"
    if "text" in b:
        p1_ts += f"      text: `{escape_ts(b['text'])}`,\n"
    if "items" in b:
        p1_ts += f"      items: {json.dumps(b['items'], ensure_ascii=False, indent=8).strip()},\n"
    if "tableData" in b:
        p1_ts += f"      tableData: {json.dumps(b['tableData'], ensure_ascii=False, indent=8).strip()},\n"
    if b.get("footnoteIds"):
        p1_ts += f"      footnoteIds: {json.dumps(b['footnoteIds'])},\n"
    p1_ts += "    },\n"

p1_ts += f"""  ],
  footnotes: {json.dumps(p1_footnotes, ensure_ascii=False, indent=4)},
  references: {json.dumps(p1_ref_items, ensure_ascii=False, indent=4)},
}};
"""
with open('src/data/part1.ts', 'w', encoding='utf-8') as f:
    f.write(p1_ts)
print("Updated src/data/part1.ts")

# ==============================================================================
# 5. PART 2
# ==============================================================================
part2_body = elements[280:441]
part2_refs = elements[441:516]

p2_ref_items = []
p2_footnotes = {}
for el in part2_refs[1:]:
    ref = parse_ref_item(el['text'])
    if ref:
        p2_ref_items.append({
            "id": ref["ref_id"],
            "code": ref["code"],
            "citation": ref["citation"],
            "url": ref["url"]
        })
        p2_footnotes[ref["code"]] = {
            "id": ref["num"],
            "code": ref["code"],
            "title": ref["title"],
            "authorOrSource": ref["author"],
            "year": ref["year"],
            "justification": f"Fuente académica y soporte investigativo para la Parte 2 ({ref['author']}, {ref['year']}).",
            "url": ref["url"]
        }

p2_subsections = [
    {"id": "p2-casos", "title": "2.1. Casos de estudio integrales agrupados por regiones", "level": 2},
    {"id": "p2-tablas", "title": "Matrices comparativas internacionales (Tablas 2.1, 2.2 y 2.3)", "level": 3},
    {"id": "p2-cognitivo", "title": "2.2. Aprendizaje Cognitivo y Fundamentos Tecnopedagógicos", "level": 2},
    {"id": "p2-vida", "title": "2.3. Aprendizaje para la Vida", "level": 2},
    {"id": "p2-conclusiones", "title": "2.4. Conclusiones", "level": 2},
]

p2_blocks = []
cur_list = []
table_idx = 1
for el in part2_body[2:]:
    if el['type'] == 'table':
        flush_list(p2_blocks, cur_list, "p2")
        headers = el['rows'][0]
        rows = el['rows'][1:]
        captions = {
            1: "TABLA 2.1. Comparación pedagógica de los casos de estudio",
            2: "TABLA 2.2. Software de AI, tiempo semanal de uso y equipamiento requerido por estudiante",
            3: "TABLA 2.3. Costo de software, costo de equipamiento y presencia global"
        }
        p2_blocks.append({
            "id": f"p2-tabla-{table_idx}",
            "type": "table",
            "tableData": {
                "caption": captions.get(table_idx, f"Tabla 2.{table_idx}"),
                "headers": headers,
                "rows": rows
            }
        })
        table_idx += 1
        continue

    txt = clean_txt(el['text'])
    if not txt:
        continue
    st = el.get('style')
    is_list = el.get('is_list') or st == 'ListParagraph'

    if st == 'Heading2':
        flush_list(p2_blocks, cur_list, "p2")
        p2_blocks.append({
            "id": f"p2-h2-{len(p2_blocks)}",
            "type": "heading2",
            "text": txt
        })
        continue

    if any(txt.startswith(f"TABLA 2.{k}") for k in [1, 2, 3]):
        continue

    if is_numbered_line(txt):
        if cur_list and not any(is_numbered_line(x) for x in cur_list):
            flush_list(p2_blocks, cur_list, "p2")
        cur_list.append(txt)
        continue

    if is_list:
        if cur_list and any(is_numbered_line(x) for x in cur_list):
            flush_list(p2_blocks, cur_list, "p2")
        cur_list.append(txt)
        continue

    flush_list(p2_blocks, cur_list, "p2")
    cits = extract_citations(txt)
    fn_ids = [f"fn-{c.replace('.', '-')}" for c in cits]
    p2_blocks.append({
        "id": f"p2-b-{len(p2_blocks)}",
        "type": "paragraph",
        "text": txt,
        "footnoteIds": fn_ids if fn_ids else None
    })
flush_list(p2_blocks, cur_list, "p2")

p2_ts = f"""import {{ Chapter }} from '../types';

export const part2Chapter: Chapter = {{
  id: 'parte-2',
  slug: 'parte-2',
  part: 'Parte II',
  partNumber: '2',
  number: '2',
  title: '¿Cuál es la situación del uso de la IA en la Educación Básica en el Mundo?',
  subtitle: 'Análisis global, casos de estudio y taxonomía de sistemas tecnopedagógicos',
  author: 'Hilmer Castillo Bescanza',
  readingTimeMinutes: 20,
  subSections: {json.dumps(p2_subsections, ensure_ascii=False, indent=4)},
  blocks: [
"""
for b in p2_blocks:
    p2_ts += f"    {{\n      id: '{b['id']}',\n      type: '{b['type']}',\n"
    if "text" in b:
        p2_ts += f"      text: `{escape_ts(b['text'])}`,\n"
    if "items" in b:
        p2_ts += f"      items: {json.dumps(b['items'], ensure_ascii=False, indent=8).strip()},\n"
    if "tableData" in b:
        p2_ts += f"      tableData: {json.dumps(b['tableData'], ensure_ascii=False, indent=8).strip()},\n"
    if b.get("footnoteIds"):
        p2_ts += f"      footnoteIds: {json.dumps(b['footnoteIds'])},\n"
    p2_ts += "    },\n"

p2_ts += f"""  ],
  footnotes: {json.dumps(p2_footnotes, ensure_ascii=False, indent=4)},
  references: {json.dumps(p2_ref_items, ensure_ascii=False, indent=4)},
}};
"""
with open('src/data/part2.ts', 'w', encoding='utf-8') as f:
    f.write(p2_ts)
print("Updated src/data/part2.ts")

# ==============================================================================
# 6. PART 3
# ==============================================================================
part3_body = elements[516:875]
part3_refs = elements[875:946]

p3_ref_items = []
p3_footnotes = {}
for el in part3_refs[1:]:
    ref = parse_ref_item(el['text'])
    if ref:
        p3_ref_items.append({
            "id": ref["ref_id"],
            "code": ref["code"],
            "citation": ref["citation"],
            "url": ref["url"]
        })
        p3_footnotes[ref["code"]] = {
            "id": ref["num"],
            "code": ref["code"],
            "title": ref["title"],
            "authorOrSource": ref["author"],
            "year": ref["year"],
            "justification": f"Marco teórico e ingeniería del proyecto para la Parte 3 ({ref['author']}, {ref['year']}).",
            "url": ref["url"]
        }

p3_subsections = [
    {"id": "p3-oportunidades", "title": "3.1. Las Oportunidades", "level": 2},
    {"id": "p3-manejando", "title": "3.2. Manejando las Oportunidades", "level": 2},
    {"id": "p3-op1", "title": "Oportunidad 1: Abrir el diseño curricular", "level": 3},
    {"id": "p3-op2", "title": "Oportunidad 2: Rebalancear los aprendizajes cognitivos", "level": 3},
    {"id": "p3-op3", "title": "Oportunidad 3: Seleccionar Aprendizajes para la Vida", "level": 3},
    {"id": "p3-op4", "title": "Oportunidad 4: Niveles de utilización de la IA", "level": 3},
    {"id": "p3-op5", "title": "Oportunidad 5: Redefinición del rol docente", "level": 3},
    {"id": "p3-op6", "title": "Oportunidad 6: Investigación y desarrollo educativo", "level": 3},
    {"id": "p3-op7", "title": "Oportunidad 7: Infraestructura educativa autosostenible (NEMA)", "level": 3},
    {"id": "p3-dinamica", "title": "3.3. Dinámica de Oportunidades", "level": 2},
    {"id": "p3-conclusiones", "title": "3.4. Conclusiones finales", "level": 2},
]

p3_blocks = []
cur_list = []
p3_table_idx = 1
for el in part3_body[2:]:
    if el['type'] == 'table':
        flush_list(p3_blocks, cur_list, "p3")
        headers = el['rows'][0]
        rows = el['rows'][1:]
        captions = {
            1: "TABLA 3.1. Matríz PISA: 12 Competencias de Resolución Colaborativa de Problemas",
            2: "TABLA 3.2. Comparación regional de destrezas técnicas y apresto corporal"
        }
        p3_blocks.append({
            "id": f"p3-tabla-{p3_table_idx}",
            "type": "table",
            "tableData": {
                "caption": captions.get(p3_table_idx, f"Tabla 3.{p3_table_idx}"),
                "headers": headers,
                "rows": rows
            }
        })
        p3_table_idx += 1
        continue

    txt = clean_txt(el['text'])
    if not txt:
        continue
    st = el.get('style')
    is_list = el.get('is_list') or st == 'ListParagraph'

    if st in ['Heading2', 'Heading3']:
        flush_list(p3_blocks, cur_list, "p3")
        b_type = "heading2" if st == 'Heading2' else "heading3"
        p3_blocks.append({
            "id": f"p3-h-{len(p3_blocks)}",
            "type": b_type,
            "text": txt
        })
        continue

    if is_subheading_line(txt):
        flush_list(p3_blocks, cur_list, "p3")
        p3_blocks.append({
            "id": f"p3-sub-{len(p3_blocks)}",
            "type": "heading3",
            "text": txt
        })
        continue

    if any(txt.startswith(f"TABLA 3.{k}") for k in [1, 2]):
        continue

    # Numbered / lettered items (e.g. 1. or a.)
    if is_numbered_line(txt):
        if cur_list and not any(is_numbered_line(x) for x in cur_list):
            flush_list(p3_blocks, cur_list, "p3")
        cur_list.append(txt)
        continue

    # Explanatory lines ending in colon are paragraphs
    if txt.endswith(':') or txt.startswith('Establecer los niveles') or not is_list:
        flush_list(p3_blocks, cur_list, "p3")
        cits = extract_citations(txt)
        fn_ids = [f"fn-{c.replace('.', '-')}" for c in cits]
        p3_blocks.append({
            "id": f"p3-b-{len(p3_blocks)}",
            "type": "paragraph",
            "text": txt,
            "footnoteIds": fn_ids if fn_ids else None
        })
        if "NEMA: módulos transportables sobre contenedores" in txt:
            p3_blocks.append({
                "id": "p3-nema-architecture",
                "type": "nemaModules",
                "stats": [
                    {"value": "NEMA-A", "label": "Aula Cognitiva e Idiomas", "detail": "30 estaciones ergonómicas con laptops y auriculares aislantes"},
                    {"value": "NEMA-T", "label": "Taller Técnico y Maker", "detail": "Bancos de trabajo para electrónica, soldadura, solar y robótica"},
                    {"value": "NEMA-C", "label": "Comedor y Cocina PAE", "detail": "Cocina industrial y refrigeración solar para el 100% de los alumnos"},
                    {"value": "NEMA-S", "label": "Sanitarios y Potencia", "detail": "Bancos de baterías LiFePO4, inversores y salas de aseo secas"},
                    {"value": "EXTERIOR", "label": "Circuito de Apresto Corporal", "detail": "Área perimetral techada para acondicionamiento y fuerza"},
                    {"value": "OFF-GRID", "label": "Autonomía Total", "detail": "Solar fotovoltaico, ósmosis inversa de agua de lluvia y Starlink"}
                ]
            })
        continue

    # Unnumbered bullet list items
    if cur_list and any(is_numbered_line(x) for x in cur_list):
        flush_list(p3_blocks, cur_list, "p3")
    cur_list.append(txt)

flush_list(p3_blocks, cur_list, "p3")

p3_ts = f"""import {{ Chapter }} from '../types';

export const part3Chapter: Chapter = {{
  id: 'parte-3',
  slug: 'parte-3',
  part: 'Parte III',
  partNumber: '3',
  number: '3',
  title: '¿Hacia dónde vamos?',
  subtitle: 'Tormenta de Oportunidades: Propuesta integral para la reconstrucción de la educación básica en Venezuela',
  author: 'Hilmer Castillo Bescanza',
  readingTimeMinutes: 25,
  subSections: {json.dumps(p3_subsections, ensure_ascii=False, indent=4)},
  blocks: [
"""
for b in p3_blocks:
    p3_ts += f"    {{\n      id: '{b['id']}',\n      type: '{b['type']}',\n"
    if "text" in b:
        p3_ts += f"      text: `{escape_ts(b['text'])}`,\n"
    if "items" in b:
        p3_ts += f"      items: {json.dumps(b['items'], ensure_ascii=False, indent=8).strip()},\n"
    if "tableData" in b:
        p3_ts += f"      tableData: {json.dumps(b['tableData'], ensure_ascii=False, indent=8).strip()},\n"
    if "stats" in b:
        p3_ts += f"      stats: {json.dumps(b['stats'], ensure_ascii=False, indent=8).strip()},\n"
    if b.get("footnoteIds"):
        p3_ts += f"      footnoteIds: {json.dumps(b['footnoteIds'])},\n"
    p3_ts += "    },\n"

p3_ts += f"""  ],
  footnotes: {json.dumps(p3_footnotes, ensure_ascii=False, indent=4)},
  references: {json.dumps(p3_ref_items, ensure_ascii=False, indent=4)},
}};
"""
with open('src/data/part3.ts', 'w', encoding='utf-8') as f:
    f.write(p3_ts)
print("Updated src/data/part3.ts")

# ==============================================================================
# 7. APPENDIX 1
# ==============================================================================
app1_elements = elements[946:1222]
app1_blocks = []
sub_sections_app1 = [
    {"id": "ap1-intro", "title": "Metodología y Taxonomía de los 25 Casos de Estudio", "level": 2},
    {"id": "ap1-casos", "title": "Fichas Técnicas de los 25 Casos de Estudio", "level": 2}
]

cases_list = []
current_case = None

for el in app1_elements:
    txt = clean_txt(el.get('text', ''))
    if not txt:
        continue
    m = re.match(r'2\.1\.(\d+)\.\s*(.*)', txt)
    if m:
        if current_case:
            cases_list.append(current_case)
        c_num = int(m.group(1))
        full_title = m.group(2).strip()
        reg = 'Global'
        if 'Estados Unidos' in full_title or 'USA' in full_title:
            reg = 'USA'
        elif 'China' in full_title:
            reg = 'China'
        elif any(k in full_title for k in ['Asia', 'Corea', 'Japón', 'India', 'Singapur']):
            reg = 'Asia'
        elif any(k in full_title for k in ['Europa', 'Reino Unido', 'UK', 'Estonia', 'Alemania', 'Finlandia']):
            reg = 'Europa'
        elif any(k in full_title for k in ['Latinoamérica', 'Brasil', 'México', 'Colombia', 'Perú', 'Chile', 'Argentina']):
            reg = 'Latinoamérica'
        
        name = full_title
        if '(' in full_title:
            name = full_title.split('(')[0].strip()
        current_case = {
            'id': f'cs-{c_num}',
            'name': name,
            'region': reg,
            'country': full_title.split('(')[1].rstrip(')') if '(' in full_title else reg,
            'schoolLevel': 'K-12',
            'subjects': ['Transversal'],
            'teacherRole': '',
            'socraticTool': True,
            'softwareAi': name,
            'weeklyTime': 'Variable',
            'hardware': 'Laptop / Tablet',
            'softwareCost': 'Variable',
            'hardwareCost': '$250-$500',
            'yearsActive': '2020-2026',
            'dailyRoutine': '',
            'teacherTraining': '',
            'aiRole': '',
            'studentsPerClass': '15-25'
        }
        continue
    
    if current_case:
        clean = txt.lstrip('•').strip()
        if clean.startswith('Descripción de la dinámica escolar diaria:'):
            current_case['dailyRoutine'] = clean.split(':', 1)[1].strip()
        elif clean.startswith('Rol de los profesores:'):
            current_case['teacherRole'] = clean.split(':', 1)[1].strip()
        elif clean.startswith('Entrenamiento de los profesores:'):
            current_case['teacherTraining'] = clean.split(':', 1)[1].strip()
        elif clean.startswith('Rol de las herramientas de la IA:'):
            current_case['aiRole'] = clean.split(':', 1)[1].strip()
        elif clean.startswith('Número de estudiantes por clase:'):
            current_case['studentsPerClass'] = clean.split(':', 1)[1].strip()
        elif clean.startswith('Niveles de primaria y secundaria que cubre:'):
            current_case['schoolLevel'] = clean.split(':', 1)[1].strip()
        elif clean.startswith('Materias curriculares que cubre:'):
            current_case['subjects'] = [s.strip() for s in clean.split(':', 1)[1].split(',')]
        elif clean.startswith('Costo promedio por estudiantes:'):
            current_case['softwareCost'] = clean.split(':', 1)[1].strip()
        elif clean.startswith('Tiempo que ha durado el caso de estudio en funcionamiento:'):
            current_case['yearsActive'] = clean.split(':', 1)[1].strip()

if current_case:
    cases_list.append(current_case)

cur_list = []
for el in app1_elements[1:]:
    txt = clean_txt(el['text'])
    if not txt:
        continue
    st = el.get('style')
    is_list = el.get('is_list') or st == 'ListParagraph'

    if st == 'Heading2' or re.match(r'^2\.1\.\d+\.', txt):
        flush_list(app1_blocks, cur_list, "ap1")
        app1_blocks.append({
            "id": f"ap1-h2-{len(app1_blocks)}",
            "type": "heading2",
            "text": txt
        })
        continue

    if is_numbered_line(txt):
        if cur_list and not any(is_numbered_line(x) for x in cur_list):
            flush_list(app1_blocks, cur_list, "ap1")
        cur_list.append(txt)
        continue

    if is_list:
        if cur_list and any(is_numbered_line(x) for x in cur_list):
            flush_list(app1_blocks, cur_list, "ap1")
        cur_list.append(txt)
        continue

    flush_list(app1_blocks, cur_list, "ap1")
    app1_blocks.append({
        "id": f"ap1-p-{len(app1_blocks)}",
        "type": "paragraph",
        "text": txt
    })
flush_list(app1_blocks, cur_list, "ap1")

app1_ts = f"""import {{ Chapter, CaseStudy }} from '../types';

export const caseStudiesList: CaseStudy[] = {json.dumps(cases_list, ensure_ascii=False, indent=2)};

export const appendix1Chapter: Chapter = {{
  id: 'apendice-1',
  slug: 'apendice-1',
  part: 'Apéndices',
  partNumber: 'A1',
  number: 'A.1',
  title: 'Apéndice 1: Fichas Técnicas de los 25 Casos de Estudio',
  subtitle: 'Documentación detallada de experiencias internacionales de IA en educación básica',
  author: 'Hilmer Castillo Bescanza',
  readingTimeMinutes: 30,
  subSections: {json.dumps(sub_sections_app1, ensure_ascii=False, indent=4)},
  blocks: [
"""
for b in app1_blocks:
    app1_ts += f"    {{\n      id: '{b['id']}',\n      type: '{b['type']}',\n"
    if "text" in b:
        app1_ts += f"      text: `{escape_ts(b['text'])}`,\n"
    if "items" in b:
        app1_ts += f"      items: {json.dumps(b['items'], ensure_ascii=False, indent=8).strip()},\n"
    app1_ts += "    },\n"

app1_ts += """  ],
  footnotes: {},
  references: [],
};
"""
with open('src/data/appendix1.ts', 'w', encoding='utf-8') as f:
    f.write(app1_ts)
print("Updated src/data/appendix1.ts")

# ==============================================================================
# 8. APPENDIX 2
# ==============================================================================
app2_elements = elements[1222:]
app2_blocks = []
sub_sections_app2 = [
    {"id": "ap2-intro", "title": "Catálogo Tecnológico de Software de IA Educativa", "level": 2},
    {"id": "ap2-tools", "title": "Fichas Técnicas de las 13 Plataformas de IA", "level": 2}
]

platforms_list = []
current_plat = None

for el in app2_elements:
    txt = clean_txt(el.get('text', ''))
    if not txt:
        continue
    m = re.match(r'2\.2\.9\.(\d+)\.\s*(.*)', txt)
    if m:
        if current_plat:
            platforms_list.append(current_plat)
        p_num = int(m.group(1))
        name = m.group(2).strip()
        current_plat = {
            'id': f'plat-{p_num}',
            'name': name,
            'institution': name,
            'country': 'Global',
            'pedagogicalFoundations': '',
            'developmentAndPublishers': '',
            'softwareAndHardwareCost': '',
            'teacherStudentRatio': '',
            'highlights': []
        }
        continue
    
    if current_plat:
        clean = txt.lstrip('•').strip()
        if clean.startswith('Fundamentos:'):
            current_plat['pedagogicalFoundations'] = clean.split(':', 1)[1].strip()
        elif clean.startswith('Desarrollo / Editoriales:'):
            current_plat['developmentAndPublishers'] = clean.split(':', 1)[1].strip()
        elif clean.startswith('Costo software / equipamiento:'):
            current_plat['softwareAndHardwareCost'] = clean.split(':', 1)[1].strip()
        elif clean.startswith('Ratio docente/estudiante:'):
            current_plat['teacherStudentRatio'] = clean.split(':', 1)[1].strip()

if current_plat:
    platforms_list.append(current_plat)

cur_list = []
for el in app2_elements[1:]:
    txt = clean_txt(el['text'])
    if not txt:
        continue
    st = el.get('style')
    is_list = el.get('is_list') or st == 'ListParagraph'

    if st == 'Heading2' or re.match(r'^2\.2\.9\.\d+\.', txt):
        flush_list(app2_blocks, cur_list, "ap2")
        app2_blocks.append({
            "id": f"ap2-h2-{len(app2_blocks)}",
            "type": "heading2",
            "text": txt
        })
        continue

    if is_numbered_line(txt):
        if cur_list and not any(is_numbered_line(x) for x in cur_list):
            flush_list(app2_blocks, cur_list, "ap2")
        cur_list.append(txt)
        continue

    if is_list:
        if cur_list and any(is_numbered_line(x) for x in cur_list):
            flush_list(app2_blocks, cur_list, "ap2")
        cur_list.append(txt)
        continue

    flush_list(app2_blocks, cur_list, "ap2")
    app2_blocks.append({
        "id": f"ap2-p-{len(app2_blocks)}",
        "type": "paragraph",
        "text": txt
    })
flush_list(app2_blocks, cur_list, "ap2")

app2_ts = f"""import {{ Chapter, PlatformDetail }} from '../types';

export const platformsList: PlatformDetail[] = {json.dumps(platforms_list, ensure_ascii=False, indent=2)};

export const appendix2Chapter: Chapter = {{
  id: 'apendice-2',
  slug: 'apendice-2',
  part: 'Apéndices',
  partNumber: 'A2',
  number: 'A.2',
  title: 'Apéndice 2: Fichas Técnicas de los 13 Softwares de IA',
  subtitle: 'Especificaciones técnicas, modelos pedagógicos y costos de licenciamiento',
  author: 'Hilmer Castillo Bescanza',
  readingTimeMinutes: 20,
  subSections: {json.dumps(sub_sections_app2, ensure_ascii=False, indent=4)},
  blocks: [
"""
for b in app2_blocks:
    app2_ts += f"    {{\n      id: '{b['id']}',\n      type: '{b['type']}',\n"
    if "text" in b:
        app2_ts += f"      text: `{escape_ts(b['text'])}`,\n"
    if "items" in b:
        app2_ts += f"      items: {json.dumps(b['items'], ensure_ascii=False, indent=8).strip()},\n"
    app2_ts += "    },\n"

app2_ts += """  ],
  footnotes: {},
  references: [],
};
"""
with open('src/data/appendix2.ts', 'w', encoding='utf-8') as f:
    f.write(app2_ts)
print("Updated src/data/appendix2.ts")
print("All 8 data files have been regenerated successfully!")
