//
//
// $(document).ready(function(){
//     $('.teachers__container-items').slick({
//         infinite: true,
//         slidesToShow: 3,
//         slidesToScroll: 3
//     });
// });


$('.teachers__container-items').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,

});

// $('#action').click(function () {
$('#burger').click(function () {
    $('#menu').addClass('open');
});


$('#menu').click (function() {
        $('#menu').removeClass('open');
});

new WOW({
    animateClass: 'animate__animated',
}).init();

let popup = $('.popup');
popup.hide();


popup.click(function () {
    popup.hide();

});
$('.service__action').click(function () {
    popup.show();

});
let input_border__one = $('.input_border-one');
let input_border__two = $('.input_border-two');

$('#action').click(function () {

    input_border__one.css('border-color', 'rgb(244, 222, 255)');
    input_border__two.css('border-color', 'rgb(244, 222, 255)');
    let name = $('#name');
    let number = $('#number');
    let hasError = false;
    let thanks = $('.thanks');
    let input = $('#error-input-name');
    let phone = number.val(); // Получаем значение input
    let regex = /^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/;


    $('.error-input').hide();
    thanks.hide();


    if (!name.val()) {
        input.show();
        input_border__one.css('border-color', 'red');
        hasError = true;
    }

    if (!number.val()) {
        $('#error-input-number').show();
        input_border__two.css('border-color', 'red');
        hasError = true


    }
    if(!regex.test(phone)){
        alert('Номер телефона не соответствует установленной форме');
    };





    if (!hasError) {
        $.ajax({
            method: "POST",
            url: "https://testologia.site/checkout",
            data: {name: name.val(), number: number.val()}
        })
            .done(function (msg) {
                //лоадер подгрузить
                if (msg.success) {
                    $('.contacts__information').hide();
                    $('.contacts__action').hide();
                    thanks.show();
                } else {
                    alert('Возникла ошибка при записи на урок. Позвоните нам для решения проблемы')
                }
            })
    }
});
