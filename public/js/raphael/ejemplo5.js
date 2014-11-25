window.onload = function(){

  var contenedor = document.getElementById('canvas_container');
  var paper = new Raphael(contenedor,600,300);
  var circle = paper.circle(100,150,60);
  var rect = paper.rect(225,100,100,100);
  var rect2 = paper.rect(400,100,100,100);
  var text = paper.text(250,20,"¡Pon el raton encima!");


  text.attr({opacity: 1 , 'font-size' : 15 , 'font-weight': 'bold'});


  circle.attr(
    {

      gradient: '90-#069-#000',
      stroke:'black',
      'stroke-width':2,

    }
  );

  rect.attr(
    {

      gradient: '90-#069-#000',
      stroke:'black',
      'stroke-width':2,

    }
  );

  rect2.attr(
    {

      gradient: '90-#069-#000',
      stroke:'black',
      'stroke-width':2,

    }
  );


  circle.hover(function(){

    circle.animate({transform: "t0,50"}, 1000 , 'bounce');


  },

  function(){

    circle.animate({transform: "t0,0"}, 1000 , 'bounce');



  }



  );


  rect.node.onmouseover = function(){

    rect.animate({transform: "r720"}, 2000 , 'bounce');


  }

  rect.node.onmouseout = function(){

    rect.animate({transform: "r0"}, 2000 , 'bounce');



  }


  rect2.node.onmouseover = function(){

    rect2.animate({transform: "s2"}, 2000 , 'elastic');


  }

  rect2.node.onmouseout = function(){

    rect2.animate({transform: "s1"}, 2000 , 'elastic');



  }



}
