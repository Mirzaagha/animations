function setup() {
  createCanvas(400, 400);
}
function r_a(x1,y1,a,size,st){
  for(var x = 0;x < 4;x++){
    line(x1,y1,x1+size*sin(a+(x*PI)/2),y1+size*cos(a+(x*PI)/2));
    strokeWeight((st+2)*1);
    stroke(map((st+1),0,2,0,255),0,map((st+1),0,2,255,0));
    x1 = x1+size*sin(a+(x*PI)/2);
    y1 = y1+size*cos(a+(x*PI)/2);
  }
}


var L = 30;
var cr = 10;
var z = 0;
var ch = 0;
function draw() {
  background(220);
  for(var x = 2*L; x < cr*L+2*L;x+=L){
    for(var y = 2*L; y < cr*L+2*L;y+=L){
      var xx = (x-2*L)/L;
      var yy = (y-2*L)/L;
      var zz = (cr/2 - xx)*(cr/2 - xx)+(cr/2 - yy)*(cr/2 - yy);
      r_a(x,y,(PI/(3+zz))+z,L,z);
    }
  }
  ch += 1;
  z = 1*sin(ch*PI/180);
}








