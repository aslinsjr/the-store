
let totalValue = 0;

let revenueCoefficient = 0.011;

function getDate() {
    const date = new Date

    let day = ""

    switch (date.getDay()) {
        case 0: day = "Domingo";
            break;
        case 1: day = "Segunda";
            break;
        case 2: day = "Terça";
            break;
        case 3: day = "Quarta";
            break;
        case 4: day = "Quinta";
            break;
        case 5: day = "Sexta";
            break;
        case 6: day = "Sábado";
            break;
    }

    document.querySelector("#day").innerHTML = day

    document.querySelector("#clock").innerHTML = `${date.getHours() < 10 ? "0" + date.getHours() : date.getHours()}:${date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes()}:${date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds()}`

    document.querySelector("#date").innerHTML = `${date.getDate() < 10 ? "0" + date.getDate() : date.getDate()}/${date.getMonth() < 9 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1}/${date.getFullYear()}`
}

function getTotalValue() {

    totalValue = totalValue + revenueCoefficient

    document.querySelector("#total-value").innerHTML = totalValue.toFixed(2)

    localStorage.setItem("total-value", totalValue.toFixed(2))

}

function renderMap(latLong, zoom) {
    var map = L.map('map').setView(latLong, zoom);

    const tiles = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);
}

function app() {

    if (localStorage.getItem("total-value")) {

        totalValue = + localStorage.getItem("total-value")
    }

    // Custo base de 1 funcionário -0.001
    revenueCoefficient = revenueCoefficient - 0.001

    renderMap([-8.1123297, -34.9039098], 18)

    setInterval(() => {
        getDate()

        getTotalValue()

    }, 1000)
}

app()

