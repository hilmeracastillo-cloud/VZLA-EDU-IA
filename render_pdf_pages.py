import subprocess

for p in range(1, 8):
    cmd = [
        'gs', '-q', '-dQUIET', '-dSAFER', '-dBATCH', '-dNOPAUSE', '-dNOPROMPT',
        '-dMaxBitmap=500000000', '-dAlignToPixels=0', '-dGridFitTT=2',
        '-sDEVICE=jpeg', '-dTextAlphaBits=4', '-dGraphicsAlphaBits=4',
        '-r150', f'-dFirstPage={p}', f'-dLastPage={p}',
        f'-sOutputFile=/tmp/page_check_{p}.jpg', '/tmp/resumen_exacto.pdf'
    ]
    subprocess.run(cmd, check=True)
    print(f"Rendered page {p}")
