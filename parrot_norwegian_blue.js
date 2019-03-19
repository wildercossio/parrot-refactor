import Parrot from './parrot';
class ParrotNorwegianBlue extends Parrot{
    constructor(size,isNailed){
        super();
        this.isNailed=isNailed;
        this.size=size;
        this.baseSpeed=12;
    }
    getSpeed(){
        return (this.isNailed) ? 0 : this.getBaseSpeedWithSize(this.size);
    }
    getBaseSpeedWithSize(size) {
        return Math.min(24, size * this.baseSpeed);
    }
}
module.exports=ParrotNorwegianBlue;