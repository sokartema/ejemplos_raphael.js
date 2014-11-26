window.onload = function(){

  var contenedor = document.getElementById('canvas_container');
  var paper = new Raphael(contenedor,600,300);

  var color = ['red','green','#64a0c1','blue','black','#069'];

  var text = paper.text(0,0,'Gracias por su atención!!');

  text.attr({'font-size':40,'font-family':'Brush Script MT',opacity: 0});

  text.animate({transform:'T300,100r360',opacity:1} ,2000,'bounce');

  function infinite(){

    var eleccion = Math.floor((Math.random()*3) + 1);

    if(eleccion == 1){

      text.animate({transform:'T300,100r0'},2000,'bounce');


      text.animate({fill:color[Math.floor((Math.random()*6) + 1) -1]},2000,'bounce');


    }else{

      text.animate({transform:'T300,100r360'},2000,'bounce');

    }


  }

  setInterval(infinite,4000)


}
