// Osrs text game made by Asim Naqvi.Asim

// This was made in order to test and practice the basics of javascript



const playerName = document.getElementById("player-name");
const changePlayerName = document.getElementById("change-player-name");

changePlayerName.addEventListener("click", function() {
    const newName = prompt("Enter new name: ")

    playerName.textContent = "Name: " + newName;


});

const xpSpan = document.getElementById("xp-span");
const healthSpan = document.getElementById("health-span");


const xpValue = 0;
const healthValue = 99;

xpSpan.textContent += xpValue;
healthSpan.textContent += healthValue;