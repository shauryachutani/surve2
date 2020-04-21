class Form{
    constructor(){
      this.input=createInput(null)
      this. buttonnext=createButton("Next");
    }
display(){
  var head=createElement("h1")
  head.html("SURVEY")
   var question=createElement("h2");
   question.html("Which game was best in 2019?");
   question.position(350,150);
   
head.position(350,85);
 this. buttonnext.position(350,350);
  this. input.position(350,200);
  
 
 
}
}
if(mousePressed(this.buttonnet)){ 
  this.input.destroy();
}

