


var health = 100
  var obj= function (name, mod, description){
    this.name = name;
    this.mod = mod;
    this.description = description;
  }
var items = {
  shield: new obj("Shield", 2, "This is an awesome shield!"),
  vest: new obj('Vest', 2 , "This is a great vest"),
  helmet: new obj('Helmet', 1, "This is a sweet helmet"),
  missed: new obj('Missed',1, "Ha Ha you missed")
}
  


function slap() {
 var modifier= player.weapons()
  health=health-2+ modifier;
  healthBar();
  update();
}

function kick() {
  var modifier= player.weapons()
  health=health-2+ modifier;
  healthBar();
  update();
}

function punch() {
 var modifier= player.weapons() 
  health=health-2+ modifier;
  healthBar();
  update();
}

function update() {
  if (health <= 75) {
    document.getElementById("player-panel").classList.add("panel-danger")
    alert('Level Low');
  }
  else {
    document.getElementById("player-panel").classList.remove("panel-danger")
  }
}

  
  var player = {
    puller:[],
    weapons:function(){
      var ranMod= Math.floor(Math.random()*this.puller.length)
      document.getElementById("comment").innerText=this.puller[ranMod].description
      return this.puller[ranMod].mod
    
  }  
    
    
  }
  for(var item in items){player.puller.push (items[item])

var healthBarElem = document.getElementById('healthbar')
function healthBar(){ 
  
  healthBarElem.style.width = health + '%'
  healthBarElem.innerText = health
}
  
  }  
  

   







