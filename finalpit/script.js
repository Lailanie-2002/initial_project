const searchButtons = document.querySelectorAll('.searchButton');
const searchInputs = document.querySelectorAll('.searchInput');

searchButtons.forEach((button)=>{
    searchInputs.forEach((input)=>{
        button.addEventListener('click', ()=>{
            input.classList.toggle('hidden');
        })
    })
})



const closeButton = document.getElementById('closeButton');
const cartwindow = document.querySelector('.cartwindow');
closeButton.addEventListener('click', ()=>{
    cartwindow.classList.add('hidden');
})

const cartButton = document.querySelectorAll('.cartLink');
cartButton.forEach((button)=>{
    button.addEventListener('click', ()=>{
        cartwindow.classList.remove('hidden');
    })
})