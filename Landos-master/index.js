$(function() {
    console.log('hi')
  
   $('.line_bl').css('width', function(){
       width = $(this).parent().parent().find('p>span').text()
       console.log(width)
       return width;
   })

   function scr(){
    if ($(window).width()<=375){
        $('.work').find('div:first, div:last, div:eq(3), div:eq(4)').css({'background-color':'#d8d8d8'})
        $('.work').find('div:eq(2)').css({'background-color':'white'})
        console.log($('.work').find('div:first, div:last, div:eq(3), div:eq(4)'))
    }
   }
   scr();
});