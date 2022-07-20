import { LightningElement, track } from 'lwc';

export default class Calculator01 extends LightningElement {
num1;
num2;
@track myResult;
@track checkMe;

xHandler(event){
    this.num1 = event.target.value;
}

yHandler(event){
    this.num2 = event.target.value;
}



sumHandler(){
    const x = parseInt(this.num1);
    const y = parseInt(this.num2);
    const z = x+y;
    this.myResult=z;

}

multiplyHandler(){
    const x = parseInt(this.num1);
    const y = parseInt(this.num2);
    const z = x*y;
    this.myResult=z;
}

clearHandler(){
    this.myResult="";
    this.checkMe=" ";
    this.checkMe="";
}
}