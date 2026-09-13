import subprocess
for p in [1, 2, 6, 7, 8, 9, 10, 11, 12, 13]:
    out = subprocess.check_output([
        'gs', '-q', '-sDEVICE=txtwrite', f'-dFirstPage={p}', f'-dLastPage={p}',
        '-o', '-', 'public/recursos/documento-completo-100-paginas.pdf'
    ]).decode('utf-8', errors='ignore')
    clean_lines = [l.strip() for l in out.split('\n') if l.strip() and not l.startswith('GPL Ghostscript')]
    print(f"=== Page {p} ===")
    print('\n'.join(clean_lines[:8]))
