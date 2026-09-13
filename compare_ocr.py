import subprocess

for p in range(1, 8):
    out = subprocess.check_output([
        'gs', '-q', '-sDEVICE=txtwrite', f'-dFirstPage={p}', f'-dLastPage={p}',
        '-o', '-', '/tmp/resumen_exacto.pdf'
    ]).decode('utf-8', errors='ignore')
    clean_lines = [l.strip() for l in out.split('\n') if l.strip() and not l.startswith('GPL Ghostscript')]
    print(f"=== Page {p} ({len(clean_lines)} lines) ===")
    print(clean_lines[:5])
