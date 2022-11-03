$(document).ready(function(){
    // exercise 1
    $('p').on('click', function () {
        $(this).hide();
    })

    //exercise 2 
    //part 1
    $('body').prepend('<div id="newdiv"><h1>Welcome!</h1></div>');

    //part 2
    $('#ex2').append('<div class="yellow">1st yellow div</div>');
    $('#ex2').append('<div class="yellow">2nd yellow div</div>');
    $('.yellow').css("background-color", "yellow");

    //part 3
    $('#hide').on('click', function () {
        $('#show_hide').hide();
    });
    $('#show').on('click', function () {
        $('#show_hide').show();
    });

    //part 4
    $('#toggle').on('click', function () {
        $('#toggle_text').toggle();
    });
    
    //part 5
    $('#name').on('click', function () {
        $('body').append('<div>Ishana Jabbar</div>');
    });
});
