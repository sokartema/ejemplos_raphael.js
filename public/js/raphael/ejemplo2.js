window.onload = function(){

  var contenedor = document.getElementById('canvas_container');
  var paper = new Raphael(contenedor,500,300)
  var tetronimo = paper.path("M 350 250 l 0 -50 l -50 0 l 0 -50 l -50 0 l 0 50 l -50 0 l 0 50 z")
  tetronimo.attr(
      {

        gradient: '90-#526c7a-#64a0c1',
        stroke:'#3b4449',
        'stroke-width':10,
        'stroke-linejoin': 'round'

      }
  );

}
