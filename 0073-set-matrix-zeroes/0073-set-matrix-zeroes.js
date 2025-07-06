/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */

var setZeroes = function(matrix) {
    const rows = matrix.length, cols = matrix[0].length;
    const row0 = new Set(), col0 = new Set();
    
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (matrix[i][j] === 0) {
                row0.add(i);
                col0.add(j);
            }
        }
    }
    
    for (let r of row0) {
        for (let j = 0; j < cols; j++) {
            matrix[r][j] = 0;
        }
    }
    
    for (let c of col0) {
        for (let i = 0; i < rows; i++) {
            matrix[i][c] = 0;
        }
    }

    return matrix
};