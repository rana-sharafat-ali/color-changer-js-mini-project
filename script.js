const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');
buttons.forEach(function(btn){
   btn.addEventListener('mouseenter', function(x){
    body.style.backgroundColor = x.target.id ;
   })
   btn.addEventListener('mouseleave', function(x){
    body.style.backgroundColor = 'white'
   })
})