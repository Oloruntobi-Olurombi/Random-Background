const colorBtn = document.querySelector('.colorBtn');
const bodyBcg = document.querySelector('body');

const colors = ['yellow', 'red', 'green', '#3b5998', 'rgb(192,192,192)', 'rgb(0,255,0)', 'rgb(255,0,255)', 'rgb(128,0,128)', 'rgb(0,255,255)'];

colorBtn.addEventListener('click', changeColor);

function changeColor() {
 let random = Math.floor(Math.random() * colors.length)
 bodyBcg.style.backgroundColor = colors[random];
}
