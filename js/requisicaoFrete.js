
var botao = document.querySelector("#calcular-frete");

botao.addEventListener("click", adicionarCalculo);



function chamarApiComParametros (){
    event.preventDefault();
    var form = document.querySelector("#conteudo-form");
    var input = form.valorCep.value;
    var origin2 = '01509010';
    var destinationA = input;
    
    googleMatrixAPI(destinationA, origin2);

}


function googleMatrixAPI(destinationA, origin2){
 
        var service = new google.maps.DistanceMatrixService();
        service.getDistanceMatrix(
        {
            origins: [ origin2],
            destinations: [destinationA],
            travelMode: 'DRIVING'
            
        }, callback);
}


function callback(response, status) {
  if (status == 'OK') {
  
      var origins = response.originAddresses;
      var destinations = response.destinationAddresses;
  
      for (var i = 0; i < origins.length; i++) {
        var results = response.rows[i].elements;
        for (var j = 0; j < results.length; j++) {
          var element = results[j];
          var distance = element.distance.value;
          var duration = element.duration.text;
          var from = origins[i];
          var to = destinations[j];

          console.log(distance);
       
          console.log(calcular(distance));

          
          
        }
      }
     }
}

function calcular(distance){

  var km = distance / 1000;
  var total = km.toFixed(2) * 2.00; 

  return total;
}