import {Observable, Observer} from './observer';

describe("observable testing", () => {

    it('can subscribe on observable', ()=>{
        let observable;
        let func;
        beforeEach(() => {
            func = function () {
                alert(123);
            }
            observable = new Observable();
        });

        expect(observable.subscribe(func)).toContain(func);
    });

    it('can unsubscribe on observable', ()=>{
        let observable;
        let func;

        beforeEach(() => {
            func = function () {
                alert(123);
            }
            observable = new Observable();
            observable.subscribe(func);
        });

        expect(observable.unsubscribe(func)).not.toContain(func);
    });
});