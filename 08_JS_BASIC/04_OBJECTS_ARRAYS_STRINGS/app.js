//Obiect literal

var masina = {
  marca: "Skoda",
  model: "Octavia",
  anFabricatie: 2016,
  kmParcursi: 150000,
  culoare: "gri",
  pret: 15000,
};

var input = {
  marca: "Dacia",
};

function showInputValue() {
  var myInput = document.getElementById("input").value;
  console.log(inputValue);
}

function calculateSum() {
  var num1 = parseInt(document.getElementById("a").value);
  var b = parseInt(document.getElementById("b").value);
  var sum = a + b;
  document.getElementById("result").innerText = "Suma este: " + sum;
}

var numbers =[6, 2, 7, 8, 9];
console.log(numbers[4]);
console.log(numbers[5]);
