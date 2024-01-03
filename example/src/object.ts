import { Foo } from './class';

export const property = () => {
	const foo = new Foo();
	console.log('[foo.bar]', 'bar' in foo);
	console.log('[hasOwnProperty]', foo.hasOwnProperty('bar'));
};

export const negate = () => {
	const foo = { bar: 'baz' };
	if (!'bar' in foo) {
		console.log('foo.bar is not defined');
	}
};
