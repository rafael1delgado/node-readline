var readLine = require('readline-sync');
var colors = require('colors');

let ingresos = 0;
let listaDeUsuarios = ["rafael", "mary", "gisela"];
let listaDeBurguers = ['small burguer', 'medium burguer', 'xl burguer'];
let usuario;
let usuarioExiste;
let DASH = '=';
compras = [];
let log = console.log;

function showDash(number) {
    log(DASH.repeat(number).green);
}

function app() {
    for(;;) {
        
        showDash(50);
        console.log('SISTEMA DE HAMBURGUESA'.green);
        showDash(50);
        console.log(`CANTIDAD DE INTENTOS: ${ingresos + 1}`);
        usuario = readLine.question('INGRESE SU USUARIO: '.green);
        usuarioExiste = listaDeUsuarios.find(itemUsuario => itemUsuario == usuario);

        if (typeof usuarioExiste != 'undefined') {
            console.clear();
            showDash(50);
            log(`BIENVENIDO AL SISTEMA ${usuario} ${" ".repeat(21)}`.bgGreen.white);
            showDash(50);
            listaDeBurguers.map((burguer, idx) => log(`[${idx + 1}] - ${burguer}`.red));
            log(":: \n".blue);
            codeBurguer = readLine.question('INGRESE EL CODIGO DE LA BURGUER A COMPRAR 1..3: '.bgRed);
            log(":: \n".blue);
            compras.push(listaDeBurguers[codeBurguer-1]);
            log(":: \n".blue);
            compras.map((compras, index) => {
                log(`[${index + 1}] - ${compras}`.bgBlue);
            })
            log(`TU COMPRA ES : ${compras}`.bgRed);
        } else {
            ingresos++;

            if (ingresos == 3){
            console.clear();
                log('🥴 HAZ INTENTADO MUCHAS VECES'.bgRed.white);
                return;
            }
        }
    }
}

app();
