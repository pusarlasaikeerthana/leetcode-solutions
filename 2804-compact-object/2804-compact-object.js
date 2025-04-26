/**
 * @param {Object|Array} obj
 * @return {Object|Array}
 */

var compactObject = function(obj) {
    var result_arr = []
    console.log(obj)
    if(Array.isArray(obj)){
        console.log("array")
        console.log(obj.map(compactObject).filter(item => item || item === 0))
        return obj.map(compactObject).filter(Boolean)
       
    }

    if(typeof obj === "object" && obj !== null){

        const result = {};
        for (let key in obj) {
            const value = compactObject(obj[key]);
            if (value) {
                result[key] = value;  // Add to result if not falsy
            }
        }

        return result
    }

    // console.log(result_arr)
    return obj

};