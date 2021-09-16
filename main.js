let box = document.querySelector('.box');
let ball = document.querySelector('.ball');
let text = document.querySelector('p');
let scroll = document.querySelector('.scroll');

box.addEventListener('click', ()=>{
  ball.classList.toggle('darkmode-ball');
  box.classList.toggle('darkmode-box');
  text.classList.toggle('darkmode-text');
  document.body.classList.toggle('darkmode');
})

scroll.addEventListener('click', ()=> {
  scrollTo(0,0);
})

if(window.scrollY >= 100){
  scroll.classList.add('show');
} else{
  scroll.classList.remove('show');
}