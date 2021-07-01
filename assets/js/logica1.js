console.log("Este es mi taller");
const $parrafo = document.querySelector("#parrafo");
const $label = document.querySelector("#label");
const $inputresul = document.querySelector("#inputresul");
const $inputnumer = document.querySelector("#inputnumer");
const $parrafo2 = document.querySelector("#parrafo2");
const $inputresul2 = document.querySelector("#inputresul2");
const $inputnumer2 = document.querySelector("#inputnumer2");
const $label2 = document.querySelector("#label2");
const $inputresul4 = document.querySelector("#inputresul4");
const $parrafo3 = document.querySelector("#parrafo3");
const $inputnumer4 = document.querySelector("#inputnumer4");
const $inputresul5 = document.querySelector("#inputresul5");
const $parrafo4 = document.querySelector("#parrafo4");
const $label3 = document.querySelector("#label3");
const $label4 = document.querySelector("#label4");
const $parrafo9 = document.querySelector("#parrafo9");
const $inputnumer10 = document.querySelector("#inputnumer10");
const $inputresul10 = document.querySelector("#inputresul10");
const $parrafo7 = document.querySelector("#parrafo7");
const $label81 = document.querySelector("#label81");
const $texto8 = document.querySelector("#texto8");
const $inputresul8 = document.querySelector("#inputresul8");
const $inputresul6 = document.querySelector("#inputresul6");
const $label5 = document.querySelector("#label5");
const $label6 = document.querySelector("#label6");
const $texto6 = document.querySelector("#texto6");
const $inputnumer5 = document.querySelector("#inputnumer5");
const $texto61 = document.querySelector("#texto61");
const $inputresul7 = document.querySelector("#inputresul7");
const $inputbuscar6 = document.querySelector("#inputbuscar6");
const $numer9 = document.querySelector("#numer9");
const $boton9 = document.querySelector("#boton9");
const $ordenar7 = document.querySelector("#ordenar7");

var clic = 1;

function divPunto1() {
    if (clic == 1) {
        document.getElementById("caja1").style.height = "970px";
        $parrafo.style.display = "block";
        $inputresul.style.display = "block";
        $label.style.display = "block";
        $inputnumer.style.display = "block";


        clic = clic + 1;

    } else {

        document.getElementById("caja1").style.height = "0px";
        $parrafo.style.display = "none";
        $inputnumer.style.display = "none";
        $label.style.display = "none";
        $inputresul.style.display = "none";
        $parrafo2.style.display = "none";
        $label81.style.display = "none";
        $inputresul2.style.display = "none";
        $label2.style.display = "none";
        $texto8.style.display = "none";
        $parrafo4.style.display = "none";
        $texto61.style.display = "none";
        $inputresul6.style.display = "none";
        $label4.style.display = "none";
        $inputbuscar6.style.display = "none";
        $label5.style.display = "none";
        $inputnumer2.style.display = "none";
        $label6.style.display = "none";
        $inputresul10.style.display = "none";
        $inputresul4.style.display = "none";
        $parrafo3.style.display = "none";
        $inputresul8.style.display = "none";
        $inputresul7.style.display = "none";
        $inputnumer4.style.display = "none";
        $inputresul5.style.display = "none";
        $label3.style.display = "none";
        $ordenar7.style.display = "none";
        $parrafo9.style.display = "none";
        $inputnumer10.style.display = "none";
        $parrafo7.style.display = "none";
        $texto6.style.display = "none";
        $inputnumer5.style.display = "none";
        $numer9.style.display = "none";
        $boton9.style.display = "none";

        clic = 1;
    }
}

function resul1(inputnumer) {

    if (inputnumer % 2 == 0) {
        alert('El numero introducido ' + inputnumer + ' es par');
        console.log('El numero introducido' + inputnumer + ' es par');

    } else {
        alert('El numero introducido ' + inputnumer + ' es impar');
        console.log("El número " + inputnumer + ' es impar");');
    }

}

//punto 2
function divPunto2() {

    if (clic == 1) {

        document.getElementById("caja1").style.height = "970px";
        $parrafo2.style.display = "block";
        $label2.style.display = "block";
        $inputresul2.style.display = "block";
        $inputnumer2.style.display = "block";


        clic = clic + 1;
    } else {
        document.getElementById("caja1").style.height = "0px";
        $parrafo.style.display = "none";
        $parrafo4.style.display = "none";
        $inputnumer.style.display = "none";
        $label.style.display = "none";
        $label6.style.display = "none";
        $inputresul7.style.display = "none";
        $inputresul6.style.display = "none";
        $inputresul8.style.display = "none";
        $inputbuscar6.style.display = "none";
        $texto8.style.display = "none";
        $ordenar7.style.display = "none";
        $boton9.style.display = "none";
        $texto61.style.display = "none";
        $label81.style.display = "none";
        $inputnumer5.style.display = "none";
        $texto6.style.display = "none";
        $label5.style.display = "none";
        $numer9.style.display = "none";
        $inputresul10.style.display = "none";
        $parrafo9.style.display = "none";
        $label4.style.display = "none";
        $inputresul.style.display = "none";
        $parrafo2.style.display = "none";
        $inputresul2.style.display = "none";
        $label2.style.display = "none";
        $label3.style.display = "none";
        $inputnumer2.style.display = "none";
        $inputnumer10.style.display = "none";
        $inputresul4.style.display = "none";
        $parrafo3.style.display = "none";
        $parrafo7.style.display = "none";
        $inputresul5.style.display = "none";
        $inputnumer4.style.display = "none";

        clic = 1;
    }
}

function resul2(inputnumer2) {

    //i++ significa i=i+1;

    let template = ''

    for (let i = 1; i <= 10; i++) {
        template += inputnumer2 + "x" + i + "=" + inputnumer2 * i + '                 '
    }
    alert(template + '   ');
    console.log(template + ' ');
}







function divPunto4() {
    if (clic == 1) {
        document.getElementById("caja1").style.height = "970px";
        $inputresul4.style.display = "block";
        $parrafo3.style.display = "block";
        $inputnumer4.style.display = "block";

        clic = clic + 1;
    } else {
        document.getElementById("caja1").style.height = "0px";
        $parrafo.style.display = "none";
        $inputnumer.style.display = "none";
        $label.style.display = "none";
        $label81.style.display = "none";
        $parrafo7.style.display = "none";
        $parrafo9.style.display = "none";
        $inputresul.style.display = "none";
        $inputnumer5.style.display = "none";
        $inputresul7.style.display = "none";
        $label2.style.display = "none";
        $ordenar7.style.display = "none";
        $boton9.style.display = "none";
        $numer9.style.display = "none";
        $texto6.style.display = "none";
        $label3.style.display = "none";
        $label4.style.display = "none";
        $inputresul10.style.display = "none";
        $inputbuscar6.style.display = "none";
        $inputresul8.style.display = "none";
        $texto8.style.display = "none";
        $label6.style.display = "none";
        $label5.style.display = "none";
        $texto61.style.display = "none";
        $inputresul6.style.display = "none";
        $inputresul5.style.display = "none";
        $inputnumer2.style.display = "none";
        $inputresul2.style.display = "none";
        $parrafo4.style.display = "none";
        $inputresul4.style.display = "none";
        $parrafo3.style.display = "none";
        $inputnumer10.style.display = "none";
        $parrafo2.style.display = "none";
        $inputnumer4.style.display = "none";

        clic = 1;
    }
}

function Primo(inputnumer4) {
    var i;
    var primer = true;
    for (i = 2; i < inputnumer4 / 2; i++) {
        if (inputnumer4 % i === 0) {
            primer = false;
        }
    }
    if (primer) {
        alert("El número es primo");
        console.log("El número es primo" + inputnumer4);
    } else {
        alert("El número no es primo");
        console.log("El número no es primo" + inputnumer4);
    }
}




function divPunto5() {
    if (clic == 1) {
        document.getElementById("caja1").style.height = "970px";
        $inputresul5.style.display = "block";
        $parrafo4.style.display = "block";
        $label3.style.display = "block";
        clic = clic + 1;
    } else {
        document.getElementById("caja1").style.height = "0px";
        $parrafo.style.display = "none";
        $inputnumer.style.display = "none";
        $inputbuscar6.style.display = "none";
        $label.style.display = "none";
        $boton9.style.display = "none";
        $parrafo7.style.display = "none";
        $inputresul7.style.display = "none";
        $texto8.style.display = "none";
        $inputresul8.style.display = "none";
        $inputnumer5.style.display = "none";
        $inputresul5.style.display = "none";
        $inputresul.style.display = "none";
        $inputresul6.style.display = "none";
        $label2.style.display = "none";
        $numer9.style.display = "none";
        $texto6.style.display = "none";
        $ordenar7.style.display = "none";
        $texto61.style.display = "none";
        $label6.style.display = "none";
        $label3.style.display = "none";
        $label5.style.display = "none";
        $label81.style.display = "none";
        $parrafo9.style.display = "none";
        $inputnumer2.style.display = "none";
        $inputresul2.style.display = "none";
        $inputresul4.style.display = "none";
        $inputresul10.style.display = "none";
        $parrafo3.style.display = "none";
        $parrafo2.style.display = "none";
        $inputnumer10.style.display = "none";
        $parrafo4.style.display = "none";
        $inputnumer4.style.display = "none";
        $label4.style.display = "none";

        clic = 1;
    }
}

const arrayUnico = [12, 50, 23, 11, 18, 35, 41, 85, 16, 45];
$inputresul5.addEventListener('click', () => {
    $label3.style.display = "none";
    $label4.style.display = "block";

    arrayUnico.sort((a, b) => {
        if (a < b) {
            return -1;
        }
        if (a > b) {
            return 1;

        }
        return 0;
    });
    alert(arrayUnico);
    console.log(arrayUnico);
});

function divPunto6() {

    if (clic == 1) {

        document.getElementById("caja1").style.height = "970px";
        $texto6.style.display = "block";
        $inputbuscar6.style.display = "block";
        $inputresul6.style.display = "block";
        $label5.style.display = "block";
        $texto61.style.display = "block";
        $inputresul7.style.display = "block";
        $label6.style.display = "block";
        $inputnumer5.style.display = "block";
        $ordenar7.style.display = "block";

        clic = clic + 1;
    } else {
        document.getElementById("caja1").style.height = "0px";
        $parrafo.style.display = "none";
        $inputnumer.style.display = "none";
        $label.style.display = "none";
        $inputresul8.style.display = "none";
        $inputbuscar6.style.display = "none";
        $label3.style.display = "none";
        $texto6.style.display = "none";
        $ordenar7.style.display = "none";
        $numer9.style.display = "none";
        $label6.style.display = "none";
        $label5.style.display = "none";
        $boton9.style.display = "none";
        $inputresul10.style.display = "none";
        $inputnumer10.style.display = "none";
        $inputresul.style.display = "none";
        $inputnumer5.style.display = "none";
        $inputresul7.style.display = "none";
        $label2.style.display = "none";
        $texto61.style.display = "none";
        $parrafo2.style.display = "none";
        $inputresul6.style.display = "none";
        $parrafo9.style.display = "none";
        $parrafo7.style.display = "none";
        $texto8.style.display = "none";
        $label81.style.display = "none";
        $inputnumer2.style.display = "none";
        $inputresul2.style.display = "none";
        $inputresul4.style.display = "none";
        $label4.style.display = "none";
        $parrafo3.style.display = "none";
        $inputresul5.style.display = "none";
        $inputnumer4.style.display = "none";
        $parrafo4.style.display = "none";

        clic = 1;
    }

}
let nombres = [];
let edades = [];

$inputresul6.addEventListener('click', () => {
    const $inputnumer5 = document.querySelector("#inputnumer5").value;
    const $texto6 = document.querySelector("#texto6").value;

    nombres.push($texto6);
    edades.push($inputnumer5);
});

$inputresul7.addEventListener('click', () => {

    console.log("VECTOR NOMBRES");
    for (let i = 0; i < nombres.length; i++) {
        console.log("[" + nombres[i] + "]");
        alert("[" + nombres[i] + "]");
    }

    console.log("VECTOR EDADES");
    for (let i = 0; i < edades.length; i++) {
        console.log("[" + edades[i] + "]");
        alert("[" + edades[i] + "]");
    }
});

$inputbuscar6.addEventListener('click', () => {
    let texto61 = document.querySelector("#texto61").value;
    let posicion;
    let existe = false;

    for (let i = 0; i < nombres.length; i++) {
        if (nombres[i] === texto61) {
            posicion = i;
            existe = true;

        }
    }

    if (existe) {
        console.log("El usuario " + nombres[posicion] + " si existe y tiene la edad de " + edades[posicion]);
        alert("El usuario " + nombres[posicion] + " si existe y tiene la edad de " + edades[posicion]);
    } else {
        console.log("No existe el Usuario ");
        alert("No existe el Usuario ");
    }
    

});
function solci7(edades){
    const arrayUnico=[edades+ nombres];

    arrayUnico.sort((a, b) => a - b);
       
    
    alert(arrayUnico);
    console.log(arrayUnico);
}






function divPunto8() {

    if (clic == 1) {

        document.getElementById("caja1").style.height = "970px";
        $parrafo7.style.display = "block";
        $label81.style.display = "block";
        $texto8.style.display = "block";
        $inputresul8.style.display = "block";

        clic = clic + 1;
    } else {

        document.getElementById("caja1").style.height = "0px";
        $parrafo.style.display = "none";
        $parrafo7.style.display = "none";
        $inputnumer.style.display = "none";
        $label.style.display = "none";
        $inputresul.style.display = "none";
        $inputresul10.style.display = "none";
        $label2.style.display = "none";
        $inputresul8.style.display = "none";
        $label3.style.display = "none";
        $ordenar7.style.display = "none";
        $parrafo2.style.display = "none";
        $texto8.style.display = "none";
        $texto6.style.display = "none";
        $boton9.style.display = "none";
        $numer9.style.display = "none";
        $inputresul7.style.display = "none";
        $label5.style.display = "none";
        $label6.style.display = "none";
        $parrafo7.style.display = "none";
        $inputbuscar6.style.display = "none";
        $inputresul5.style.display = "none";
        $inputnumer5.style.display = "none";
        $inputnumer2.style.display = "none";
        $inputresul6.style.display = "none";
        $inputresul2.style.display = "none";
        $texto61.style.display = "none";
        $label81.style.display = "none";
        $inputresul4.style.display = "none";
        $inputnumer10.style.display = "none";
        $parrafo3.style.display = "none";
        $label4.style.display = "none";
        $parrafo9.style.display = "none";
        $inputnumer4.style.display = "none";
        $parrafo4.style.display = "none";

        clic = 1;
    }
}
$inputresul8.addEventListener('click', () => {
    let palabra = texto8.value;
    let palabraArray = palabra.split("");
    let tamaño = palabraArray.length;
    let contador = 0;
    let posFinal = tamaño - 1;

    console.log("La palabra es: " + palabra);
    console.log("tamaño:" + tamaño);

    for (let i = 0; i < tamaño; i++) {
        if (palabraArray[i] == palabraArray[posFinal]) {
            contador++;
        }
        posFinal--;
    }

    if (contador == tamaño) {
        alert("la palabra es Palindrome " + palabra);
        console.log("la palabra es Palindrome ");
    } else {
        console.log('la palabra No es Palindrome ');
        alert("la palabra NO es Palindrome " + palabra);
    }

});


function divPunto9() {

    if (clic == 1) {

        document.getElementById("caja1").style.height = "970px";
        $numer9.style.display = "block";
        $boton9.style.display = "block";

        clic = clic + 1;
    } else {

        document.getElementById("caja1").style.height = "0px";
        $parrafo.style.display = "none";
        $inputnumer.style.display = "none";
        $label.style.display = "none";
        $texto8.style.display = "none";
        $inputresul5.style.display = "none";
        $inputresul8.style.display = "none";
        $inputbuscar6.style.display = "none";
        $parrafo2.style.display = "none";
        $inputresul.style.display = "none";
        $label2.style.display = "none";
        $numer9.style.display = "none";
        $parrafo7.style.display = "none";
        $label4.style.display = "none";
        $ordenar7.style.display = "none";
        $boton9.style.display = "none";
        $label3.style.display = "none";
        $label6.style.display = "none";
        $texto6.style.display = "none";
        $label5.style.display = "none";
        $texto61.style.display = "none";
        $inputresul7.style.display = "none";
        $inputnumer5.style.display = "none";
        $inputresul6.style.display = "none";
        $label81.style.display = "none";
        $inputresul10.style.display = "none";
        $parrafo4.style.display = "none";
        $inputresul.style.display = "none";
        $inputnumer10.style.display = "none";
        $inputnumer2.style.display = "none";
        $inputresul2.style.display = "none";
        $parrafo9.style.display = "none";
        $inputresul4.style.display = "none";
        $parrafo3.style.display = "none";
        $inputnumer4.style.display = "none";

        clic = 1;
    }

}

function fibo(numer) {
    let a = 0,
        b = 1,
        c, s = 1;
    console.log(a, b);
    for (i = 3; i <= numer; i++) {
        c = a + b;
        console.log(c);
        s = s + c;
        a = b;
        b = c;
    }
}

function alerta() {
    fibo(prompt());
}

function divPunto10() {

    if (clic == 1) {

        document.getElementById("caja1").style.height = "970px";
        $inputnumer10.style.display = "block";
        $parrafo9.style.display = "block";
        $inputresul10.style.display = "block";


        clic = clic + 1;

    } else {

        document.getElementById("caja1").style.height = "0px";
        $parrafo.style.display = "none";
        $inputresul8.style.display = "none";
        $inputbuscar6.style.display = "none";
        $label81.style.display = "none";
        $label6.style.display = "none";
        $numer9.style.display = "none";
        $inputnumer.style.display = "none";
        $inputresul6.style.display = "none";
        $inputresul5.style.display = "none";
        $label.style.display = "none";
        $inputnumer5.style.display = "none";
        $texto6.style.display = "none";
        $label5.style.display = "none";
        $texto8.style.display = "none";
        $ordenar7.style.display = "none";
        $boton9.style.display = "none";
        $texto61.style.display = "none";
        $parrafo9.style.display = "none";
        $inputresul7.style.display = "none";
        $parrafo7.style.display = "none";
        $inputnumer10.style.display = "none";
        $parrafo2.style.display = "none";
        $inputresul.style.display = "none";
        $label2.style.display = "none";
        $label4.style.display = "none";
        $label3.style.display = "none";
        $inputnumer2.style.display = "none";
        $inputresul.style.display = "none";
        $inputresul2.style.display = "none";
        $inputresul4.style.display = "none";
        $parrafo3.style.display = "none";
        $inputresul10.style.display = "none";
        $parrafo4.style.display = "none";
        $inputnumer4.style.display = "none";

        clic = 1;
    }
}

function calcular() {
    //Obtienes el valor
    var inputnumer10 = document.getElementById("inputnumer10").value; //numeroDigitado

    //le descuentas el 8% y lo agregas al HTML
    var descuentoS = parseInt(inputnumer10) * 12.5 / 100;
    var descuentoP = parseInt(inputnumer10) * 16 / 100;
    var descuentoR = parseInt(inputnumer10) * 0.522 / 100;

    //agrega los resultados al DOM
    alert('Salud: $' + descuentoS + '  ' + 'Pension: $ ' + descuentoP + '  ' + 'Riesgos Laborales $' + descuentoR);
}