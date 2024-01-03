import express from 'express';

export const app = express();

app.get('/', (req, res) => {
	res.send(func('bar', 'fuga', 1));
});

const func = (foo: string, _fuga: any, _hoge: number): string => {
  return 'Hello World';
};
