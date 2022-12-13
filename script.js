var counts = document.getElementById("count");
var increaseBtn = document.getElementById("increase");
var decreaseBtn = document.getElementById("decrease");
var clearBtn = document.getElementById("clear");
var number = 0;
increaseBtn.addEventListener('click', function() {
    number += 1;
    counts.innerHTML = number;

});
decreaseBtn.addEventListener('click', function() {
    number -= 1;
    counts.innerHTML = number;
});
clearBtn.addEventListener('click', function() {
    number = 0;
    counts.innerHTML = number;
});