$(document).ready(function(){
    $('#carousel-images').slick({
        autoplay:true
    })

    $('.menu-hamburguer').click(function() {
        $('nav').slideToggle();
    });

    $('#telefone').mask('(00) 00000-0000', {placeholder:'(00) 00000-0000'})

    $('form').validate({
        rules: { 
            nome:{
            required:true
        }, 
        email: {
            required:true
        },
        telefone: {
            required:true
        }
    },
    messages: {
        nome: 'Por Favor, insira seu nome'
    },
    })

    $('.lista-veiculos button').click(function(){
        const destino = $('#contato')
        const nomeVeiculo = $(this).parent().find('h3').text()

        $('#veiculo-interesse').val(nomeVeiculo)

        $('html').animate({
            scrollTop: destino.offset().top
        },1000)
    })
});