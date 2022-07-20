import { LightningElement} from 'lwc';

export default class Randomizer extends LightningElement {

count=0;

    counterUp(){
    
    this.count=Math.floor(Math.random() * 100)+1;
}
}