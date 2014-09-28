$("#home").click( function () {
    $("#home-div").addClass("hidden");
    $("#home-div").toggleClass("hidden");
    $("#about-div").addClass("hidden");
    $("#preorder-div").addClass("hidden");

});
$("#about").click( function () {
    $("#about-div").addClass("hidden");
    $("#about-div").toggleClass("hidden");
    $("#home-div").addClass("hidden");
    $("#preorder-div").addClass("hidden");
});

$("#preorder").click( function () {
    $("#home-div").addClass("hidden");
    $("#about-div").addClass("hidden");
    $("#preorder-div").addClass("hidden");
    $("#preorder-div").toggleClass("hidden");
});