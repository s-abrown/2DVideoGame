from PIL import Image
IMAGEPATH = "/Users/tessacattaneo/Desktop/2DVideoGame/assets/artTeachCu.png"

im = Image.open("/Users/tessacattaneo/Desktop/2DVideoGame/assets/KATEcu.png")
newsize = (500, 400)
newImage = im.resize(newsize)
newImage.save("KATEcu2.png")