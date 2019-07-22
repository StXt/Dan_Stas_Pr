import {Observable} from './observer';

describe("Observable", () => {
    let observable;
    let func;
    let value;

    beforeEach(() => {
        func = function () {
            alert(123);
        };
        observable = new Observable();
    });

    it('can subscribe on observable', () => {
        observable.subscribe(func);
        expect(observable.observers).toContain(func);
    });

    it('should unsubscribe func', () => {
        observable.subscribe(func);
        observable.unsubscribe(func);
        expect(observable.observers).not.toContain(func);
    });

    it('should notify observers', () => {
        value = 4;
        func = function (value) {
            value = value + 1;
            return value;
        };

        observable.subscribe(func);
        observable.notify(value);
        expect(value).toEqual(5);
    });
});