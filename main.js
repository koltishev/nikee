$('.burger').click(function(){
    $(this).toggleClass('active');
    $('.navbar').toggleClass('active');
    return false;
});