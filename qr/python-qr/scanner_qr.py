import cv2
from pyzbar.pyzbar import decode

# Fungsi untuk menangkap gambar dari kamera dan mendekode kode QR
def capture_and_decode_qr():
    cap = cv2.VideoCapture(0)  # Menggunakan kamera utama (index 0)

    while True:
        ret, frame = cap.read()

        if not ret:
            continue

        decoded_objects = decode(frame)

        for obj in decoded_objects:
            qr_data = obj.data.decode('utf-8')
            print("QR Code Data:", qr_data)

        cv2.imshow("QR Code Scanner", frame)

        if cv2.waitKey(1) & 0xFF == ord('q'):
            break

    cap.release()
    cv2.destroyAllWindows()

capture_and_decode_qr()
