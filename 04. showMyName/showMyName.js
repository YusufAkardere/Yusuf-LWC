import { LightningElement, track } from 'lwc';

export default class ShowMyName extends LightningElement {
@track x;
@track y;
    xHandler(event){
        this.x=event.target.value;
    }

    yHandler(event){
        this.y=event.target.value;
    }

}