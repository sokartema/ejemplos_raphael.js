window.onload = function(){

  var contenedor = document.getElementById('canvas_container');
  var paper = new Raphael(contenedor,500,500)
  circle = paper.circle(250,150, 80);
  circle.attr({fill:'#ff0000'});


}
