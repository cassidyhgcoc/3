
var resultWrapper = document.querySelector('.spin-result-wrapper');
var wheel = document.querySelector('.wheel-img');

function spin() {
    if (!wheel.classList.contains('rotated')) {
        wheel.classList.add('super-rotation');
        setTimeout(function() {
            resultWrapper.style.display = "block";
        }, 8000);
        setTimeout(function() {
            $('.spin-wrapper').slideUp();
            $('.order_block').slideDown();
            start_timer();
        }, 10000);
        wheel.classList.add('rotated');
    }
}


document.querySelector('.cursor-text').addEventListener('click', spin);
$('.close-popup, .pop-up-button').click(function(e) {
    e.preventDefault();
    $('.product_logo').slideUp(2000);
    $('.spin-result-wrapper').fadeOut();
});
$('.body-wrapper').click(function(e) {
    e.preventDefault();
    $('.spin-result-wrapper').fadeOut();
});

var time = 600;
var intr;

function start_timer() {
    intr = setInterval(tick, 1000);
}

function tick() {
    time = time - 1;
    var mins = Math.floor(time / 60);
    var secs = time - mins * 60;
    if (mins == 0 && secs == 0) {
        clearInterval(intr);
    }
    secs = secs >= 10 ? secs : "0" + secs;
    $("#min").html("0" + mins);
    $("#sec").html(secs);
}

$(document).ready(function() {

    $('.cursor-text').on('click', function() {
        setTimeout(function() {
            $('.spin-result-wrapper').fadeIn();
        }, 8000);
    });


    $('.close-popup, .pop-up-button').click(function(e) {
        e.preventDefault();
        $('.product_logo').slideUp(2000);
        $('.spin-result-wrapper').fadeOut();

    });

});

$('a[href^="#"]').on('click', function(event) {

    var target = $( $(this).attr('href') );

    if( target.length ) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: target.offset().top
        }, 500);
    }

});

console.log('fnmsanbka');
