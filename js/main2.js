function log(value){
    console.log(value);
}

log('test');

function sum(a, b){
    return a + b;
}
console.log(sum(2,5));

//Arrow function
var sum = (a,b) => a + b;
console.log(sum(5,15));

var createObj = () => ({test: 123});
console.log(createObj());

//função construtora
function Car(){
    this.foo = 'bar';
}
console.log(new Car());