'use strict'

$(".container").each(function () {
    $(this).hover(function () {
        $(this).css("border", "red 2px solid")
        $(this).css("width", "33%")
        $(this).find(".hiddenblock").css("visibility", "visible")
        $(this).find(".hidden").css("visibility", "visible")
        $(this).find(".container__text").css("visibility", "hidden")
    },
        function () {
            $(this).css("border", "none")
            $(this).css("width", "30%")
            $(this).find(".hiddenblock").css("visibility", "hidden")
            $(this).find(".hidden").css("visibility", "hidden")
            $(this).find(".container__text").css("visibility", "visible")
        })
})

$(".container").each(function () {
    if ($(window).width() < 600) {
        $(this).hover(function () {
            $(this).css("border", "red 2px solid")
            $(this).css("width", "100%")
            $(this).find(".hiddenblock").css("visibility", "visible")
            $(this).find(".hidden").css("visibility", "visible")
            $(this).find(".container__text").css("visibility", "hidden")
        },
            function () {
                $(this).css("border", "none")
                $(this).css("width", "100%")
                $(this).find(".hiddenblock").css("visibility", "hidden")
                $(this).find(".hidden").css("visibility", "hidden")
                $(this).find(".container__text").css("visibility", "visible")
            })
    };

})