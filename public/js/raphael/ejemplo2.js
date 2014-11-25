window.onload = function(){

    var contenedor = document.getElementById('canvas_container');
    var paper = new Raphael(contenedor,500,300);
    var circle = paper.circle(150,150, 80);
    var rect = paper.rect(300 , 65 , 150 , 150);

    circle.attr({fill:'#ff0000'});
    rect.attr({fill:'#4ab1eb'});


}
