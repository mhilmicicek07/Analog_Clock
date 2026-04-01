const container = document.querySelector(".container"),
    hourHand = document.querySelector(".hand.hour"),
    minuteHand = document.querySelector(".hand.minute"),
    secondHand = document.querySelector(".hand.second"),
    themeSwitch = document.querySelector(".theme-switch");

// Saati güncelleyen fonksiyon
const updateTime = () => {
    const date = new Date();

    const secToDeg = date.getSeconds() * 6; // 360/60
    const minToDeg = date.getMinutes() * 6 + (date.getSeconds() / 60) * 6;
    const hourToDeg = (date.getHours() % 12) * 30 + (date.getMinutes() / 60) * 30;

    hourHand.style.transform = `translateX(-50%) rotate(${hourToDeg}deg)`;
    minuteHand.style.transform = `translateX(-50%) rotate(${minToDeg}deg)`;
    secondHand.style.transform = `translateX(-50%) rotate(${secToDeg}deg)`;
};

const setThemeLabel = (isDark) => {
    themeSwitch.textContent = isDark ? "Light Theme" : "Dark Theme";
    themeSwitch.setAttribute("aria-pressed", String(isDark));
};

// Tema değiştirme
themeSwitch.addEventListener("click", () => {
    const isDark = container.classList.toggle("dark");
    setThemeLabel(isDark);
});

setThemeLabel(container.classList.contains("dark"));

// İlk çalıştırma
updateTime();
// Her saniye güncelle
setInterval(updateTime, 1000);
