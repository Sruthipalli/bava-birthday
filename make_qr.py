import qrcode

# Replace with your published website URL
website_url = "https://YOUR-USERNAME.github.io/bava-birthday/"

qr = qrcode.QRCode(
    version=None,
    error_correction=qrcode.constants.ERROR_CORRECT_H,
    box_size=12,
    border=4
)

qr.add_data(website_url)
qr.make(fit=True)

image = qr.make_image(
    fill_color="#D63384",
    back_color="#FFF0F5"
)

image.save("Bava_Birthday_QR.png")

print("Birthday QR Created Successfully! ❤️")
