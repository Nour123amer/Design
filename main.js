// let overlay = document.querySelectorAll('.overlay');
//  document.querySelectorAll('.fa-minus').forEach(icon =>{ 
//      icon.addEventListener('click',()=>{
//      icon.classList.toggle('rotate');
//      document.querySelectorAll('.overlay').classList.toggle('change');
//     })
    
   
// })

document.querySelector('.fa-minus').addEventListener('click',()=>{
    document.querySelector('.fa-minus').classList.toggle('rotate');
    document.querySelector('.overlay').classList.toggle('change');
})

document.querySelector('.scroll-up').addEventListener('click',()=>{
    window.scrollTo({
        top:0,
    });
})


