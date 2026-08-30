# Analog Clock

---
TR — Türkçe
---

## Proje Hakkında
Bu proje, sadece HTML, CSS ve JavaScript kullanılarak oluşturulmuş basit ve şık bir **Analog Saat** uygulamasıdır. Saat, sistem zamanına göre gerçek zamanlı olarak saat, dakika ve saniye kollarını hareket ettirir.

## Özellikler
- Gerçek zamanlı dinamik saat hareketi (`setInterval` ile her saniye güncelleme).
- JavaScript `Date` API kullanımı ile doğru zamanlama.
- Saniye ve dakika kolları yumuşak açı interpolasyonu ile hareket eder.
- CSS `transform-origin` ile kolların merkezden dönmesi sağlanır.
- Aydınlık/koyu tema geçişi; düğme etiketi ve `aria-pressed` durumu güncellenir.
- Klavye odaklanabilir tema düğmesi (`focus-visible` outline desteği).
- Hafif, bağımsız (framework gerektirmeyen) ve eğitim amaçlı okunabilir kod.

## Kullanılan Teknolojiler
- HTML5 — Yapısal iskelet
- CSS3 — Stil ve CSS değişkenleri ile tema yönetimi
- JavaScript (ES6+) — Zaman hesaplama ve DOM güncellemeleri

## Proje Dosya Yapısı
```
Analog_Clock/
├── index.html
├── style.css
├── main.js
└── README.md
```

## Kurulum ve Çalıştırma
1. Depoyu klonla:
```bash
git clone https://github.com/mhilmicicek07/Analog_Clock.git
cd Analog_Clock
```
2. `index.html` dosyasını tercih ettiğin tarayıcıda aç.
3. Hepsi bu kadar — saat, sistem saatine göre çalışacaktır.

## Teknik Notlar
Saat açıları `main.js` içinde şu şekilde hesaplanır:
```js
const secToDeg = date.getSeconds() * 6;
const minToDeg = date.getMinutes() * 6 + (date.getSeconds() / 60) * 6;
const hourToDeg = (date.getHours() % 12) * 30 + (date.getMinutes() / 60) * 30;

hourHand.style.transform   = `translateX(-50%) rotate(${hourToDeg}deg)`;
minuteHand.style.transform = `translateX(-50%) rotate(${minToDeg}deg)`;
secondHand.style.transform = `translateX(-50%) rotate(${secToDeg}deg)`;
```
Dakika ve saat kolları, saniye ve dakika değerlerini de hesaba katarak sürekli interpolasyon yapar. Kollar CSS `transition` yerine `setInterval(updateTime, 1000)` ile her saniye güncellenir.

Tema değiştirici düğme `.dark` sınıfını `.container` üzerine ekler/kaldırır; CSS değişkenleri (`--white-clr`, `--dark-clr` vb.) kaskad aracılığıyla tüm renk değerlerini günceller.

## Geliştirici
Mehmet Hilmi Çiçek — Full Stack Web Developer

## Lisans
Açık kaynak — kodu inceleyebilir, değiştirebilir ve kişisel projelerinde kullanabilirsin.

---

EN — English
---

## About
A simple, elegant analog clock built with HTML, CSS, and JavaScript only. The clock updates the hour, minute, and second hands in real time according to the system clock.

## Features
- Real-time clock movement updated every second via `setInterval`.
- Accurate time using the JavaScript `Date` API.
- Smooth angular interpolation for the minute and hour hands.
- CSS `transform-origin` pivots each hand from its base.
- Light/dark theme toggle that updates both the button label and `aria-pressed`.
- Keyboard-accessible theme button with `focus-visible` outline.
- Lightweight and framework-free — readable code suitable for learning.

## Technologies Used
- HTML5 — Structure
- CSS3 — Styling and theme management via CSS custom properties
- JavaScript (ES6+) — Time calculations and DOM updates

## Project Structure
```
Analog_Clock/
├── index.html
├── style.css
├── main.js
└── README.md
```

## Installation & Usage
1. Clone the repository:
```bash
git clone https://github.com/mhilmicicek07/Analog_Clock.git
cd Analog_Clock
```
2. Open `index.html` in your browser.
3. That's it — the clock runs according to your system time.

## Technical Notes
Hand angles are calculated in `main.js` as follows:
```js
const secToDeg = date.getSeconds() * 6;
const minToDeg = date.getMinutes() * 6 + (date.getSeconds() / 60) * 6;
const hourToDeg = (date.getHours() % 12) * 30 + (date.getMinutes() / 60) * 30;

hourHand.style.transform   = `translateX(-50%) rotate(${hourToDeg}deg)`;
minuteHand.style.transform = `translateX(-50%) rotate(${minToDeg}deg)`;
secondHand.style.transform = `translateX(-50%) rotate(${secToDeg}deg)`;
```
The minute and hour hands interpolate continuously using sub-unit values (seconds and minutes respectively). The hands are updated via `setInterval(updateTime, 1000)` rather than a CSS transition.

The theme toggle adds/removes the `.dark` class on `.container`; CSS custom properties (`--white-clr`, `--dark-clr`, etc.) cascade to update all color values.

## Author
Mehmet Hilmi Çiçek — Full Stack Web Developer

## License
Open source — feel free to inspect, modify, and reuse.

---

DE — Deutsch
---

## Über das Projekt
Eine einfache, elegante analoge Uhr, erstellt mit HTML, CSS und JavaScript. Die Uhr aktualisiert Stunden-, Minuten- und Sekundenzeiger in Echtzeit anhand der Systemzeit.

## Funktionen
- Echtzeit-Darstellung der Uhrzeiger, jede Sekunde via `setInterval` aktualisiert.
- Präzise Zeit mit der JavaScript `Date` API.
- Weiche Winkelinterpolation für Minuten- und Stundenzeiger.
- CSS `transform-origin` dreht jeden Zeiger um seinen Fuß.
- Hell/Dunkel-Umschalter, der Beschriftung und `aria-pressed` aktualisiert.
- Tastaturbedienbarer Button mit `focus-visible`-Umrandung.
- Leichtgewichtig und framework-frei — lesbarer Code zum Lernen.

## Verwendete Technologien
- HTML5 — Struktur
- CSS3 — Gestaltung und Theme-Verwaltung via CSS Custom Properties
- JavaScript (ES6+) — Zeitberechnung und DOM-Aktualisierung

## Projektstruktur
```
Analog_Clock/
├── index.html
├── style.css
├── main.js
└── README.md
```

## Installation & Nutzung
1. Repository klonen:
```bash
git clone https://github.com/mhilmicicek07/Analog_Clock.git
cd Analog_Clock
```
2. `index.html` im Browser öffnen.
3. Fertig — die Uhr läuft entsprechend der Systemzeit.

## Technische Hinweise
Winkel werden in `main.js` berechnet als:
```js
const secToDeg = date.getSeconds() * 6;
const minToDeg = date.getMinutes() * 6 + (date.getSeconds() / 60) * 6;
const hourToDeg = (date.getHours() % 12) * 30 + (date.getMinutes() / 60) * 30;

hourHand.style.transform   = `translateX(-50%) rotate(${hourToDeg}deg)`;
minuteHand.style.transform = `translateX(-50%) rotate(${minToDeg}deg)`;
secondHand.style.transform = `translateX(-50%) rotate(${secToDeg}deg)`;
```
Minuten- und Stundenzeiger interpolieren kontinuierlich unter Einbeziehung von Sekunden- bzw. Minutenwerten. Die Aktualisierung erfolgt über `setInterval(updateTime, 1000)` statt CSS-Transition.

Der Theme-Umschalter fügt `.dark` zur `.container`-Klasse hinzu oder entfernt sie; CSS Custom Properties (`--white-clr`, `--dark-clr` usw.) aktualisieren darüber alle Farbwerte.

## Autor
Mehmet Hilmi Çiçek — Full Stack Web Developer

## Lizenz
Open Source — Code darf eingesehen, verändert und wiederverwendet werden.
