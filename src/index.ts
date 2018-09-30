export function sheetbase_polyfill_example1(): void {
	var obj1 = {a: 1, b: 2};
	var obj2 = {c: 3};
	var obj3 = Object.assign(obj1, obj2);
	Logger.log(obj3);
}
