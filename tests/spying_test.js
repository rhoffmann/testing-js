describe('a spy', function() {

    var foo, bar = null;

    beforeEach(function(){
        foo = {
            setBar: function(value) {
                bar = value;
            }
        };

        spyOn(foo, 'setBar');

        foo.setBar(123);
        foo.setBar(456, 'another param');
    });

    it('tracks that the sky was called', function() {
        expect(foo.setBar).toHaveBeenCalled();
    });

    it("tracks all the arguments of its calls", function() {
        expect(foo.setBar).toHaveBeenCalledWith(123);
        expect(foo.setBar).toHaveBeenCalledWith(456, 'another param');
    });

    it("stops all execution on a function", function() {
        expect(bar).toBeNull();
    });
});



describe('a spy with call through', function() {

    var foo, bar, fetchedBar;

    beforeEach(function(){
        foo = {
            setBar: function(value) {
                bar = value;
            },
            getBar: function() {
                return bar;
            }
        };

        spyOn(foo, 'getBar').and.callThrough();

        foo.setBar(123);
        fetchedBar = foo.getBar();
    });

    it('tracks that the sky was called', function() {
        expect(foo.getBar).toHaveBeenCalled();
    });

    it("should not affect other functions", function() {
        expect(bar).toEqual(123);
    });

    it("when called returns the requested value", function() {
        expect(fetchedBar).toEqual(123);
    });
});



describe('a spy, when configured to fake a return value', function() {
    var foo, bar, fetchedBar;

    beforeEach(function(){
        foo = {
            setBar: function(value) {
                bar = value;
            },
            getBar: function() {
                return bar;
            }
        };

        spyOn(foo, 'getBar').and.returnValue(745);

        foo.setBar(123);
        fetchedBar = foo.getBar();
    });

    it('tracks that the sky was called', function() {
        expect(foo.getBar).toHaveBeenCalled();
    });

    it("should not affect other functions", function() {
        expect(bar).toEqual(123);
    });

    it("when called returns the requested value", function() {
        expect(fetchedBar).toEqual(745);
    });
});



describe('a spy, when configured to fake a return value', function() {
    var foo, bar, fetchedBar;

    beforeEach(function(){
        foo = {
            setBar: function(value) {
                bar = value;
            },
            getBar: function() {
                return bar;
            }
        };

        spyOn(foo, 'getBar').and.callFake(function() {
            return 1001;
        });

        foo.setBar(123);
        fetchedBar = foo.getBar();
    });

    it('tracks that the sky was called', function() {
        expect(foo.getBar).toHaveBeenCalled();
    });

    it("should not affect other functions", function() {
        expect(bar).toEqual(123);
    });

    it("when called returns the requested value", function() {
        expect(fetchedBar).toEqual(1001);
    });
});


describe("A spy, when configured to throw an error", function() {
  var foo, bar;

  beforeEach(function() {
    foo = {
      setBar: function(value) {
        bar = value;
      }
    };

    spyOn(foo, "setBar").and.throwError("quux");
  });

  it("throws the value", function() {
    expect(function() {
      foo.setBar(123)
    }).toThrowError("quux");
  });
});
