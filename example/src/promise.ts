export const obj = new Promise<number>(() => {
	return 1;
});
export const func = () => {
	return new Promise<string>(r => r('Hello World'));
};

(async() => {
	Promise.resolve(1)
		.then(() => 'completed')
		.catch(() => 'failed');
})();

const arrowFunctionReturnsPromise = () => Promise.resolve('value');

function functionReturnsPromise() {
  return Promise.resolve('value');
}
