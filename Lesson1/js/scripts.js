$(document).ready(function(){
    $("#carouselButton").click(function(){
        if ($("#carouselButton").children("span").hasClass('fa-pause')) {
            $("#mycarousel").carousel('pause');
            $("#carouselButton").children("span").removeClass('fa-pause');
            $("#carouselButton").children("span").addClass('fa-play');
        }
        else if ($("#carouselButton").children("span").hasClass('fa-play')){
            $("#mycarousel").carousel('cycle');
            $("#carouselButton").children("span").removeClass('fa-play');
            $("#carouselButton").children("span").addClass('fa-pause');
        }
    });
});

$(document).ready(function(){
    $("#reserveButton").click(function(){
        if (!($("#reserveModal").hasClass('show'))) {
            $('#reserveModal').modal('show');
        } else {
            $("#reserveModal").modal('hide');
        }
    });
});

$(document).ready(function(){
    $("#loginButton").click(function(){
        if (!($("#loginModal").hasClass('show'))) {
            $('#loginModal').modal('show');
        } else {
            $("#loginModal").modal('hide');
        }
    });
});