# 🕒 Analog Clock / Analog Saat / Analoge Uhr

---
TR — Türkçe
---

## 🕰️ Proje Hakkında
Bu proje, sadece HTML, CSS ve JavaScript kullanılarak oluşturulmuş basit ve şık bir **Analog Saat (Analog Clock)** uygulamasıdır. Saat, sistem zamanına göre gerçek zamanlı olarak saat, dakika ve saniye kollarını hareket ettirir.

## 🚀 Özellikler
- Gerçek zamanlı dinamik saat hareketi.
- JavaScript `Date()` API kullanımı ile doğru zamanlama.
- CSS `transform` ve `transition` ile akıcı kol hareketleri.
- Responsive tasarım ile farklı ekran boyutlarına uyum.
- Klavye ile erişilebilir aydınlık/koyu tema düğmesi.
- Hafif, bağımsız (frameworksüz) ve eğitim amaçlı okunabilir kod.

## 🧩 Kullanılan Teknolojiler
- HTML5 — Yapısal iskelet
- CSS3 — Stil ve animasyonlar
- JavaScript (ES6+) — Zaman hesaplama ve DOM güncellemeleri

## 📂 Proje Dosya Yapısı
Analog_Clock/
- index.html
- style.css
- main.js
- README.md

## ⚙️ Kurulum ve Çalıştırma
1. Depoyu klonla:
```bash
git clone https://github.com/mhilmicicek07/Analog_Clock.git
cd Analog_Clock
```
2. `index.html` dosyasını tercih ettiğin tarayıcıda aç.
3. Hepsi bu kadar — saat, sistem saatine göre çalışacaktır.

## 🧠 Teknik Notlar
JavaScript'te saat açıları şu şekilde hesaplanır:
```js
secondHand.style.transform = `rotate(${seconds * 6}deg)`;
minuteHand.style.transform = `rotate(${minutes * 6}deg)`;
hourHand.style.transform = `rotate(${hours * 30 + minutes / 2}deg)`;
```
CSS'de `transform-origin` ile kolların merkezden dönmesi sağlanır; `transition` ile akıcı hareket elde edilir.

## 👨‍💻 Geliştirici
Mehmet Hilmi Çiçek — Full Stack Web Developer

## 🪪 Lisans
Açık kaynak — kodu inceleyebilir, değiştirebilir ve kişisel projelerinde kullanabilirsin.

---

EN — English
---

## 🕰️ About
This project is a simple, elegant Analog Clock built using only HTML, CSS and JavaScript. The clock updates the hour, minute and second hands in real time according to the system clock.

## 🚀 Features
- Real-time dynamic clock movement.
- Accurate time using JavaScript `Date()` API.
- Smooth hand animations with CSS `transform` and `transition`.
- Responsive layout across different screen sizes.
- Accessible light/dark theme toggle button.
- Lightweight and framework-free — great for learning.

## 🧩 Technologies Used
- HTML5 — Structure
- CSS3 — Styling & animations
- JavaScript (ES6+) — Time calculations and DOM updates

## 📂 Project Structure
Analog_Clock/
- index.html
- style.css
- main.js
- README.md

## ⚙️ Installation & Usage
1. Clone the repository:
```bash
git clone https://github.com/mhilmicicek07/Analog_Clock.git
cd Analog_Clock
```
2. Open `index.html` in your browser.
3. That's it — the clock will run according to your system time.

## 🧠 Technical Notes
Angles are calculated as:
```js
secondHand.style.transform = `rotate(${seconds * 6}deg)`;
minuteHand.style.transform = `rotate(${minutes * 6}deg)`;
hourHand.style.transform = `rotate(${hours * 30 + minutes / 2}deg)`;
```
Use `transform-origin` for pivoting at the correct point and `transition` for smooth motion.

## 👨‍💻 Author
Mehmet Hilmi Çiçek — Full Stack Web Developer

## 🪪 License
Open source — feel free to inspect, modify, and reuse.

---

DE — Deutsch
---

## 🕰️ Über das Projekt
Dieses Projekt ist eine einfache, elegante Analoge Uhr, erstellt mit nur HTML, CSS und JavaScript. Die Uhr aktualisiert Stunden-, Minuten- und Sekundenzeiger in Echtzeit anhand der Systemzeit.

## 🚀 Funktionen
- Echtzeit-Darstellung der Uhrzeiger.
- Präzise Zeit mit JavaScript `Date()` API.
- Sanfte Animationen durch CSS `transform` und `transition`.
- Responsives Design für verschiedene Bildschirmgrößen.
- Zugänglicher Button zum Wechsel zwischen hellem/dunklem Thema.
- Leichtgewichtig und framework-frei — gut zum Lernen.

## 🧩 Verwendete Technologien
- HTML5 — Struktur
- CSS3 — Gestaltung & Animationen
- JavaScript (ES6+) — Zeitberechnung und DOM-Aktualisierung

## 📂 Projektstruktur
Analog_Clock/
- index.html
- style.css
- main.js
- README.md

## ⚙️ Installation & Nutzung
1. Repository klonen:
```bash
git clone https://github.com/mhilmicicek07/Analog_Clock.git
cd Analog_Clock
```
2. `index.html` im Browser öffnen.
3. Fertig — die Uhr läuft entsprechend der Systemzeit.

## 🧠 Technische Hinweise
Winkel werden berechnet als:
```js
secondHand.style.transform = `rotate(${seconds * 6}deg)`;
minuteHand.style.transform = `rotate(${minutes * 6}deg)`;
hourHand.style.transform = `rotate(${hours * 30 + minutes / 2}deg)`;
```
`transform-origin` sorgt für die richtige Drehachse; `transition` erzeugt die flüssige Bewegung.

## 👨‍💻 Autor
Mehmet Hilmi Çiçek — Full Stack Web Developer

## 🪪 Lizenz
Open Source — Code darf eingesehen, verändert und wiederverwendet werden.
