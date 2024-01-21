export const indexMap = (arr: string[]) => {
	return arr.reduce<Record<string, number>>((memo, item, index) => {
		memo[item] = index;
	}, {});
};

export const loggingArr = (arr: string[]) => {
	arr.forEach((item) => {
		return item;
	});
};

(() => {
	Array();
	Array(0, 1, 2);
})();

const array: string[] = ['a', 'b', 'c'];
array.sort();
array.sort((a, b) => a.localeCompare(b));
