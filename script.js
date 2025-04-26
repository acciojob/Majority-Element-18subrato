let n = arr.length;
let mid = Math.floor(n/2);

let count = 0;
for(let t of arr){
	if(t > mid){
		count++;
	}
}

console.log(count);
