export interface I1 {
	func(arg: string): number;
}

export interface I2 {
	func: (arg: string) => number;
}

export type T = {
	func: (arg: boolean) => void;
};
