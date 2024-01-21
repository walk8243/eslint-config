export const example = (foo: string, def: string = 'any', bar: string) => ({
	foo,
	def,
	bar,
});

export function foo () {
	var bar;
	let baz;
}

export const foo2 = (bar: string, baz : string, qux:string, qxx :string) =>
	`${bar} ${baz} ${qux} ${qxx}`;
