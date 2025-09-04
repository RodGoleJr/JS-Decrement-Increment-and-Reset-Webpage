const increaseBtn = document.getElementById("incrementBtn");
const resetBtn = document.getElementById("resetBtn");
const decreaseBtn = document.getElementById("decrementBtn");
const countLabel = document.getElementById("countLabel");

let count = 0;

increaseBtn.onclick = function(){
    count++;
    countLabel.textContent = count;
}