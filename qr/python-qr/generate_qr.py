import qrcode

# Data yang akan diubah menjadi QR code
data = "https://www.example.com"

# Membuat objek QRCode
qr = qrcode.QRCode(
    version=1,
    error_correction=qrcode.constants.ERROR_CORRECT_L,
    box_size=10,
    border=4,
)
qr.add_data(data)
qr.make(fit=True)

# Membuat gambar QR code
img = qr.make_image(fill_color="black", back_color="white")

# Simpan gambar QR code ke file
img.save("qr/qrcode.png")

print("QR code berhasil dibuat dan disimpan sebagai 'qrcode.png'")
