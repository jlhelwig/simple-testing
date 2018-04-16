const assert = require('chai').assert;
const sayHello = require('../script').sayHello;
const addNumbers =  require('../script').addNumbers;
// const app = require ('../script');

describe ('App',function(){
  it ('should equal hello', function(){
    let result = sayHello()
    assert.equal(result,'hello');
  });
  it ('sayHello should be a string', function(){
    let result = sayHello()
    assert.typeOf(result, 'string');
  });
  it ('addNumbers should be greater than 5', function(){
    let result =addNumbers(3,3)
    assert.isAbove(result,5);
  });
  it ('addNumbers should be a number', function(){
    let result = addNumbers(3,3)
    assert.typeOf(result, 'number');
  });
});
