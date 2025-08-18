const container = document.querySelector(".container"),
    hourHand = document.querySelector(".hour"),
    secondHand = document.querySelector(".second"),
    minuteHand = document.querySelector(".minute"),
    themeSwitch = document.querySelector(".theme-switch");
    console.log(themeSwitch);

const updateTime = () => {
    let date = new Date();
    let secToDeg = Math.round((date.getSeconds() / 60) * 360);
    console.log(secToDeg);
    let minToDeg = Math.round((date.getMinutes() / 60) * 360);
    let hourToDeg = Math.round((date.getHours() / 12) * 360);

    hourHand.style.transform = `rotate(${hourToDeg}deg)`;
    secondHand.style.transform = `rotate(${secToDeg}deg)`;
    minuteHand.style.transform = `rotate(${minToDeg}deg)`;
};

themeSwitch.addEventListener("click", () => {
    container.classList.toggle("dark");
});

setInterval(updateTime, 1000);
