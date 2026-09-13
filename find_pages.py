import subprocess
for p in range(1, 20):
    try:
        out = subprocess.check_output([
            'gs', '-sDEVICE=txtwrite', f'-dFirstPage={p}', f'-dLastPage={p}',
            '-o', '-', 'public/recursos/documento-completo-100-paginas.pdf'
        ], stderr=subprocess.DEVNULL).decode('utf-8', errors='ignore')
        first_line = [line.strip() for line in out.split('\n') if line.strip()][:3]
        print(f"Page {p}:", first_line)
    except Exception as e:
        print(f"Page {p} error:", e)
