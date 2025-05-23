# Dayı API Projesi

Bu proje, modern bir RESTful API uygulamasıdır. Node.js ve Express.js kullanılarak geliştirilmiştir.

## 🚀 Özellikler

- JWT tabanlı kimlik doğrulama sistemi
- MongoDB veritabanı entegrasyonu
- Dosya yükleme ve işleme (Multer ve Sharp ile)
- E-posta gönderimi (Nodemailer)
- Güvenli şifreleme (bcryptjs)
- CORS desteği
- Dosya sistemi işlemleri
- Veri doğrulama (Joi)

## 🛠️ Teknolojiler

- Node.js
- Express.js
- MongoDB
- JWT (JSON Web Tokens)
- Multer (Dosya yükleme)
- Sharp (Görüntü işleme)
- Nodemailer (E-posta gönderimi)
- bcryptjs (Şifreleme)
- Joi (Veri doğrulama)

## 📦 Kurulum

1. Projeyi klonlayın:
```bash
git clone [repo-url]
```

2. Bağımlılıkları yükleyin:
```bash
npm install
```

3. `.env` dosyasını oluşturun ve gerekli değişkenleri ayarlayın:
```env
PORT=3000
MONGODB_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
```

4. Uygulamayı başlatın:
```bash
npm start
```

## 📁 Proje Yapısı

```
├── config/         # Yapılandırma dosyaları
├── controllers/    # Route işleyicileri
├── middleware/     # Ara yazılımlar
├── models/         # Veritabanı modelleri
├── routes/         # API rotaları
├── uploads/        # Yüklenen dosyalar
├── public/         # Statik dosyalar
└── logs/          # Log dosyaları
```

## 🔒 Güvenlik

- JWT tabanlı kimlik doğrulama
- Şifreli veri depolama
- CORS koruması
- Dosya yükleme güvenliği
- Veri doğrulama

## 📝 API Endpoints

- `/auth/*` - Kimlik doğrulama işlemleri
- `/test/*` - Test rotaları
- `/uploads/*` - Yüklenen dosyalara erişim
- `/public/*` - Statik dosyalara erişim

## 👨‍💻 Geliştirici

[Aziz Çakmak]

## 📄 Lisans

Bu proje ISC lisansı altında lisanslanmıştır. 