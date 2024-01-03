export const indexMap = (arr: string[]) => {
	return arr.reduce<Record<string, number>>((memo, item, index) => {
		memo[item] = index;
	}, {});
};

export const loggingArr = (arr: string[]) => {
	arr.forEach((item) => {
		console.log(item);
		return item;
	});
};
