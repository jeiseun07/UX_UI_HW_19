$(function() {
    $('#nav').hover(function(){
        $(this).css('color', '#06CE91');
    },
    function(){
       $(this).css('color', '#f3f3f3');
    });
});

$('#arrow1').on("click", function(){
    $(".fadeMe").fadeToggle("slow");
});