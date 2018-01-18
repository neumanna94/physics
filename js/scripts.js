function drawCircle(canvas,time,mass,initialx,initialy){
  var x = 20*time*1;
  var y = (initialy + (9.81/10)*Math.pow(time,2));
  canvas.arc(x,y,mass,0,2*Math.PI);
  canvas.stroke();
}

function gravity(mass, otherMass, distance){
  var g = 6.674 * Math.pow(10, -11);
  return g*((mass*othermass)/(Math.pow(distance)));
}

function acceleration(force, mass){
  return force/mass;
}
function velocity(force,mass){
  return derivative(force/mass);
}

function derivative(inputFunction){
}


$(document).ready(function(){
  var time = 0;
  var c=document.getElementById("myCanvas");
  var ctx=c.getContext("2d");
  var x = 0;
  var y = 0;

  setInterval(function(){
    time++;
    ctx.fillStyle='white'
    ctx.fillRect(0,0, 1000, 1000);
    drawCircle(ctx,time, 50, 100, 10);


  }, 1000);
});
