import Parrot from './parrot';
class ParrotAfrican extends Parrot{
    constructor(numberOfFeathers){
        super();
        this.weight=9;
        this.baseSpeed=12;
        this.numberOfFeathers=numberOfFeathers;
    }
    getSpeed(){
        return Math.max(0, this.baseSpeed - this.weight * this.numberOfFeathers);
    }
}
module.exports=ParrotAfrican;