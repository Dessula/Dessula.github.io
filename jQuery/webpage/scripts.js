$('#button1').on('click', () => {
    console.log('Yeah, you clicked me');
});

$('#button2').on('click', () => {
    $('#button1').text('Why not me');
});

$('#button3').on('click', () => {
    $('#button1').css('background', 'yellow');
    $('#button2').css('background', 'yellow');
    $('#button3').css('background', 'yellow');
});