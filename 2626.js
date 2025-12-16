/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function(nums, fn, init) {
    let val = init;
    
    for (let i = 0; i < nums.length; i++) {
        val = fn(val, nums[i]);
    }
    
    return val;
};
console.log(
  reduce([1,2,3,4], (acc, curr) => acc + curr, 0)
); 

console.log(
  reduce([1,2,3,4], (acc, curr) => acc + curr * curr, 100)
); 

console.log(
  reduce([], (acc, curr) => 0, 25)
);
