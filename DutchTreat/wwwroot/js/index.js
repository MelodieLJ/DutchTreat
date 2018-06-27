$(document).ready(function () {

    //ready executes the block of code as soon as the browser is ready

//var theForm = document.getElementById("theForm");
//theForm.hidden = true;



var theForm = $("#theForm");
theForm.hide();

var button = $("#buyButton");
button.on("click", function () {
    console.log("Buying Item");
});

var productInfo = $(".product-props li");
productInfo.on("click", function () {
    console.log("You clicked on " + $(this).text());
    });

    var $loginToggle = $("#loginToggle");
    var $popupForm = $(".popup-form");

    $loginToggle.on("click", function () {
        $popupForm.slideToggle(1000); //toggle view for 1 second
    });

});