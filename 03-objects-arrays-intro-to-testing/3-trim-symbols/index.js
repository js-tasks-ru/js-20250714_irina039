/**
 * trimSymbols - removes consecutive identical symbols if they quantity bigger that size
 * @param {string} string - the initial string
 * @param {number} size - the allowed size of consecutive identical symbols
 * @returns {string} - the new string without extra symbols according passed size
 */
export function trimSymbols(string, size) {
    if (!string || size === 0) return '';
    if (size === undefined) return string;
    
    let newStr = '';
    let count = 0;
    let prevChar = '';
    for (const char of string) {
        if (prevChar === char) {
            if (count < size) {
                newStr += char;
                count ++;
            }
        } else {
            prevChar = char;
            newStr += char;
            count = 1;
        }
    }
  
  return newStr;
}
