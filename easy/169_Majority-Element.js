// https://leetcode.com/problems/majority-element/description/

var majorityElement = function (nums) {
  const obj = {};

  for (let i = 0; i < nums.length; i++) {
    if (!obj[nums[i]]) obj[nums[i]] = 1;
    else obj[nums[i]]++;

    if (obj[nums[i]] > nums.length / 2) return nums[i];
  }
};
