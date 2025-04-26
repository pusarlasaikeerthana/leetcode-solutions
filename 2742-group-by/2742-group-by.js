/**
 * @param {Function} fn
 * @return {Object}
 */
Array.prototype.groupBy = function(fn) {
    let obj = {}
    this.forEach(elem => {
        const key = fn(elem);
        obj[key] ? obj[key].push(elem) : obj[key] = [elem]
    })
    return obj
};

/**
 * [1,2,3].groupBy(String) // {"1":[1],"2":[2],"3":[3]}
 */