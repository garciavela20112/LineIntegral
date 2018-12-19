var xcoeff = 2;
var ycoeff =2;


function path1() {
  var value = 231.4;
  var parent= document.getElementById('describingCalculations');
  var entry = document.createElement('li');
  entry.appendChild(document.createTextNode("The Line Integral for the  Linear Funnction is: " + value));
  parent.appendChild(entry);
  return value;
}

function path2() {
  var value = 231.4;
  var parent= document.getElementById('describingCalculations');
  var entry = document.createElement('li');
  entry.appendChild(document.createTextNode("The Line Integral for the Upwards Facing Quadratic is: " + value));
  parent.appendChild(entry);
  return value;
}

function  path3() {
  var value = 231.4;
  var parent= document.getElementById('describingCalculations');
  var entry = document.createElement('li');
  entry.appendChild(document.createTextNode("The Line Integral for the Inverse Quadratic Function is:  " + value));
  parent.appendChild(entry);
  analysis();
  return  value;
}
