from PIL import Image
import os, sys

image = "/Users/tessacattaneo/Desktop/2DVideoGame/assets/CVs_repo/EvansFR3.png"
name = "ArtteachCV"
max_size = 2048, 2048


img = Image.open(image)
size = (img.size[0], 2048)
img.resize(size, Image.NEAREST)
img.save('EvansFR3.png')