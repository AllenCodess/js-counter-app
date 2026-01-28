// DOM Elements
let count = 0

const countUpBtn = document.getElementById("count-up-btn-el")
const countDownBtn = document.getElementById("count-down-btn-el")
const countEl = document.getElementById("count-el")
const saveCountEl = document.getElementById("save-el")
const savedEl = document.getElementById("saved-count")

//Event Listeners
countUpBtn.addEventListener("click" , countUp)
countDownBtn.addEventListener("click" , countDown)
saveCountEl.addEventListener("click", save )

//Functions
function countUp () {
     count  += 1
     countEl.textContent = count
 
}

function countDown () {
    count -= 1
    countEl.textContent = count
}

function save () {
    savedEl.textContent = count
}

