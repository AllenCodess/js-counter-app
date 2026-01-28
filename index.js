// DOM Elements
let count = 0

const countUpBtn = document.getElementById("count-up-btn-el")
const countDownBtn = document.getElementById("count-down-btn-el")
const countEl = document.getElementById("count-el")

//Event Listeners
countUpBtn.addEventListener("click" , countUp)
countDownBtn.addEventListener("click" , countDown)


//Functions
function countUp () {
     count  += 1
     countEl.textContent = count
 
}

function countDown () {
    count -= 1
    countEl.textContent = count
}

