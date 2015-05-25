describe('module', function(){

    var myModule;

    beforeAll(function(){
        myModule = require('../src/module');
    });

    beforeEach(function() {

    });

    it('should add two numbers', function() {
        expect(myModule(3, 4)).toEqual(7);
    });

    afterEach(function(){
        // tear down
    });

    afterAll(function() {
        // tear down all
    });
});