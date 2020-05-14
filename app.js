function exec() {
  var a = parseInt(prompt('Inserisci il primo operando'));
  var b = parseInt(prompt('Inserisci il secondo operando'));

  sum(a, b);
  subtract(a, b);
  multiply(a, b);
  divide(a, b);
}

function sum(a, b) {
  alert(`Somma: ${a} + ${b} = ${a + b}`);
}

function subtract(a, b) {
  alert(`Somma: ${a} - ${b} = ${a - b}`);
}

function multiply(a, b) {
  alert(`Somma: ${a} * ${b} = ${a * b}`);
}

function divide(a, b) {
  alert(`Somma: ${a} / ${b} = ${a / b}`);
}
