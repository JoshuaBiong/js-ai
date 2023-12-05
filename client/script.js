import bot from "./assets/bot.svg"
import user from "./assets/user.svg"

const form = document.querySelector('form');
const chatContainer = document.querySelector('#chat_container')

let loadInterval;

function loader(elemet) {
    elemet.textContent = ''

    loadInterval = setInterval(() => {
        elemet.textContent += "."

        if (elemet.textContent === "....") {
            Element.textContent = ""
        }

    }, 300)

}