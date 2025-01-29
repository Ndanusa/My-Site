const open = document.querySelector('.menu-phone')
const nav = document.querySelector('.nav-lists')
const close = document.querySelector('.menu-close')
const hoverClose = document.querySelector('.nav-close-h')
const input = document.querySelector('#input-email')
const submit = document.querySelector('#submit-email')
const dispMessage = document.querySelectorAll('#message')
open.addEventListener('click', function () {
    if (!nav.classList.contains('nav-phone')) {
        nav.classList.add('nav-phone')
        hoverClose.classList.add('nav-close-body')
    }
})

close.addEventListener('click', function(){
    if (nav.classList.contains('nav-phone')) {
        nav.classList.remove('nav-phone')
        hoverClose.classList.remove('nav-close-body')
        
    }

})
hoverClose.addEventListener('click', function(){
    if(nav.classList.contains('nav-phone')){
        nav.classList.remove('nav-phone')
    }
})



function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

const storage = []

submit.addEventListener('click', function(){
    const valu = input.value
    for (let i = 0; i < dispMessage.length; i++) {       
        if(isValidEmail(valu)){
            storage.push(valu)
            dispMessage[i].textContent = 'Newsletter Subscribed Successfully'
            input.value = ''
            
        }else{
            dispMessage[i].textContent = 'Invalid Parameters'
        }
    }
    console.log(storage);
    
})
