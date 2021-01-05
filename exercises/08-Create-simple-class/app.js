class Counter{
	constructor(){
        this.counter = 0
		//initialization of the counter variable
		
	}
	increaseOne(){
        this.counter += 1
		//increase the value in one
	}
	decreaseOne(){
        this.counter -= 1
		//decrease the value in one
	}
	getValue(){
        return this.counter
		//return the value
	}	
}

let myNewCounter = new Counter();
myNewCounter.increaseOne();
console.log(myNewCounter.getValue());
myNewCounter.increaseOne();
myNewCounter.increaseOne();
console.log(myNewCounter.getValue());
myNewCounter.decreaseOne();
myNewCounter.decreaseOne();
console.log(myNewCounter.getValue());

