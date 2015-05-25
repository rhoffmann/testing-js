var carPrototype = {
    gas: function gas (amount) {
        amount = amount || 10;
        this.mph += amount;
        return this;
    },
    brake: function brake(amount) {
        amount = amount || 10;
        this.mph = ((this.mph - amount) < 0) ? 0 : this.mph - amount;
        return this;
    },
    color: 'pink',
    direction: 0,
    mph: 0
};

var car = function car(options) {
    return Object.assign(Object.create(carPrototype), options);
};

module.exports = car;
