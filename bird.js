import Parrot from './parrot';

class Bird{
    constructor(){
        this.bird=new Parrot();
    }
    getSpeedBird(bird){
        this.setBird(bird);
        return this.bird.getSpeed();
    }
    setBird(bird){
        this.bird=bird;
    }
}
module.exports=Bird;