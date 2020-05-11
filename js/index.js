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
