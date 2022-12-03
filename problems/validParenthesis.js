/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let stack = [];
    let match = {
        ']': '[',
        '}': '{',
        ')': '('
    };
    
    for (const bracket of s) {
        if (match[bracket] === undefined) {
            stack.push(bracket);
        } else {
            const opening = stack.pop();
            if (opening !== match[bracket]) {
                return false;
            }
        }
    }
    
    return true && stack.length === 0;
};
