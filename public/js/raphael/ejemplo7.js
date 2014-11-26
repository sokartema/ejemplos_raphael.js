window.onload = function(){

  var contenedor = document.getElementById('canvas_container');
  var paper = new Raphael(contenedor,600,300);


  function multiply(){

    var circle = paper.circle(-50,-50,30).attr({gradient: '90-#069-#000',stroke:'black','stroke-width':2,opacity:0.5});



    function draw() {

      x = Math.floor((Math.random()*520) + 100);
      y = Math.floor((Math.random()*220) + 100);
      ang = Math.floor((Math.random()*360) + 1);

      coord = "T" + x + "," + y + "r" + ang;

      circle.animate({transform:coord},2e3,'linear');
    }


    setInterval(draw, 2000);

  }

  setInterval(multiply,5000)


}
