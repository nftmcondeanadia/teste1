function tela3() {
  resizeCanvas(500, 300);
  background(200,0,100);
  
  fill(255);
  rect(300,50,180,80);
  
  fill(0);
  textSize(40);
  textAlign(CENTER);
  text("Tela1",390,100);
  
  if(mouseIsPressed && mouseX>=300 && mouseX<=480 && mouseY>=50 && mouseY<=130){
    tela=1;
  }
}