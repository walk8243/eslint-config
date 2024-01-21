import { Foo } from './class';
import type { ButtonProps } from './class';

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

export const clickButton = ({ props }: { props: ButtonProps }) => {
	props.onClick();
};

let TAX = 0.25;
const item = 1000;
((price: number) => price * (1 + TAX))(item);

const x = Bar.BAR;

enum Bar {
  BAR,
}

const obj = { a: 'a' };
const a: string = obj.a;
const b = ['x'];
const y = b[0];

export {};
