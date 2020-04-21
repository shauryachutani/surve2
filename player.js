class Player{
constructor(){

}
getcount(){
var playercountref=database.ref("playercount");
playercountref.on("value",function(data){
    playerCount=data.val();
})

}
updatecount(count){
    database.ref("/").update({
      playerCount:count  
    })
}
update(name){
    var playerindex="player"+playerCount;
    database.ref(playerindex).set({
     name:name   
    })
}

}