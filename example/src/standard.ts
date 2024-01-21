console.log("Try npm run lint/fix!");

const longString = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ut aliquet diam.';

const trailing = 'Semicolon'

const why = { am: 'I tabbed?' };

const iWish = "I didn't have a trailing space...";

const sicilian = true;;

const vizzini = (!!sicilian) ? !!!sicilian : sicilian;

const re = /foo   bar/;
const ure = /^[👍]$/;

var x;

export function doSomeStuff(withThis: string, andThat: string, andThose: string[]) {
    if (!Boolean(andThose.length)) { return {}; }
	return {
		withThis,
		andThat,
		andThose,
		longString,
		trailing,
		why,
		iWish,
		vizzini,
		re,
		ure,
	};
}

const nonNamedFunction = function (a: string, b: string): any {
	return a + b;
};

export const arrowFunction = (...args: string[]): string => args.join('');

export const noUsedArgs = (foo: string, _fuga: any, _hoge: number): Promise<string> =>
	Promise.resolve('Hello World');

export const defaultArgs = (a: number, b?: number, c: number) => a + (b ?? 0) + c;

() => {
	return 0;
};

(() => {
	if (vizzini) { }

	Object();
	new Object();
	Object('foo');
	(Object: object) => new Object();

	'\"';
	'\e';
	/\@/;
})();
