// Osrs text game made by Asim Naqvi.Asim

// This was made in order to test and practice the basics of javascript



let playerName = document.getElementById("player-name");
let changePlayerName = document.getElementById("change-player-name");

changePlayerName.addEventListener("click", function() {
    let newName = prompt("Enter new name: ")

    playerName.textContent = "Name: " + newName;


});

let xpSpan = document.getElementById("xp-span");
let healthSpan = document.getElementById("health-span");
let goldSpan = document.getElementById("gold-span");

let goldValue = 0;
let xpValue = 0;
let healthValue = 99;

xpSpan.textContent += xpValue;
healthSpan.textContent += healthValue;
goldSpan.textContent += goldValue;