const d = document;
const $container = d.querySelectorAll(".containterReloj > .Hora, .containterReloj > .Alarma");
const $alertAlarm = d.querySelector(".AlertAlarm");
const audio = new Audio("Sonido/alarma-good-morning-ringtones.mp3");
let Alarmas = [];
let clockTempo;

function digitalClock(){
    const clock = d.querySelector(".reloj");
    const dayAll = d.querySelector(".fecha");
    const btnVerHora = d.querySelector(".Hora");
    btnVerHora.addEventListener("click", (e) => {
        e.target.classList.toggle("verHora");
        if (btnVerHora.classList.contains("verHora")) {
            clockTempo = setInterval(() => {
                const date = new Date();
                const amPm = date.toLocaleTimeString("en-US", { hour12: true}).split(" ")[1];
                const [hour, minutes, seconds] = [
                    date.getHours(),
                    date.getMinutes(),
                    date.getSeconds()
                ];
                clock.innerHTML = `<h2>${String(hour).padStart(2, "0")}:${String(minutes).padStart(2, "0")}</h2><p>${String(seconds).padStart(2, "0")}<span>${amPm}</span></p>`;
                dayAll.innerHTML = `<p>${String(date.getDate()).padStart(2, "0")}/${String(date.getMonth() + 1).padStart(2, "0")}/${date.getFullYear()}</p>`;
            }, 0);
            btnVerHora.innerHTML = "Cerrar Hora";
            e.stopPropagation();
            $container.forEach(button => {
                button.classList.add("active");
            });
        } else {
            setTimeout(() => {
                clearInterval(clockTempo);
                clock.innerHTML = "";
                dayAll.innerHTML = "";
            }, 100);
            btnVerHora.innerHTML = "Ver Hora";
            $container.forEach(button => {
                button.classList.remove("active");
            });
        }
    });
}

function alarm(){
    const btnVerAlarma = d.querySelector(".Alarma");
    btnVerAlarma.addEventListener("click", (e) => {
        e.stopPropagation();
        btnVerAlarma.classList.toggle("verAlarma");
        if (btnVerAlarma.classList.contains("verAlarma")) {
            btnVerAlarma.innerHTML = "Cerrar Alarma";
            $container.forEach(button => {
                button.classList.add("active2");
            });
        } else {
            btnVerAlarma.innerHTML = "Iniciar Alarma";
            $container.forEach(button => {
                button.classList.remove("active2");
            });
        }
    });
}

function activeAlarm(){
    setInterval(() => {
        const dateAlarm = new Date();
        const hora = String(dateAlarm.getHours()).padStart(2, "0");
        const minutos = String(dateAlarm.getMinutes()).padStart(2, "0");
        const horaActualCorta = `${hora}:${minutos}`;
        if (Alarmas.includes(horaActualCorta)) {
            if (!d.querySelector(".buttonAlertAlarm")) {
                const buttonAlertAlarm = d.createElement("button");
                buttonAlertAlarm.classList.add("buttonAlertAlarm");
                buttonAlertAlarm.innerHTML = "⏻ DETENER ALARMA";
                $alertAlarm.append(buttonAlertAlarm);
            }
            audio.play();
            $alertAlarm.classList.add("show-alert");
            Alarmas = Alarmas.filter(alarma => alarma !== horaActualCorta);
        }
    }, 1000);
}

d.addEventListener("click", (e) => {
    if (e.target && e.target.classList.contains("buttonAlertAlarm")) {
        audio.pause();
        audio.currentTime = 0;
        d.querySelector(".buttonAlertAlarm")?.remove();
        $alertAlarm.classList.remove("show-alert");
    }
});

d.addEventListener("click", (e) => {
    if (e.target && e.target.classList.contains("ButtonEnviarAlarma")) {
        const inputAlarm = d.querySelector(".inputAlarma");
        const $listaNumberAlarma = d.querySelector(".ListaAlarmas");
        if (inputAlarm && inputAlarm.value) {
            const nuevaAlarma = inputAlarm.value;
            Alarmas.push(nuevaAlarma);
            const li = d.createElement("li");
            li.textContent = nuevaAlarma;
            $listaNumberAlarma.append(li);
            inputAlarm.value = "";
        }
    }
});

// Theme toggle
const themeToggle = d.getElementById("themeToggle");
if (themeToggle) {
    if (localStorage.getItem("theme") === "light") {
        d.body.classList.add("light");
        themeToggle.textContent = "☀";
    }
    themeToggle.addEventListener("click", () => {
        d.body.classList.toggle("light");
        const isLight = d.body.classList.contains("light");
        themeToggle.textContent = isLight ? "☀" : "☾";
        localStorage.setItem("theme", isLight ? "light" : "dark");
    });
}

d.addEventListener("DOMContentLoaded", () => {
    digitalClock();
    alarm();
    activeAlarm();
});
