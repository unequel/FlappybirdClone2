//Intial Phaser Engine. Create a 400x490px game.//

var game = new Phaser.Game(400,490, Phaser.AUTO,"gameDiv");

//create our mai state that will contain the game
//thid is the body of the game itself. It contains all relevant code

var mainState ={
  
 preload: function () {
 
   //This function will execute at the begiining of the game
   //Here well load all of our assests ( art,music,etc)
 },  
 
   create: function () {
   
     //This create function is called right after the preload f(x)
     //This is where we'll set up up the game assests from scratch
     
     
   },
    update: function() {
    
      //This function is called 60x a second
      //It contain the games logic and all time related actions
      
    },
  
  
}

//Add and start the gameState
game.state.add('main', mainState)
game.state.start('main')
