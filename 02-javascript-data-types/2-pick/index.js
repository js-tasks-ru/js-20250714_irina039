/**
 * pick - Creates an object composed of the picked object properties:
 * @param {object} obj - the source object
 * @param {...string} fields - the properties paths to pick
 * @returns {object} - returns the new object
 */
export const pick = (obj, ...fields) => {
    const newArr = Object.entries(obj);
    return newArr.reduce((accumulator, current) => {
        let [key, value] = current;
        if ( (fields.includes(key)) == true ) accumulator[key] = value;
        return accumulator;
    }, {});
};
