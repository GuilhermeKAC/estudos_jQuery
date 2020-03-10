$(function() {
    $('#azul').click(function() {
        $('p')
            .css("color", "blue")
            .fadeOut(3000)
            .delay(1000)
            .fadeIn(3000);
    });
    $('#vermelho').click(function() {
        $('p').css("background-color", "red");
        $('#mensagem')
            .text("Cor alterada com sucesso")
            .css('color', 'red')
            .css('border','1px solid red')
            .delay(1500)
            .fadeOut();
    });
});
