$(document).ready(function() {
    $("#slogan").delay(4000).fadeOut(500).promise().then(function() {
        $("#sloganWrapper").css("display","none");
        $("#mainContainerWrapper").slideDown();
    });
    
    $("#techbutton").click(function() {
        $("#techy").slideToggle().promise().then(function() {
            $('html, body').animate({ 
               scrollTop: $(document).height()-$(window).height()}, 
               500
            );  
        });
    });
});