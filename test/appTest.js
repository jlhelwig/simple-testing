const assert = require('chai').assert;

const app = require ('../script');

describe ('app',function(){
  it ('should equal hello', function(){
    assert.equal(app(),'hello')
  })
})
