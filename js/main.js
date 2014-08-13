//Intial Phaser Engine. Create a 400x490px game.//

var game = new Phaser.Game(400,490, Phaser.AUTO,"gameDiv");

//create our mai state that will contain the game
//thid is the body of the game itself. It contains all relevant code

var mainState ={
  
 preload: function () {
 
   //This function will execute at the begiining of the game
   //Here well load all of our assests ( art,music,etc)
   game.stage.backgroundColor= "#71c5cf";
   game.load.image('bird', 'assests/bird.png');
   game.load.image('pipe', 'assests/pipe.png');
 },  
 
   create: function () {
   //Start our Physics Engine
   game.physics.startSystem(Phaser.Physics.ARCADE);
   
   
   
   this.bird = this.game.add.sprite(100, 250, 'bird');
   game.physics.arcade.enable(this.bird);
   
   this.bird.body.gravity.y=  1000;
   
   //add Pipes to the game
   this.pipes = game.add.group ();
   
   this.pipes.enabledBody = true;
   
   //Create 20 pipes to hold in the group
   this.pipes.createMultiple(20, 'pipe');
   
   //Add in pipes over 1.5 seconds
   this.timer = game.time.events.loop(1500, this.addRowofPipes.this)
   
   //When Spacbarr is pressed, make the bird jump!
   var spaceKey = this.game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
   spaceKey.onDown.add(this.jump, this);
   
   
     //This create function is called right after the preload f(x)
     //This is where we'll set up up the game assests from scratch
     
     
   },
   
    update: function() {
    
    
    if (this.bird.inWorld == false) {
    this.restartGame
      }
      },
      addOnePipe: function (x,y) {
        //get the first dead pipe
        var pipe = this.getFirstDead();
        
          //Set x and y values of the pipe
          pipe.reset(x, y);
          //Move the pipes to the left of screen
         pipe.body.velocity.x = -200;
         
         //Kill the pipe if its not off the screen at any point
         pipe.checkWorldBounds = true;
         pipe.outOfBoundsKill = true;
      
      
    },
    
    addRowOfPipes: function (){
    var hole = Math.floor(Math.random() * 5) +1;
    
    for(var i = 0; i < 8; i++){
    
     if(i != hole && i != hole + 1) {
      this.addOnePipe(400, i*60 + 10);  
       
       
       
      } 
     }
  
},
     jump: function (){
     //Lets add vertical veLocity to the bird when the spacebar is pressed down
     
     this.bird.body.velocity.y = -350;
   },

     restartGame: function() {
     game.state.start('main');
     
     },
    
      //This function is called 60x a second
      //It contain the games logic and all time related actions
      
    }
  
  


//Add and start the gameState
game.state.add('main', mainState)
game.state.start('main')
