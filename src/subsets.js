var subsets = (nums) => {
  nums.sort((a, b) => a - b);

  return dfs(nums);
};

var dfs = (nums, level = 0, set = [], subset = []) => {
  subset.push(set.slice());

  for (let i = level; i < nums.length; i++) {
    backTrack(nums, i, set, subset);
  }

  return subset;
};

const backTrack = (nums, i, set, subset) => {
  set.push(nums[i]);
  dfs(nums, i + 1, set, subset);
  set.pop();
};

module.exports = subsets;
