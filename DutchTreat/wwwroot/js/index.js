﻿$(document).ready(function () {


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

});