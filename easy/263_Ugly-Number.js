// https://leetcode.com/problems/ugly-number/

var isUgly = function (n) {
  for (var p of [2, 3, 5]) while (n && n % p == 0) n /= p;
  return n == 1;
};
