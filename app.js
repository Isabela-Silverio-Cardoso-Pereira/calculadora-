let display = document.getElementById("display");

function add(valor) {
    display.value += valor;
}

function limpar() {
    display.value = "";
}

function backspace() {
    display.value = display.value.slice(0, -1);
}

function calcular() {
    try {
        display.value = eval(display.value.replace('X', '*').replace(',', '.'));
    } catch {
        display.value = "Erro";
    }
}