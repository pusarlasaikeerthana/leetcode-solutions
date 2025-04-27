/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {

    var p = JSON.stringify(p)
    // console.log(p.split(","))
    var q = JSON.stringify(q)
    // console.log(q.split(","))
    // console.log(q)
    // console.log(p.split(",")===q.split(","))
    if(p == q){
        return true
    }
    return false
};