total_pontos_J1 = 0;
total_pontos_J2 = 0;

function resultado() {

    if (total_pontos_J1 <= 21 && total_pontos_J2 <= 21) {
        if (total_pontos_J1 == total_pontos_J2) {
            document.getElementById("placar_final").textContent = "EMPATE!!";
        } else if (total_pontos_J1 > total_pontos_J2) {
            document.getElementById("placar_final").textContent = "Jogador 1 Ganhou!!";
        } else {
            document.getElementById("placar_final").textContent = "Jogador 2 Ganhou!!";
        }
    } else if (total_pontos_J1 > 21 && total_pontos_J2 <= 21) {
        document.getElementById("placar_final").textContent = "Jogador 2 Ganhou!!";
    } else if (total_pontos_J1 <= 21 && total_pontos_J2 > 21) {
        document.getElementById("placar_final").textContent = "Jogador 1 Ganhou!!";
    } else {
        document.getElementById("placar_final").textContent = "SEM VENCEDOR!!";
    }  
}


function valorAleatorio() {
    min = Math.ceil(1);
    max = Math.floor(13);
    var aleatorio = Math.floor(Math.random() * (max - min)) + min;
    return aleatorio;
}

function jogador_1() {

    var cartas1 = document.getElementById("cartas1");
    var nova_carta = valorAleatorio();
    $(cartas1).attr("src", '/images/' + nova_carta + '.png');

    total_pontos_J1 += nova_carta;

    document.getElementById("jogador1").textContent = total_pontos_J1;

    // Regra > 21
    if (total_pontos_J1 >= 21) {
        parar_1();
    }
}

function parar_1() {

    var btn_jogador1 = document.getElementById("btn_jogador_1");
    var btn_jogador2 = document.getElementById("btn_jogador_2");
    var btn_parar1 = document.getElementById("btn_parar_1");
    var btn_parar2 = document.getElementById("btn_parar_2");

    $(btn_jogador1).attr('disabled', 'disabled');
    $(btn_parar1).attr('disabled', 'disabled');

    $(btn_jogador2).removeAttr('disabled');
    $(btn_parar2).removeAttr('disabled');

}

function iniciar() {

    var btn_jogador_1 = document.getElementById("btn_jogador_1");
    var btn_parar_1 = document.getElementById("btn_parar_1");
    var btn_iniciar = document.getElementById("btn_iniciar");

    $(btn_iniciar).attr('disabled', 'disabled');
    $(btn_jogador_1).removeAttr('disabled');
    $(btn_parar_1).removeAttr('disabled');

}

function jogador_2() {

    var cartas2 = document.getElementById("cartas2");
    var nova_carta = valorAleatorio();
    $(cartas2).attr("src", '/images/' + nova_carta + '.png');

    total_pontos_J2 += nova_carta;

    document.getElementById("jogador2").textContent = total_pontos_J2;

    // Regra > 21
    if (total_pontos_J2 >= 21) {
        parar_2();
    }
}

function parar_2() {

    document.getElementById("btn_jogador_2").disabled = true;
    document.getElementById("btn_parar_2").disabled = true;

    //  CALCULAR O PLACAR FINAL
    resultado();

}

function reiniciar() {

    document.location.reload(true);
}