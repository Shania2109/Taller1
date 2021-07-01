console.log("Punto3");
let html = "";

const tablasMultiplicar = () => {

    for (let j = 1; j <= 9; j++) {
        html += "<div class='tablas'>";
        html += "<table>";
        for (let i = 1; i <= 9; i++) {
            html += "<tr><td>" + j + " X " + i + " = " + j * i + "</td> </tr>";
        }
        html += "</table>";
        html += "</div>";

    }

    document.getElementById("tabla3").innerHTML = html;
}

const tabla3 = document.getElementById("tabla3");
tablasMultiplicar();