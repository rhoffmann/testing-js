describe('custom assymetry', function() {
    var tester = {
        asymmetricMatch: function(actual) {
            var secondValue = actual.split('::')[1];
            return secondValue === 'height';
        }
    };

    it('dives in deep', function() {
        expect('dsb3dsmdf::height::2314').toEqual(tester);
    });

    describe('when used with a spy', function() {
        it('is useful for comparing arguments', function(){
            var callback = jasmine.createSpy('callback');

            callback('asdfgert45::height::322');

            expect(callback).toHaveBeenCalledWith(tester);
        });
    });
});