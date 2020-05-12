// document.getElementById('contact').addEventListener('click', ()=>
//     document.querySelector('.pop').style.visibility = 'visible');

//     document.getElementById('contact').addEventListener('click', ()=>
//     document.querySelector('.pop').style.opacity = '1');

// document.getElementById('exit').addEventListener('click',()=>
//     document.querySelector('.pop').style.visibility='hidden');

    
    // document.getElementById('gallery').addEventListener('click', ()=>
    // document.querySelector('#creative').style.visibility = 'visible');

    // document.getElementById('gallery').addEventListener('click', ()=>
    // document.querySelector('#creative').style.opacity = '1');

    // document.getElementById('exit-gallery').addEventListener('click',()=>
    // document.querySelector('#creative').style.visibility='hidden');

    

var popUpButton = document.querySelector('.pop')
document.getElementById('contact').addEventListener('click',
 () => popUpButton.classList.add('bg-active'))
document.getElementById('contact').addEventListener('click',
 () => document.getElementsByTagName('body')[0].style.overflow = 'hidden');


document.getElementById('exit').addEventListener('click', () => popUpButton.classList.remove('bg-active'))
document.getElementById('exit').addEventListener('click', () => document.getElementsByTagName('body')[0].style.overflow = 'auto')

var creative = document.querySelector('#creative')
document.getElementById('gallery').addEventListener('click', () => creative.classList.add('bg-active'))
document.getElementById('gallery').addEventListener('click',
 () => document.getElementsByTagName('body')[0].style.overflow = 'hidden');
document.getElementById('exit-gallery').addEventListener('click', () => creative.classList.remove('bg-active'))
document.getElementById('exit-gallery').addEventListener('click', () => document.getElementsByTagName('body')[0].style.overflow = 'auto')

$(document).ready(function(){
    $('.submit').click(function(event){
        
        console.log('clicked')

        var email = $('.email').val()
        var name = $('.name').val()
        var message = $('.messages').val()
        statusElm = $('.status')
        statusElm.empty()

        if(name.length>1){
            statusElm.append(('<div>Name is valid</div>'))
        }else{
            statusElm.append(('<div>Name is not valid</div>'))
            event.preventDefault()
        }

        if(email.length > 5 && email.includes('@') && email.includes('.')){
            statusElm.append('<div>Email is valid</div>')

        }else{
            statusElm.append('<div>Email is not valid</div>')
            event.preventDefault()
        }

        if(message.length>5){
            statusElm.append(('<div>Message is valid</div>'))
        }else{
            statusElm.append(('<div>Message is not valid</div>'))
            event.preventDefault()
        }
    })

    $("#contact").click(() =>
        statusElm.empty()
    )
})