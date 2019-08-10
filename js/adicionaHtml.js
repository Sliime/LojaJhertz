
function adicionarFormulario(from, to, preco){
       

     console.log(from, to, preco);
     

     var formulario = document.querySelector("#tabela-endereco");
     var formularioTr = document.createElement("tr");
  
     formularioTr.appendChild(montarTd(from, "info-partida"));
     formularioTr.appendChild(montarTd(to, "info-chegada"));
     formularioTr.appendChild(montarTd(preco, "info-preco"));

    formulario.appendChild(formularioTr);
  }



  function montarTd (dado, classe){
    var td = document.createElement("td");

    td.classList.add(classe);
    td.textContent = dado;

    return td;
}