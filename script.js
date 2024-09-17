const modal = document.querySelector(".modal")
const background = document.querySelector(".background")

const inputControl = document.querySelector(".input-control")

const nameForm = document.querySelector(".form-name")

const playerName = document.querySelector("#player-name")
const playerId = document.querySelector(".player-id")
const player = document.querySelector("#player")
const playerContainer = document.querySelector(".player-container")

function getPlayerName() {
    playerName.addEventListener("change", (e) => {
        playerId.innerHTML = e.target.value
    })
}

function printingTemplate() {
    const template = `<h3>Selecione seu personagem</h3>
    <div class="character-box">
        <button class="character-btn" id="player-00"><img src="./img/player00.gif" alt="Player Image" id="character-00"></button>
        <button class="character-btn" id="player-01"><img src="./img/player01.gif" alt="Player Image" id="character-01"></button>
    </div>
`
    nameForm.innerHTML = template
}

function playerMoviment() {

    let leftValue = 0
    let topValue = 0

    document.addEventListener("keydown", (e) => {

        const playerPositionX = player.getBoundingClientRect().x
        const playerPositionY = player.getBoundingClientRect().y

        if (e.key === "ArrowLeft" || e.key === "a") {
            player.style.transform = "rotatey(180deg)";
            leftValue = leftValue - 2
        }
        if (e.key === "ArrowDown" || e.key === "s") {
            topValue = topValue + 2
        }
        if (e.key === "ArrowRight" || e.key === "d") {
            player.style.transform = "rotatey(0deg)";
            leftValue = leftValue + 2
        }
        if (e.key === "ArrowUp" || e.key === "w") {
            topValue = topValue - 2
        }


        playerContainer.style.left = `${leftValue}vw`
        playerContainer.style.top = `${topValue}vh`


        console.log(e.key)
        



    })

}

nameForm.addEventListener("submit", (e) => {
    e.preventDefault()

    printingTemplate()

    document.addEventListener("click", (e) => {

        if (e.target.id === "character-00") {
            player.src = "./img/player00.gif"

            background.classList.add("hide")
            modal.classList.add("hide")
        }

        if (e.target.id === "character-01") {
            player.src = "./img/player01.gif"

            background.classList.add("hide")
            modal.classList.add("hide")
        }

    })


})

player.addEventListener("mouseover", () => {
    playerId.classList.add("show")
})

player.addEventListener("mouseout", () => {
    playerId.classList.remove("show")
})


getPlayerName()

playerMoviment()






// console.log(e.key)

// if (playerPositionX == 525 && playerPositionY == 225) {
//     console.log("chegou")

//     return
// }



// player.addEventListener("mouseover", () => {
//     alert("caba safado")
// })



