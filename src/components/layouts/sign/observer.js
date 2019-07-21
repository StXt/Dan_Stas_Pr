export class Observable {
    constructor() {
        this.observers = [];
    }

    subscribe(fn) {
        this.observers.push(fn);
    }

    unsubscribe(fn) {
        this.observers = this.observers.filter(
            subscriber=>subscriber !== fn
        )
    }

    notify(data) {
        this.observers.forEach(subscriber => subscriber.notify(data))
    }
}

export class Observer {
    constructor(behavior) {
        this._behavior = behavior || null;
    }

    notify(msg) {
        this._behavior(msg)
    }

    set behavior(func) {
        this._behavior = func;
    }
}