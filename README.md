# Express File Auth Service

Modern web uygulamaları için geliştirilmiş, güvenli ve ölçeklenebilir bir RESTful API servisi. Bu proje, dosya yönetimi, kimlik doğrulama ve e-posta işlemleri gibi temel özellikleri tek bir çatı altında birleştiriyor.

## 🌟 Temel Özellikler

### 🔐 Güvenlik ve Kimlik Doğrulama
- JWT (JSON Web Token) tabanlı güvenli kimlik doğrulama sistemi
- Şifreli veri depolama ve güvenli oturum yönetimi
- CORS koruması ve güvenlik başlıkları
- Rate limiting ve brute force koruması

### 📁 Dosya İşlemleri
- Çoklu dosya yükleme desteği
- Otomatik görüntü optimizasyonu ve boyutlandırma
- Güvenli dosya depolama ve erişim kontrolü
- Dosya tipi doğrulama ve virüs taraması

### 📧 E-posta Servisi
- HTML formatında e-posta gönderimi
- Şablon tabanlı e-posta sistemi
- Toplu e-posta gönderim desteği
- E-posta doğrulama ve takip sistemi

### 🗄️ Veritabanı ve Depolama
- MongoDB ile ölçeklenebilir veri depolama
- Verimli veri modelleme ve ilişkisel yapı
- Otomatik veri yedekleme ve kurtarma
- Veritabanı performans optimizasyonu

## 🛠️ Teknoloji Stack'i

### Backend
- Node.js (v14+)
- Express.js (v4.18+)
- MongoDB (v5+)
- Mongoose ODM

### Güvenlik
- JWT (JSON Web Tokens)
- bcryptjs
- Helmet.js
- CORS

### Dosya İşleme
- Multer
- Sharp
- fs-extra

### E-posta
- Nodemailer
- HTML Templates

### Doğrulama ve Validasyon
- Joi
- Express Validator

## 🚀 Başlangıç

### Gereksinimler
- Node.js (v14 veya üzeri)
- MongoDB (v5 veya üzeri)
- npm veya yarn

### Kurulum

1. Repoyu klonlayın:
```bash
git clone https://github.com/Aqueex/RESTful-API
cd RESTful-API
```

2. Bağımlılıkları yükleyin:
```bash
npm install
```

3. Ortam değişkenlerini ayarlayın:
```bash
cp .env.example .env
# .env dosyasını düzenleyin
```

4. Uygulamayı başlatın:
```bash
npm start
```

## 📁 Proje Yapısı

```
├── config/         # Yapılandırma dosyaları
├── controllers/    # İş mantığı kontrolcüleri
├── middleware/     # Ara yazılımlar
├── models/         # Veritabanı modelleri
├── routes/         # API rotaları
├── services/       # İş mantığı servisleri
├── utils/          # Yardımcı fonksiyonlar
├── uploads/        # Yüklenen dosyalar
├── public/         # Statik dosyalar
└── logs/          # Log dosyaları
```

## 🔒 Güvenlik Özellikleri

- JWT tabanlı kimlik doğrulama
- Şifreli veri depolama
- CORS koruması
- Rate limiting
- Dosya yükleme güvenliği
- XSS ve CSRF koruması
- SQL injection koruması
- Güvenli başlık yapılandırması

## 📝 API Dokümantasyonu

### Kimlik Doğrulama Endpoint'leri
- `POST /register` - Yeni kullanıcı kaydı
- `POST /login` - Kullanıcı girişi
- `PATCH /avatarUpload/:id` - Profil fotoğrafı yükleme (Kimlik doğrulama gerekli)
- `POST /forgot-password` - Şifre sıfırlama e-postası gönderme
- `POST /reset-password` - Şifre sıfırlama
- `GET /protected` - Kullanıcı bilgilerini getirme (Kimlik doğrulama gerekli)

### Test Yönetimi Endpoint'leri (Admin)
- `POST /testCreate` - Yeni test oluşturma (Admin yetkisi gerekli)
- `POST /questionCreate` - Test sorusu oluşturma (Admin yetkisi gerekli)
- `GET /tests/:id` - Test ve sorularını getirme (Admin yetkisi gerekli)

## 🧪 Test

```bash
# Unit testleri çalıştırma
npm run test

# Test coverage raporu
npm run test:coverage
```

## 📈 Performans

- Yüksek eşzamanlı istek desteği
- Önbellek mekanizması
- Asenkron işlem yönetimi
- Veritabanı sorgu optimizasyonu

## 🤝 Katkıda Bulunma

1. Fork'layın
2. Feature branch oluşturun (`git checkout -b feature/amazing-feature`)
3. Değişikliklerinizi commit edin (`git commit -m 'feat: Add amazing feature'`)
4. Branch'inizi push edin (`git push origin feature/amazing-feature`)
5. Pull Request oluşturun

## 📄 Lisans

Bu proje MIT lisansı altında lisanslanmıştır. Detaylar için [LICENSE](LICENSE) dosyasına bakın.

## 📞 İletişim

Proje Sahibi - [@azizcakmak](https://www.linkedin.com/in/azizcakmak/)

Proje Linki: [Github](https://github.com/Aqueex/RESTful-API) 