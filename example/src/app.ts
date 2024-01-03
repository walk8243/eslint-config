import express from 'express';

export const app = express();

app.get('/', (req, res) => {
	res.send('Hello World');
});

app.get('/promise', async (req, res) => {
	const body = await func('bar', 'fuga', 1);
	res.send(body);
});

const func = (foo: string, _fuga: any, _hoge: number): Promise<string> => {
  return Promise.resolve('Hello World');
};
