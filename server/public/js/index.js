$("#tap-me").click( function () {
    $("#home").removeClass("active");
    $("#about").removeClass("active");
    $("#preorder").removeClass("active");
    $("#home").addClass("active");

    $("#home-div").addClass("hidden").animate();
    $("#home-div").toggleClass("hidden");
    $("#about-div").addClass("hidden");
    $("#preorder-div").addClass("hidden");
});

$("#home").click( function () {
    $("#home").removeClass("active");
    $("#about").removeClass("active");
    $("#preorder").removeClass("active");
    $("#home").addClass("active");

    $("#home-div").addClass("hidden").animate();
    $("#home-div").toggleClass("hidden");
    $("#about-div").addClass("hidden");
    $("#preorder-div").addClass("hidden");
});

$("#about").click( function () {
    $("#home").removeClass("active");
    $("#about").removeClass("active");
    $("#preorder").removeClass("active");
    $("#about").addClass("active");

    $("#about-div").addClass("hidden");
    $("#about-div").toggleClass("hidden");
    $("#home-div").addClass("hidden");
    $("#preorder-div").addClass("hidden");
});

$("#preorder").click( function () {
    $("#home").removeClass("active");
    $("#about").removeClass("active");
    $("#preorder").removeClass("active");
    $("#preorder").addClass("active");

    $("#home-div").addClass("hidden");
    $("#about-div").addClass("hidden");
    $("#preorder-div").addClass("hidden");
    $("#preorder-div").toggleClass("hidden");
});