# 🕒 Analog Clock Uygulaması

Bu proje, gerçek zamanlı olarak saat, dakika ve saniye kollarını döndürerek çalışan şık bir **Analog Saat (Analog Clock)** uygulamasıdır.  
Uygulama, yalnızca **HTML**, **CSS** ve **JavaScript** kullanılarak geliştirilmiştir — yani tamamen tarayıcı üzerinde, harici bir kütüphane veya framework olmadan çalışır.

---

## 🚀 Özellikler

- 🕐 Gerçek zamanlı çalışan dinamik saat mekanizması.  
- ⚙️ **JavaScript `Date()` API** kullanılarak doğru sistem saatine göre güncel hareket.  
- 💫 Yumuşak geçişli kol animasyonları (CSS `transform` ve `transition` ile).  
- 🎨 Şık, modern ve sade tasarım — siyah zemin üzerinde kontrastlı kollar.  
- 📱 Responsive yapı: Farklı ekran boyutlarında düzgün görünüm.  
- 🧠 Hafif ve anlaşılır kod yapısı: Eğitim amaçlı da kullanılabilir.

---

## 🧩 Kullanılan Teknolojiler

| Teknoloji | Rolü |
|------------|-----------|
| **HTML5** | Saatin temel yapısal iskeletini oluşturur. |
| **CSS3** | Saat kadranı, kol tasarımları ve animasyonlardan sorumludur. |
| **JavaScript (ES6+)** | Zaman hesaplamasını yapar ve kolların dönüşünü dinamik olarak günceller. |

---

## 📂 Proje Dosya Yapısı

📁 Analog_Clock
├── 📄 index.html
├── 📄 main.js
├── 📄 README.md
└── 📄 style.css


---

## ⚙️ Kurulum ve Çalıştırma

Bu projeyi kendi bilgisayarında denemek için şu adımları takip edebilirsin:

1. Bu projeyi yerel ortamına klonla:

   ```bash
   git clone https://github.com/mhilmicicek07/Analog_Clock.git
Proje klasörüne geç:


cd Analog_Clock
index.html dosyasını tercih ettiğin tarayıcıda aç.

Hepsi bu kadar! 🎉
Artık saatin kollarının sistem saatine göre gerçek zamanlı olarak hareket ettiğini görebilirsin.

🧠 Teknik Açıklama
JavaScript kısmı (script.js), setInterval() veya requestAnimationFrame aracılığıyla her saniye sistem zamanını alır.

Bu değerler saniye, dakika ve saat kollarının dönüş açısına dönüştürülür:


secondHand.style.transform = `rotate(${seconds * 6}deg)`;
minuteHand.style.transform = `rotate(${minutes * 6}deg)`;
hourHand.style.transform = `rotate(${hours * 30 + minutes / 2}deg)`;
CSS tarafında transform-origin özelliği kullanılarak kolların merkezden dönmesi sağlanır.

Görsel tutarlılık için transition özelliğiyle kolların akıcı bir şekilde hareket etmesi sağlanmıştır.

👨‍💻 Geliştirici
Mehmet Hilmi Çiçek
💼 Full Stack Web Developer
📍 Geislingen an der Steige
💬 “Basit görünen bir saat bile, doğru zamanlamayla karmaşık bir mühendislik örneğidir.”

🪪 Lisans
Bu proje açık kaynaklıdır.
Kodu özgürce inceleyebilir, geliştirebilir veya kendi projelerinde kullanabilirsin.