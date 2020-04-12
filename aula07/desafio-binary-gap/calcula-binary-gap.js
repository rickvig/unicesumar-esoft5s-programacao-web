
let botoes = document.querySelectorAll("button");

botoes.forEach((elemento, indice, lista) => {
  console.log("opa", elemento, indice);
  elemento.onclick = calculaBinaryGap;
});

function calculaBinaryGap() {
  let valor = this.parentElement.previousElementSibling.innerHTML;
  let binario = (valor >>> 0).toString(2);
  let binarioSplit = binario.split("1");

  console.log("valores", valor, binario, binarioSplit);

  let menor = 0;
  let contador = 1;

  binarioSplit.forEach((elemento) => {
    if (
      elemento.length > menor &&
      !(contador === binarioSplit.length && elemento.includes("0"))
    )
      menor = elemento.length;
    contador++;
  });

  console.log(menor);
  menor = menor === 0 ? "Não tem BinaryGap" : menor;
  this.parentElement.nextElementSibling.innerHTML = menor;
}
