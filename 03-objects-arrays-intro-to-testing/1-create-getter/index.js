/**
 * createGetter - creates function getter which allows select value from object
 * @param {string} path - the strings path separated by dot
 * @returns {function} - function-getter which allow get value from object by set path
 */
export function createGetter(path) {
    const newArr = path.split('.');

    return function(obj) {
        for (const key of newArr) {
            if (obj === undefined || obj === null || !obj.hasOwnProperty([key])) {
                return undefined;
            }
            obj = obj[key];
        }
    return obj;
  }
}
