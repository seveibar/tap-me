var home = $("#home");
var about = $("#about");
var preorder = $("#preorder");

var home_div = $("#home-div");
var about_div = $("#about-div");
var preorder_div = $("#preorder-div");

$("#tap-me").click( function () {
    home.removeClass("active");
    about.removeClass("active");
    preorder.removeClass("active");
    home.addClass("active");

    home_div.addClass("hidden").animate();
    home_div.toggleClass("hidden");
    about_div.addClass("hidden");
    preorder_div.addClass("hidden");
});

home.click( function () {
    home.removeClass("active");
    about.removeClass("active");
    preorder.removeClass("active");
    home.addClass("active");

    home_div.addClass("hidden").animate();
    home_div.toggleClass("hidden");
    about_div.addClass("hidden");
    preorder_div.addClass("hidden");
});

about.click( function () {
    home.removeClass("active");
    about.removeClass("active");
    preorder.removeClass("active");
    about.addClass("active");

    about_div.addClass("hidden");
    about_div.toggleClass("hidden");
    home_div.addClass("hidden");
    preorder_div.addClass("hidden");
});

preorder.click( function () {
    home.removeClass("active");
    about.removeClass("active");
    preorder.removeClass("active");
    preorder.addClass("active");

    home_div.addClass("hidden");
    about_div.addClass("hidden");
    preorder_div.addClass("hidden");
    preorder_div.toggleClass("hidden");
});
var show_preorder = function () {

};

var submit = function(){
    var email = $("#email").val();
    var data = {
        email: email
    };
    var re = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    console.log(re.test(email));
    if(re.test(email)){
        $.post('/subscribe',data).done(
            function(data){
                console.log("Status is: " + data["status"]);
        });
    } else{
        console.log(email + " isn't valid");
        email
    }

};