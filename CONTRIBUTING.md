# Katkıda Bulunma Rehberi

Bu projeye katkıda bulunmak istediğiniz için teşekkürler! İşte katkıda bulunma sürecinizde size yardımcı olacak adımlar.

## 🚀 Başlangıç

1. Bu repoyu fork'layın
2. Yerel makinenizde klonlayın:
   ```bash
   git clone https://github.com/[KULLANICI_ADINIZ]/RESTful-API.git
   ```
3. Yeni bir branch oluşturun:
   ```bash
   git checkout -b feature/yeni-ozellik
   ```

## 💻 Geliştirme

1. Gerekli bağımlılıkları yükleyin:
   ```bash
   npm install
   ```

2. `.env.example` dosyasını `.env` olarak kopyalayın ve gerekli değişkenleri ayarlayın:
   ```bash
   cp .env.example .env
   ```

3. Değişikliklerinizi yapın ve test edin

## 📝 Commit Mesajları

Commit mesajlarınızı aşağıdaki formatta yazın:
- `feat:` Yeni özellik
- `fix:` Hata düzeltmesi
- `docs:` Dokümantasyon değişiklikleri
- `style:` Kod formatı değişiklikleri
- `refactor:` Kod refaktörü
- `test:` Test ekleme veya düzenleme
- `chore:` Genel bakım

Örnek:
```
feat: Kullanıcı profil sayfası eklendi
fix: Şifre sıfırlama hatası düzeltildi
```

## 🔍 Kod İnceleme Süreci

1. Değişikliklerinizi commit'leyin:
   ```bash
   git add .
   git commit -m "feat: Yeni özellik eklendi"
   ```

2. Branch'inizi push'layın:
   ```bash
   git push origin feature/yeni-ozellik
   ```

3. GitHub'da Pull Request oluşturun

4. Pull Request'iniz için açıklayıcı bir başlık ve detaylı açıklama yazın

## ✅ Pull Request Kontrol Listesi

- [ ] Kodunuz projenin mevcut stil rehberine uyuyor mu?
- [ ] Tüm testler başarıyla geçiyor mu?
- [ ] Yeni özellikler için test eklediniz mi?
- [ ] Dokümantasyonu güncellediniz mi?
- [ ] Commit mesajlarınız açıklayıcı mı?

## 🐛 Hata Raporlama

Hata raporu oluştururken lütfen şunları ekleyin:
- Hatanın kısa açıklaması
- Hatanın nasıl oluşturulacağı
- Beklenen davranış
- Ekran görüntüleri (varsa)
- Kullanılan işletim sistemi ve tarayıcı

## 📚 Kod Stili

- 2 boşluk girinti kullanın
- Noktalı virgül kullanın
- Tek tırnak kullanın
- Anlamlı değişken ve fonksiyon isimleri kullanın
- Her fonksiyon için JSDoc yorumları ekleyin

## 🤝 İletişim

Sorularınız veya önerileriniz için:
- GitHub Issues kullanın
- Pull Request açın
- [GitHub Profiliniz] üzerinden iletişime geçin

## 📄 Lisans

Bu projeye katkıda bulunarak, katkılarınızın projenin lisansı altında yayınlanmasını kabul etmiş olursunuz. 