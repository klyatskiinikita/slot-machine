const button = document.getElementById("func-button");
const counter = document.getElementById("counter");
const result = document.getElementById("result");
const slots = document.getElementsByName("slot");
const icons = [
    [ "imgs/blue.png", 0 ],
    [ "imgs/green.png", 1 ],
    [ "imgs/light-green.png", 2],
    [ "imgs/orange.png", 3],
    [ "imgs/pink.png", 4], 
    [ "imgs/turquoise.png", 5],
    [ "imgs/violet.png", 6]
];
let nick;
let count;
while (nick == "" || nick == null) {
    nick = prompt("enter your name: ");
}
document.getElementById("nickname").innerHTML = nick;
button.addEventListener("click", start);
function start() {
    count = 0;
    counter.innerHTML = "0/3";
    result.innerHTML = "0";
    button.innerHTML = "make a roll";
    button.setAttribute("class", button.getAttribute("class").replace("btn-primary", "btn-warning"));
    button.removeEventListener("click", start);
    button.addEventListener("click", roll);
}

function roll() {
    count++;
    counter.innerHTML = count + "/3";
    let values = Array(9).fill(0);
    for (let j = 0; j < 3; j++) {
        let temp = [...icons];
        for (let i = 0; i < 7; i += 3) {
            let index = Math.floor(Math.random() * temp.length);
            slots[i + j].setAttribute("src", temp[index][0]);
            values[i + j] = temp[index][1];
            temp.splice(index, 1);
        }
    }
    for (let i = 0; i < 3; i++)
        if(values[i * 3] == values[i * 3 + 1] && values[i * 3] == values[i * 3 + 2])
            result.innerHTML = Number(result.innerHTML) + 1;
    if (count == 3) {
        if(result.innerHTML == "3") alert("lucky you!");
        button.innerHTML = "restart the game";
        button.setAttribute("class", button.getAttribute("class").replace("btn-warning", "btn-primary"));
        button.removeEventListener("click", roll);
        button.addEventListener("click", start);
    }
}