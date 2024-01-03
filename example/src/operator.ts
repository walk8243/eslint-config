(() => {
	let a = 10;
	const b = 20;

	a = a || b;
	console.log({ a, b }); // { "a": 10, "b": 20 }
})();
(() => {
	let a = 10;
	const b = 20;

	a ||= b;
	console.log({ a, b }); // { "a": 10, "b": 20 }
})();

(() => {
	let a = 10;
	const b = 20;

	a = a && b;
	console.log({ a, b }); // { "a": 20, "b": 20 }
})();
(() => {
	let a = 10;
	const b = 20;

	a &&= b;
	console.log({ a, b }); // { "a": 20, "b": 20 }
})();

(() => {
	let a = 10;
	const b = 20;

	a = a ?? b;
	console.log({ a, b }); // { "a": 20, "b": 20 }
})();
(() => {
	let a = 10;
	const b = 20;

	a ??= b;
	console.log({ a, b }); // { "a": 20, "b": 20 }
})();
