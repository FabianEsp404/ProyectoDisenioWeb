function IMCMetrico() {
    var Kg = document.getElementById("PesoKg");
    var cm = document.getElementById("EstaturaCm");

    metros = eval(cm.value) / 100;
    kilos = eval(Kg.value);
    mtsCuadrado = metros * metros;
    document.getElementById("Resultado").value = Math.round(kilos / mtsCuadrado);
}
function IMCIngles() {
    var pul = document.getElementById("EstaturaP");
    var lib = document.getElementById("PesoL");

    metros = eval(pul.value) / 39.37;
    kilos = eval(lib.value) / 2.205;
    mtsCuadrado = metros * metros;
    document.getElementById("Resultado").value = Math.round(kilos / mtsCuadrado);

}
document.getElementById("btnCalcularIMCI").addEventListener("click", IMCIngles);
document.getElementById("btnCalcularIMCM").addEventListener("click", IMCMetrico);

