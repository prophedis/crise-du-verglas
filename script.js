console.log("I'm working")

window.onload=function(){
    // for (var i=0; i<27; i++){
    //     var worm = $(' <img class="landscape" src="images/landscape.png">');
    //     var randTop = Math.random()*window.innerHeight;
    //     var randLeft = Math.random()*window.innerWidth;
    //     $(worm).css('top',randTop+'px');
    //     $(worm).css('left',randLeft+'px');
    
    //     $("body").append(worm);

    // }
    $('.t').draggable();
    // $('.header').css('opacity','0.675')

}
$(window).scroll(function(){
    var scrollPos = $(document).scrollTop();
    console.log(scrollPos);
});
window.onscroll = function(){
    
    
    var scrollAmount = window.scrollY;
    if (scrollAmount > 300)
    $('.background').css('opacity', scrollAmount/2000);

    var scrollAmount = window.scrollY;
    if (scrollAmount > 3500)
    $('.background-after').css('opacity', scrollAmount/6000);
    
    

    if(scrollAmount < 3100)
     $('.background-after').css('opacity', 0);

    //  if(scrollAmount <= 900)
    //  $('.background').css('opacity', 1);

     if(scrollAmount < 300)
     $('.background-after').css('opacity', 0);

     if(scrollAmount < 300)
     $('.background').css('opacity', 0);

    //  var scrollAmount = window.scrollY;
    // if (scrollAmount > 1200)
    // $('.first').css ('color', 'white')
    
    // var scrollAmount = window.scrollY;
    // if (scrollAmount < 1200)
    // $('.first').css ('color', 'green')
    


    // if (scrollAmount > 500){
    //     $('.background').attr('src', 'images/hey-after.png');
    // }


}   

scroll.log(amount)
// function pngMove(){
//     //  for the single 
//     var randTop = Math.random()*window.innerHeight;
//     var randLeft = Math.random()*window.innerWidth;
//     $('.landscape').css('top',randTop+'px');
//     $('.landscape').css('left',randLeft+'px');

    // for the loop
    // $('.worm').each(function(){

    //     cosonle.log(this)
    //     var randTop = Math.random()*window.innerHeight;
    //     var randLeft = Math.random()*window.innerWidth;
    
    //     $(this).css('top',randTop+'px');
    //     $(this).css('left',randLeft+'px');
// }