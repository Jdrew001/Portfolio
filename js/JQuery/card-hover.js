$(document).ready(function() {
   
   //When the user hovers over the card.. do the following
   $('div.card').hover(function() {
       //animate
       console.log('called');
       $('.card').animate({
            opacity: '0.8'
        }, 200);
   });
    
});