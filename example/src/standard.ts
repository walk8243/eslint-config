console.log("Try npm run lint/fix!");

const longString = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ut aliquet diam.';

const trailing = 'Semicolon'

			const why={am:'I tabbed?'};

const iWish = "I didn't have a trailing space..."; 

const sicilian = true;;

const vizzini = (!!sicilian) ? !!!sicilian : sicilian;

const re = /foo   bar/;
const ure = /^[👍]$/;

var x;

export function doSomeStuff(withThis: string, andThat: string, andThose: string[]) {
    if(!Boolean(andThose.length)) {return false;}
    console.log(withThis);
    console.log(andThat);
    console.dir(andThose);
    console.log(longString, trailing, why, iWish, vizzini, re, ure);
    return;
}

const nonNamedFunction = function (a: string, b: string): any {
	return a + b;
}

export const arrowFunction = (...args: string[]): string => args.join('');

export const noUsedArgs = (foo: string, _fuga: any, _hoge: number): Promise<string> => {
    return Promise.resolve('Hello World');
};
