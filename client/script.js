import bot from "./assets/bot.svg"
import user from "./assets/user.svg"

const form = document.querySelector('form');
const chatContainer = document.querySelector('#chat_container')

let loadInterval;

// thinking effect that the boot is thingking 

function loading(element) {
    element.textContent = ""

    loadInterval = setInterval(() => {
        element.textContent += "."

        if (element.textContent === '....')
            element.textContent = ''
    }, 200)
}


//typing effect of the bot by text line by line with a 20 millisecond time interval 

function typeText(elemet, text) {
    let index = 0;

    let interval = setInterval(() => {
        if (index < text.length) {
            element.innerHTML += text.chartAt(index)
            index++
        } else {
            clearInterval(interval)
        }
    }, 20)
}

function generateUniqueId() {
    const timestamp = Date.now()
    const randomNumber = Math.random()
    const hexadecimalString = randomNumber.toString(16)
    return `id-${timestamp} -${hexadecimalString}`
}

// console.log(generateUniqueId)

function chatStripe(isAi, value, uniqueId) {
    return `
    <div class= "wrapper ${isAi && 'ai'}"> 
      <div class = 'chat'>
        <div class='profile'>
          <img src="${isAi ? bot : user}"
          alt = '${isAi ? 'bot' : 'user'}'
          />
          </div>
          <div class = 'message' id= '${uniqueId}'> ${value}</div>
        
      </div>
    </div>  
    `
}


const handleSubmit = async(e) => {
    e.preventDefault()

    const data = new FormData(form)

    //user chat stripe
    chatContainer.innerHTML += chatStripe(false, data.get('prompt'))
    form.reset()

    //bot stripe

    const uniqueId = generateUniqueId();
    chatContainer.innerHTML += chatStripe(true, '', uniqueId)

    chatContainer.scrollTop = chatContainer.scrollHeight

    const messageDiv = document.getElementById(uniqueId)

    loading(messageDiv)
}

form.addEventListener('submit', handleSubmit);
form.addEventListener('keyup', (e) => {
    if (e.keyCode === 13) {
        handleSubmit(e);
    }

})