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

function mutiplica(a,b){
    return a * b;
}
console.log(mutiplica(3,5));

function randomNumber(){
    console.log('Gerando números randômicos...');
    return Math.random() * 10;
}
function multiplicar(a, b = randomNumber()){
    return a * b;
}
console.log(multiplicar(5));

function method1(){
    console.log('method called');
}
var obj = {
    method1
};
obj.method1();