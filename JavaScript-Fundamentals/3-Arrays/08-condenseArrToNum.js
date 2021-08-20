function condense(nums) {
  let i = 0;  
  while (nums.length > 1 ) {
    while(i<nums.length-1) {
      nums[i] = nums[i] + nums[i+1];    
      i++;
    }
    nums.length=i
    i=0;
  }
  console.log(nums[0]);
}
condense([2, 10, 3])
condense([5, 0, 4, 1, 2])
condense([1])