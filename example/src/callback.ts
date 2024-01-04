const foo = (callback: (bar: string) => unknown) => {
	callback('bar');
};

Object.setPrototypeOf(foo, { prefix: 'Hey' });

foo(function(bar) {
	return `Hello ${bar}!`;
});
foo((bar) => `Hello ${bar}!`);

foo((bar) => {
	const prefix: string = this?.prefix ?? 'Hello';
	return `${prefix} ${bar}!`;
});
foo(function(_bar) {
	return this.prefix;
});
