export class Animal {
    constructor(legCount,eyeCount) {
        this.legCount = legCount;
        this.eyeCount = eyeCount;
    }
    run() {
        if (this.legCount == 2)
            console.log('Hey Im Flying!');
        else
            console.log('Hey Im Running!');
    }
    sing() {
       console.log('Hey Im Singing!');
    }
}
