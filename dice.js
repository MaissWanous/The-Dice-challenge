var randomNumdwer1 = Math.ceil(Math.random()*6);
var randomImageSource1 = "images/dice" + randomNumdwer1 + ".png"
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src",randomImageSource1);
var randomNumdwer2 = Math.ceil(Math.random()*6);
var randomImageSource2 = "images/dice" + randomNumdwer2 + ".png"
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src",randomImageSource2);

if (randomNumdwer1 > randomNumdwer2) {
    document.querySelector("h1").innerHTML=" player 1 wins";
}
else if (randomNumdwer2 > randomNumdwer1) {
    document.querySelector("h1").innerHTML=" player 2 wins";
}
