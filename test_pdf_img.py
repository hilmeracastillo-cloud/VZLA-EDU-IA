import subprocess
import glob
from PIL import Image

for f in sorted(glob.glob('/tmp/pdf_img_*.jpg')):
    im = Image.open(f)
    print(f, im.size, im.format)
