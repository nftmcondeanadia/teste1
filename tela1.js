function tela1() {
  resizeCanvas(500, 500);
  background(200,100,100);
  
  fill(255);
  rect(160,50,180,80);
  rect(160,250,180,80);
  
  fill(0);
  textSize(40);
  textAlign(CENTER);
  text("Tela2",250,100);
  
  text("Tela3",250,300);
  
    if(mouseIsPressed && mouseX>=160 && mouseX<=340 && mouseY>=50 && mouseY<=130){
    tela=2;
  }
  
  if(mouseIsPressed && mouseX>=160 && mouseX<=340 && mouseY>=250 && mouseY<=330){
    tela=3;
  }
}