const square = document.querySelectorAll('.square')
const mole = document.querySelectorAll('.mole')
const timeLeft = document.querySelector('#time-left')
const score = document.getElementById('score')


let result = 0;
let currentTime = timeLeft.textContent

function randomSquare(){
    square.forEach(className => {
        className.classList.remove('.mole')
    })
    let randomPosition = square[Math.floor(Math.random() * 9)] /*Under or equivalent to 9*/
    randomPosition.classList.add('mole')

    //assign the ID if the random poaition to hit position for us to use later
    hitPosition = randomPosition.id
}

square.forEach(id => {
    id.addEventListener('mouseup', () => {
        if (id.id === hitPosition){ //if the id of dat div === our hitposition
            result = result + 1
            score.textContent = result
        }
    })
})


function moveMole(){
    let timerId = null
    timerId = setInterval(randomSquare, 1000)
}

moveMole()


function countDown(){
    currentTime--
    timeLeft.textContent = currentTime

    if (currentTime === 0){
        clearInterval(timerId)
        alert('GAME OVER! Your final score is ' + result)
    }
}

let timerId = setInterval(countDown, 1000)
























