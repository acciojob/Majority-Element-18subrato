let arr = [2,1,2];
let n = arr.length;
let mid = Math.floor(n/2);
function element(nums){
	for(let i=0;i<n;i++){
		if(map.has(nums[i])){
			let c = map.get(nums[i]);
			if(c > mid){
				return nums[i];
			}
		} else {
			map.set(nums[i],1);
		}
	}
}

console.log(element(arr));