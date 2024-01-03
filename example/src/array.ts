export const indexMap = (arr: string[]) => {
	return arr.reduce<Record<string, number>>((memo, item, index) => {
		memo[item] = index;
	}, {});
};
