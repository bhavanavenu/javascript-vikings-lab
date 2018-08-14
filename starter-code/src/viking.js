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
function Saxon() {}

// War
function War() {}
