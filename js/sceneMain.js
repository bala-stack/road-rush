class SceneMain extends Phaser.Scene {
    constructor() {
        super('SceneMain');
    }
    preload(){
    	//load images and sounds etc
		this.load.image("road","images/road.jpg");
		this.load.image("line","images/line.png");
		// this.load.spritesheet("cars","images/cars.png",{frameWidth:60,frameHeight:126});
		this.load.image("cars","images/cars.png",{frameWidth:60,frameHeight:126});
    }
    create(){
		//Define our objects
		var road = new Road({scene:this});
		road.x = game.config.width/2;
		road.makeLines();

        console.log("Ready!");
    }
    update(){
		//constant running loop

	}
	
	//custom functions if required
	
}