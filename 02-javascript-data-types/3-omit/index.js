/**
 * omit - creates an object composed of enumerable property fields
 * @param {object} obj - the source object
 * @param {...string} fields - the properties paths to omit
 * @returns {object} - returns the new object
 */
export const omit = (obj, ...fields) => {
    const newArr = Object.entries(obj);
    return newArr.reduce((accumulator, current) => {
        let [key, value] = current;
        if ( (fields.includes(key)) != true ) accumulator[key] = value;
        return accumulator;
    }, {});
};
