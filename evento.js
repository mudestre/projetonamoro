let btnNao = document.querySelector('#btn-nao');
let largJanela = window.innerWidth;
let altJanela = window.innerHeight;

let maxLargura =  largJanela - btnNao.offsetWidth;
let maxAltura = altJanela - btnNao.offsetHeight;

btnNao.addEventListener('mouseover', ()=>{
let randomX = Math.floor(Math.random() * maxLargura)
let randomY = Math.floor(Math.random() * maxAltura)

btnNao.style.left = randomX + "px"
btnNao.style.top = randomY + "px"
})
