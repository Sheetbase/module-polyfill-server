/**
 * 
 * Name: @sheetbase/polyfill-server
 * Description: Es6 shim for Google apps script.
 * Version: 0.35.3
 * Author: Sheetbase
 * Homepage: https://sheetbase.net
 * License: MIT
 * Repo: https://github.com/sheetbase/module-polyfill-server.git
 *
 */

export function sheetbase_polyfill_example1(): void {
	var obj1 = {a: 1, b: 2};
	var obj2 = {c: 3};
	var obj3 = Object.assign(obj1, obj2);
	Logger.log(obj3);
}
