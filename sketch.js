var locs = [];
var c;
var n = 0;
var times = 1.0;


var height1 = 400;
var width1 = 400;
var xcoeff = 2 ;
var ycoeff = 2 ;
var boo = false;
let lines =  [];


// Setting Up Visualization Space -- Similar to Draw Function below,
//this method is inherent to P5 JS Javascript Package
function setup(){

  c = createCanvas(windowWidth, height1);

   var res = 20;
   var countX = ceil(width/res) + 1;
   var countY = ceil(height1/res) + 1;

   for (var j = 0; j < countY; j++) {
     for (var i = 0; i < countX; i++) {
       locs.push( new p5.Vector(res*i, res*j) );
     }
   };

   noFill();
   stroke(249,78,128); // add the pink color effect

}


// ------------
// Draw function - inherent to P5 JS Javascript Package
// -------------

function draw() {

  background(16,10,66); // dark blue coloration
  for (var i = locs.length - 1; i >= 0; i--) {
    var h = new p5.Vector((xcoeff*Math.pow(locs[i].x,3)*Math.pow(locs[i].y,4))+locs[i].x,
    (ycoeff*Math.pow(locs[i].x,4)*Math.pow(locs[i].y,3))+locs[i].y);
    push();
      translate(locs[i].x, locs[i].y);
      rotate(h.heading());
      line(0, 0, 0, - 15);
    pop();
  };



 if(mouseIsPressed &&  boo == false){
    var currX = 100;
    var currY = 300;
    var slope =  -1;

    ellipse(300,100,50,50);
    ellipse(100,300,50,50);

    while(currX != 300){
      l = line(currX,currY,currX+(1.0/times),currY-(1.0/times));
      lines.push(l);
      currX = currX+(1.0/times);
      currY = currY-(1.0/times);

    }


    currX = 100;
    currY  = 300;

    while(currX != 300){
      m = line(currX,currY,currX+(1.0/times),currY+(((currX*0.006666)-2.353)*(1.0/times)));
      lines.push(m);

      currX = currX+(1.0/times);
      currY = currY+(((currX*0.006666)-2.353)*(1.0/times));

    }

    currX = 100;
    currY  = 300;

    while(currX != 300){
      m = line(currX,currY,currX+(1.0/times),currY+(((currX*-0.005334)+0.06667)*(1.0/times)));
      lines.push(m);

      currX = currX+(1.0/times);
      currY = currY+(((currX*-0.005334)+0.06667)*(1.0/times));
    }

    boo = true;
    path1();
    path2();
    path3();
  }

  if(boo==true){
    for(var g = 0; g <= lines.length(); g++){
      lines[g].display();
      delay(1000);
    }
  }

}

function drawLinear() {
  var currX = 100;
  var currY = 300;
  var slope =  -1;

  while(currX != 300){
    lines.push(line(currX,currY,currX+(1/times),currY-(1/times)));
    lines[n].display();
    n+=1;
    currX = currX+(1/times);
    currY = currY-(1/times);
    delay(100);
   }

}

function delay(ms) {
  var cur_d = new Date();
  var cur_ticks = cur_d.getTime();
  var ms_passed = 0;
  while(ms_passed < ms) {
    var d = new Date(); // Possible memory leak?
    var ticks = d.getTime();
    ms_passed = ticks - cur_ticks;
    // d = null; // Prevent memory leak?
  }
}


function calcVec(x, y) {
 return new p5.Vector(y - x, - x - y);
}
