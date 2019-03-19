import Parrot from './parrot';
class ParrotEuropean extends Parrot{
    constructor(){
        super();
        this.baseSpeed=12;
    }
    getSpeed(){
        return this.baseSpeed;
    }
}
module.exports=ParrotEuropean;