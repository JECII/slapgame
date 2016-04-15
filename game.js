


var health = 100;
function slap() {
  health--;
  healthBar();
  update();
} 

function kick(){
  health--; 
 healthBar();
 update();
} 

function punch(){
  health--;
  healthBar();
update();
}

function update(){
  if( health <= 30){
         document.getElementById("player-panel").classList.add("panel-danger")
         alert ('Level Low')
    }
    else
    {
         document.getElementById("player-panel").classList.remove("panel-danger")
    }

}
var healthBarElem = document.getElementById('healthbar')

function healthBar()
{
healthBarElem.style.width = health + '%'
healthBarElem.innerText = health
}



