export class Foo {
	public readonly bar: string;
	
	constructor() {
		this.bar = 'baz';
		this.fuga = 'fuga';
	}
	
	private fuga: string;
	public get hoge() {
		return this.fuga;
	}
	private set hoge(value: string) {
		this.fuga = value;
	}

	protected walk() {
		this.hoge = 'hoge';
	}
	protected walk() {}
}

interface ButtonProps {
	onClick: () => void;
}

class Button implements ButtonProps {
	onClick = () => console.log('button!');
}

export { Button, ButtonProps };
