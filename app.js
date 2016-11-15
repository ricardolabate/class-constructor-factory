//Javascript Factory Functions vs Constructor Functions vs Classes

//Class - Classes are in fact "special" functions divided in 2:
//class expressions | class declarations

//Class declarations

//One way to define a class is using a class declaration. To declare a class
//you use the class keyword with the name of the class("Polygon" here)

class Polygon{
  constructor(height, width){
    this.height = height;
    this.width = width;
  }
}

//Hoisting
//An important difference between function declarations and class declarations is that a
//function declarations are hoisted* and class declarations are not. You first need to declare
//your class and then access it, otherwise code like the following will throw a ReferenceError

//hoisted = in Javascript, functions and variables are hoisted. Hoisting is Javascript
//behavior of moving declarations to the top of a scope(the global scope or the current function
//scope)

var p = new Polygon();

class Polygon{ }

//Class expressions

// A class expression is another way to define a class. Class expressions can be named or unnamed.
// The name given to a named class expression is local to the class's body

//unnamed

var Polygon = class{
  constructor(height, width){
    this.height = height;
    this.width = width;
  }
}

//named
var Polygon = class Polygon{
  constructor(height, width){
    this.height = height;
    this.width = width;
  }
}

//class

class ClassCar{
  drive(){
    console.log('Vroom');
  }
}

const car1 = new ClassCar();
let car1 = new ClassCar(); //"Vroom"
console.log(car1.drive());

constructor = by convention ConstruCtor function start with capital letter
function ConstructorCar(){}

ConstructorCar.prototype.drive = function(){
  console.log('Vroom');
}

const car2 = new ConstructorCar();
console.log(car2.drive());

//factory

// In Javascript any function can return a new object. When it's not a constructor function or
// class it's called a factory function

const proto = {
  drive(){
    console.log('Vroom');
  }
}

function factoryCar(){
  //this function creates a car and it should RETURN a new car to us
  return Object.create(proto);
}

const car3 = factoryCar();

const car = factoryCar();

console.log(car3.drive());

//Most books teach you to use class or constructors

//Using factory is a GAME CHANGER

//Factory refactored implementation
const AutoMaker = {
  Car(bundle){
   return Object.create(this.bundle[bundle]);
  },

  bundle:{
    premium:{
      drive(){
        console.log('Vroom!');
      },
      getOptions: function(){
        return['leather', 'wood', 'pearl'];
      }
    }
  }
};

//The refactored factory expects
const newCar = AutoMaker.Car('premium');
newCar.drive();
