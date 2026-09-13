import subprocess

for p in range(1, 36):
    out = subprocess.check_output([
        'gs', '-q', '-sDEVICE=txtwrite', f'-dFirstPage={p}', f'-dLastPage={p}',
        '-o', '-', 'public/recursos/presentacion-35-slides.pdf'
    ]).decode('utf-8', errors='ignore')
    lines = [l.strip() for l in out.split('\n') if l.strip() and not l.startswith('GPL Ghostscript')]
    first_few = " | ".join(lines[:3]) if lines else "(image-only)"
    print(f"Slide {p:02d}: {first_few[:75]}")
