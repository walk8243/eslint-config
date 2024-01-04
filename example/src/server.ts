import http from 'node:http';
import { app } from './app';

let port = 3000;

const server = http.createServer(app);
server.listen(port, () => {
	const address = server.address();
	if (address === null) {
		return;
	}
	console.log('Server is listening on port 3000');
	console.log('Browser access to http://localhost:3000/');
});

process
	.on('SIGINT', () => {
		server.close();
	})
	.on('SIGTERM', () => {
		server.close();
	});
