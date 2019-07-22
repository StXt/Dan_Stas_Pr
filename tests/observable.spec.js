import {Observable} from '../src/components/layouts/sign/observer';

describe("Observable", () => {
    let observable;
    let func;
    let observer;

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
        value = 'hi';
        observer = jasmine.createSpy('observer');

        observable.subscribe(observer);
        observable.notify(value);
        expect(observer).toHaveBeenCalled();
    });
});