// Segunda-feira,27/09/2021{à tarde} das 13:37:00 até as 14:33:00 h +|-
function Converter() {
    var valorElemento = document.getElementById("valor");
    var valor = valorElemento.value;
    var valorEmDolarNumerico = parseFloat(valor);
  
    var valorEmReal = valorEmDolarNumerico * 5;
    console.log(valorEmReal);
    var elementoValorConvertido = document.getElementById("valorConvertido");
    var valorConvertido = "O resultado em real é R$" + valorEmReal;
    elementoValorConvertido.innerHTML = valorConvertido;
  }
  // O programador não faça para si...outros precisos entender...
  // Códigos claros...