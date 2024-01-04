(() => {
	let a = 10;
	const b = 20;

	a = a || b;

	// { "a": 10, "b": 20 }
	return a;
})();
(() => {
	let a = 10;
	const b = 20;

	a ||= b;
	
	// { "a": 10, "b": 20 }
	return a;
})();

(() => {
	let a = 10;
	const b = 20;

	a = a && b;
	
	// { "a": 20, "b": 20 }
	return a;
})();
(() => {
	let a = 10;
	const b = 20;

	a &&= b;
	
	// { "a": 20, "b": 20 }
	return a;
})();

(() => {
	let a = 10;
	const b = 20;

	a = a ?? b;
	
	// { "a": 20, "b": 20 }
	return a;
})();
(() => {
	let a = 10;
	const b = 20;

	a ??= b;
	
	// { "a": 20, "b": 20 }
	return a;
})();
