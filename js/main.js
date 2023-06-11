const button = document.querySelector('.button-menu')
const nav = document.querySelector ('nav')

button.addEventListener('click',()=>{
    nav.classList.toggle('active')
    button.classList.toggle('open')
})