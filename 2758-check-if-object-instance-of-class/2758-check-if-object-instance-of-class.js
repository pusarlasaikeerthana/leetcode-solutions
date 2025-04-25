/**
 * @param {*} obj
 * @param {*} classFunction
 * @return {boolean}
 */
var checkIfInstanceOf = function(obj, classFunction) {

    if (obj === undefined || obj === null || classFunction === undefined ||     classFunction === null) {
        return false;
    }

    // Traverse the prototype chain of obj and check if classFunction is in the chain
    let proto = Object.getPrototypeOf(obj);
    while (proto !== null) {
        if (proto.constructor === classFunction) {
            return true;
        }
        proto = Object.getPrototypeOf(proto);
    }
    
    return false;
};

/**
 * checkIfInstanceOf(new Date(), Date); // true
 */