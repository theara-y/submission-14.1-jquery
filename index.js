$(function() {
    console.log("Let's get ready to party with jQuery!");
    
    $('img').addClass('image-center');

    $('p:last-child').remove();

    $('#title').css('font-size', Math.floor(Math.random() * 101) + 'px');

    $('<li>whatever you want</li>').appendTo('ol');

    $('aside').empty().append('<p>Sorry for existing.</p>');

    $('input').on('change', function() {
        let r = $('input').eq(0).val();
        let b = $('input').eq(1).val();
        let g = $('input').eq(2).val();
        $('body').css('background', `rgb(${r},${b},${g}`);
    });

    $('img').on('click', function() {
        $(this).fadeOut(1000, function() {
            $(this).remove();
        });
    });

});