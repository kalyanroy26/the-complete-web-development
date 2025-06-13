let player1 = Math.floor(Math.random()*6)+1
let player2 = Math.floor(Math.random()*6)+1

let img1 = document.querySelector('.img1')
let img2 = document.querySelector('.img2')

img1.setAttribute("src",`./images/dice${player1}.png`)
img2.setAttribute("src",`./images/dice${player2}.png`)

let h1 = document.querySelector('h1')
if(player1>player2){
    h1.innerText = 'Player 1 wins!'
}
else if (player1===player2){
    h1.innerText = 'Draw'
}
else if (player2>player1){
    h1.innerText = 'Player 2 wins!'
}
else{
    h1.innerText = 'refresh me'
}