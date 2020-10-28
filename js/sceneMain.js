class SceneMain extends Phaser.Scene {
    constructor() {
        super('SceneMain');
    }
    preload(){
    	//load images and sounds etc
		this.load.image("road","images/road.jpg");
		this.load.image("line","images/line.png");
		this.load.image("pcar1","images/pcar1.png");
		this.load.image("pcar2","images/pcar2.png");
		this.load.image("cone","images/cone.png");
		this.load.image("barrier","images/barrier.png");
        this.load.spritesheet("cars", "images/cars.png", {
            frameWidth: 60,
            frameHeight: 126
        });;
    }
    create(){
		//Define our objects
		this.road = new Road({scene:this});
		this.road.x = game.config.width/2;
		this.road.makeLines();
		
		//keyboard capture
		this.input.keyboard.on('keydown', this.chGameLn, this);

        console.log("Ready!");
    }
    update(){
		//constant running loop
		this.road.moveLines();
		this.road.moveObject();
	}
	
	//custom functions if required
	chGameLn(event) {
		let code = event.keyCode;

		if(code == Phaser.Input.Keyboard.KeyCodes.LEFT){
			this.road.changeLeft();
		}else if(code == Phaser.Input.Keyboard.KeyCodes.RIGHT){
			this.road.changeRight();
		}	
	}
}	