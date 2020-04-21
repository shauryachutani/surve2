var  database;
var playerCount,form,player,game;
var gamestate=0;


function setup(){
  database = firebase.database();
  console.log(database);
  createCanvas(450,450);
  game=new Game();
  game.getState();
  game.start();
}

function draw(){
  background("lime");

}

