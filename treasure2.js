var goldCoins = Math.floor(Math.random()*9)
var plankWalk = Math.floor(Math.random()*9)
if (goldCoins === plankWalk) {
  var goldCoins = Math.floor(Math.random()*9)
  var plankWalk = Math.floor(Math.random()*9)
}
const treasure = (location) => {
    if (location === goldCoins) {
        document.getElementById("gameBoard").innerHTML = alert("YOU FOUND THE BURRIED Treasure!")
    } else if (location === plankWalk) {
        document.getElementById("gameBoard").innerHTML = alert("YOUR DEATH IS HERE! THERE IS NO POINT IN FIGHTING.")
    } else {
        document.getElementById(location).innerHTML = "NOPE!"
    }
}
console.log(goldCoins, plankWalk, treasure)
