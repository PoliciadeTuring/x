// apertura y clausura menu pantalla 768px

$("#toggle").click(function() {
    $(this).toggleClass('on');
    $("#resize").toggleClass("active");
});

$("#resize ul li a").click(function() {
    $(this).toggleClass('on');
    $("#resize").toggleClass("active");
});

$(".close-btn").click(function() {
    $(this).toggleClass('on');
    $("#resize").toggleClass("active");
});

// animación del brand

TweenMax.from("#brand", 1, {
    delay: 0.4,
    y: 10,
    opacity: 0,
    ease: Expo.easeInOut
});

// animación navbar

TweenMax.staggerFrom("#menu li a", 1, {
    delay: 0.4,
    opacity: 0,
    ease: Expo.easeInOut
}, 0.1);

new WOW().init(); //cierra el ultimo link en el head del html