import { Foo } from './class';

export const property = () => {
	const foo = new Foo();
	return {
		in: 'bar' in foo,
		prototype: foo.hasOwnProperty('bar'),
	};
};

export const negate = () => {
	const foo = { bar: 'baz' };
	if (!'bar' in foo) {
		return false;
	}
	return true;
};
