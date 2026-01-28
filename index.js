
let count = 0

const countUpBtn = document.getElementById("count-up-btn-el")
const countEl = document.getElementById("count-el")

countUpBtn.addEventListener("click" , countUp)

function countUp () {
     count = count + 1;
     countEl.innerHTML = count
 
}

