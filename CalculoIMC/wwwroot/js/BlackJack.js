$("#btn_jogador_1").on('click', function () {
    var pontos = document.getElementById("jogador1Pontos").innerHTML;
    var btn_jogador1 = document.getElementById("btn_jogador_1");
    var btn_parar1 = document.getElementById("btn_parar_1");
    var btn_jogador2 = document.getElementById("btn_jogador_2");
    var btn_parar2 = document.getElementById("btn_parar_2");

    $(btn_jogador2).attr('disabled', 'disabled');
    $(btn_parar2).attr('disabled', 'disabled');

    $.ajax({
        url: "/api/black/jogada/1/" + pontos, success: function (result) {

            $(cartas1).attr("src", '/images/' + result.carta + '.png');

            if (result.pontos == "21") {

                document.getElementById("jogador1Pontos").innerHTML = result.pontos;
                alert("jogador 1 tirou 21!");
                $(btn_jogador1).attr('disabled', 'disabled');
                $(btn_parar1).attr('disabled', 'disabled');

                $(btn_jogador2).removeAttr("disabled");
                $(btn_parar2).removeAttr("disabled");

            } else if (result.pontos > "21") {

                document.getElementById("jogador1Pontos").innerHTML = result.pontos;
                alert("Jogador 1 perdeu!");
                $(btn_jogador1).attr('disabled', 'disabled');
                $(btn_parar1).attr('disabled', 'disabled');

                $(btn_jogador2).removeAttr("disabled");
                $(btn_parar2).removeAttr("disabled");

            } else {
                $(cartas1).attr("src", '/images/' + result.carta + '.png');
                document.getElementById("jogador1Pontos").innerHTML = result.pontos;
            }

        }
    });
});


$("#btn_jogador_2").on('click', function () {
    var pontos = document.getElementById("jogador2Pontos").innerHTML;
    var pontos1 = document.getElementById("jogador1Pontos").innerHTML;
    var btn_jogador2 = document.getElementById("btn_jogador_2");
    var btn_parar2 = document.getElementById("btn_parar_2");

    $.ajax({

        url: "/api/black/jogada/2/" + pontos, success: function (result) {

            if (result.pontos == "21") {

                document.getElementById("jogador2Pontos").innerHTML = result.pontos;
                alert("Jogador 2 tirou 21!");
                $(btn_jogador2).attr('disabled', 'disabled');

            } else if (result.pontos > "21") {

                document.getElementById("jogador2Pontos").innerHTML = result.pontos;
                alert("Jogador 2 perdeu!");
                $(btn_jogador2).attr('disabled', 'disabled');

            } else {
                $(cartas2).attr("src", '/images/' + result.carta + '.png');
                document.getElementById("jogador2Pontos").innerHTML = result.pontos;
            }
        }
    });
});

function parar1() {

    var btn_jogador1 = document.getElementById("btn_jogador_1");
    var btn_parar1 = document.getElementById("btn_parar_1");
    var btn_jogador2 = document.getElementById("btn_jogador_2");
    var btn_parar2 = document.getElementById("btn_parar_2");

    $(btn_jogador1).attr('disabled', 'disabled');
    $(btn_parar1).attr('disabled', 'disabled');

    $(btn_jogador2).removeAttr("disabled");
    $(btn_parar2).removeAttr("disabled");

}

function iniciar() {
    var btn_jogador1 = document.getElementById("btn_jogador_1");
    var btn_parar1 = document.getElementById("btn_parar_1");
    var btn_iniciar = document.getElementById("btn_iniciar");

    $(btn_iniciar).attr('disabled', 'disabled');
    $(btn_jogador1).removeAttr("disabled");
    $(btn_parar1).removeAttr("disabled");

}

function parar2() {
    var pontos1 = document.getElementById("jogador1Pontos").innerHTML;
    var pontos2 = document.getElementById("jogador2Pontos").innerHTML;
    var btn_jogador2 = document.getElementById("btn_jogador_2");
    var btn_parar2 = document.getElementById("btn_parar_2");

    $(btn_jogador2).attr('disabled', 'disabled');
    $(btn_parar2).attr('disabled', 'disabled');

    $.ajax({

        url: "/api/black/vitoria/" + pontos1 + "/" + pontos2, success: function (result) {
            if (result == 1) {

                document.getElementById("win1").innerHTML = "Vencedor!!!";
                alert("Jogador 1 Venceu!!");


            } else if (result == 2) {

                document.getElementById("win2").innerHTML = "Vencedor!!!";
                alert("Jogador 2 Venceu!!");


            } else if (result == 3) {

                document.getElementById("win2").innerHTML = "Empate!!!";
                document.getElementById("win1").innerHTML = "Empate!!!";
                alert("Empate!!");


            } else if (result == 4) {

                document.getElementById("win2").innerHTML = "Vencedor!!!";
                alert("Jogador 2 Venceu!!");


            } else if (result == 5) {

                document.getElementById("win1").innerHTML = "Vencedor!!!";
                alert("Jogador 1 Venceu!!");


            } else {

            }

        }
    });
}

function reload() {
    document.location.reload(true);
}

/*
$.ajax({
    url: 'https://localhost:44333/BlackJack',

});


let values = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12','13']

let bobo = valorAleatorio();

function getScore(bobo,values) {

    let score = 0;
    let i = 0;

    while (i != bobo())
        {
            for(let i = 0; i < values.length; i++) {
                score += i;
        }
        return score;
    }
 
}

function valorAleatorio() {
    min = Math.ceil(1);
    max = Math.floor(14);
    var aleatorio = Math.floor(Math.random() * (max - min)) + min;
    return aleatorio;
}

function jogador1() {

    var cartas1 = document.getElementById("cartas1");
    $(cartas1).attr("src", '/images/' + valorAleatorio() + '.png');

    document.getElementById("contagem_1").innerHTML = valorAleatorio();
}


let values = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13']
let x = jogador1();

//function para escolher as cartas de forma aleatoria
function valorAleatorio() {
    min = Math.ceil(1);
    max = Math.floor(14);

    var aleatorio = Math.floor(Math.random() * (max - min)) + min;
    return aleatorio;
}

//Alterar as imagens do jogador 1
function jogador1() {
    bobo = valorAleatorio();
    //let countJum = 0;

    var cartas1 = document.getElementById("cartas1");
    $(cartas1).attr("src", '/images/' + bobo + '.png');
    //aleatorio
    let contando1 = aleatorio;
    if (contando1 > 0) {

        countJum += contando1;
    }                                               //countJum
    document.getElementById("contagem_1").innerHTML = getScore();

    return bobo;
}

function getScore(x, values) {

    let score = 0;
    let i = 0;

    while (i != x) {
        for (let i = 0; i < values.length; i++) {
            score += i;
        }
        return score;
    }

}
*/
