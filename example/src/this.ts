(function() {
    this.a = 0;
    baz(() => this);
})();

function foo() {
    this.bar = function () {
        this.a = 0;
        baz(() => this);
    };
}

export class Foo {
    a: number;
    constructor() {
        this.a = 0;
    }
}

function baz(cb: () => unknown) {
    cb();
}
