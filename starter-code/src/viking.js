// Soldier

function Soldier(health,strength) {
this.health = health;
this.strength = strength;
}
//attack() method

Soldier.prototype.attack = function() {
    return this.strength;
  };

  //receiveDamage() method

Soldier.prototype.receiveDamage=function(){
    this.health -= damage;

}



// Viking

//construction function
function Viking(name,health,strength) {
    Soldier.call(this,health,strength);
    this.name=name;
    
}

// attack() method

Viking.prototype = Object.create(Soldier.prototype);

//receiveDamage() method

Viking.prototype.receiveDamage=function(damage){
    Soldier.prototype.receiveDamage(damage);
    this.health -= damage;
    if (this.health <= 0)
      return this.name + " has died in act of combat";
    else
      return this.name + " has received " + damage + " points of damage";
  }
   
//battleCry() method

Viking.prototype.battleCry = function() {
    return "Odin Owns You All!";
  }

// Saxon
function Saxon(health,strength) {
    Soldier.call(this.health,strength);
}

Soldier.prototype.attack()=function(){
    return this.strength;
}

//receiveDamage()

function receiveDamage(damage){
    this.health-=damage;
      if(this.health>0)
      {
        return  "A Saxon has received DAMAGE points of damage";
      }
      return "A Saxon has died in combat"
    
    }
    
// War
function War() {
    
    this.VikingArmy =[];
    this.SaxonArmy=[];
      
}

War.prototype.addViking= function(Viking){
    this.VikingArmy.push(Viking);
}

War.prototype.addSaxon=function(Saxon){
    this.SaxonArmy.push(Saxon);
  }


  War.prototype.VikingAttack=function(){
    var VikingIndex = Math.floor(Math.random() * this.VikingArmy.length);
    var randomViking=this.VikingArmy[VikingIndex];
    var randomSaxon;
    randomSaxon.receiveDamage(randomViking.attack());
    if(randomSaxon.health <=0 ){
      this.SaxonArmy.splice(saxonIndex,1);
    }
  }

  War.prototype.showStatus = function (){
    if(this.SaxonArmy.length==0){
      return "Vikings have won the war of the century!";
    }
    else if (this.VikingArmy.length==0){
      return "Saxons have fought for their lives and survive another day..."
    }
    return "Vikings and Saxons are still in the thick of battle.";
  }
  