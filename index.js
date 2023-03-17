var randomNumber1 = Math.floor(Math.random() * 6 + 1);
var imgName = "images/dice" + randomNumber1 + ".png";
document.querySelector(".img1").setAttribute("src", imgName);

var randomNumber2 = Math.floor(Math.random() * 6 + 1);
var imgName = "images/dice" + randomNumber2 + ".png";
document.querySelector(".img2").setAttribute("src", imgName);

var out;
if (randomNumber1 === randomNumber2)
{
    out = "Draw!";
}

else if (randomNumber1 > randomNumber2)
{
    out = "🚩 Player 1 Wins!";
}

else
{
    out = "Player 2 Wins! 🚩";
}

document.querySelector("h1").textContent = out;