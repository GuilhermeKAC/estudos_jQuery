$(function() {
    $('#azul').click(function() {
        $('p').css("color", "blue");
        $('p').fadeOut(3000);
        $('p').delay(1000);
        $('p').fadeIn(3000);
    });
    $('#vermelho').click(function() {
        $('p').css("background-color", "red");
        $('#mensagem').text("Cor alterada com sucesso");
        $('#mensagem').css('color', 'red');
        $('#mensagem').css('border','1px solid red');
        $('#mensagem').delay(1500);
        $('#mensagem').fadeOut();
    });
});
