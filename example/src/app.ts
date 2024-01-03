import express from 'express';
import './typeof';
import { func } from './promise';

export const app = express();

app.get('/', (req, res) => {
	res.send('Hello World');
});

app.get('/promise', async (req, res) => {
	const body = await func();
	res.send(body);
});
