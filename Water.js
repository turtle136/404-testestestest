class Water {
    constructor(){
        
    
            //this.image = loadImage();
            this.width = 50;
            this.height = 50;
            this.x = 300;
            this.y = 500;

           
    }
    display(){
       // var position = this.body.position;
        //imageMOde(CENTER);
        fill("blue");
        //rectMode(CENTER);
        rect(this.x,this.y,this.width,this.height);
    }


}