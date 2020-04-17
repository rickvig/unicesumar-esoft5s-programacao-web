
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

  let maior = 0;
  let contador = 1;

  binarioSplit.forEach((elemento) => {
    if (
      elemento.length > maior &&
      !(contador === binarioSplit.length && elemento.includes("0"))
    )
      maior = elemento.length;
    contador++;
  });

  console.log(maior);
  maior = maior === 0 ? "Não tem BinaryGap" : maior;
  this.parentElement.nextElementSibling.innerHTML = maior;
}
