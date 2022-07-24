var goldCoins = Math.floor(Math.random()*9)
var plankWalk = Math.floor(Math.random()*9)
if (goldCoins === plankWalk) {
  var goldCoins = Math.floor(Math.random()*9)
  var plankWalk = Math.floor(Math.random()*9)
}
const treasure = (location) => {
    if (location === goldCoins) {
        document.getElementById("gameBoard").innerHTML = "YOU FOUND THE BURRIED Treasure! :&#x1f308:"
    } else if (location === plankWalk) {
        document.getElementById("gameBoard").innerHTML = "YOUR DEATH IS HERE! THERE IS NO POINT IN FIGHTING. :&#x2620:"
    } else {
        document.getElementById(location).innerHTML = "NOPE!"
    }
}
console.log(goldCoins, plankWalk, treasure)
