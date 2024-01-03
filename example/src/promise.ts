export const obj = new Promise<number>(() => {
	return 1;
});
export const func = () => {
	return new Promise<string>(r => r('Hello World'));
};
