console.log("---------------Marge Sort-----------------------");

function marge(left, right){
    let l =0 , r =0;
    result=[];
    while(l < left.length && r < right.length){
        result.push(left[l] < right[r] ? left[l++] : right[r++]);
    }
   
    return result.concat (left.slice(l), right.slice(r));
}

function margeSort(arr){
    if(arr.length == 1) return arr;
    let mid =  Math.floor(arr.length / 2);
    return marge(margeSort(arr.slice(0 , mid )) , margeSort(arr.slice(mid)));
}

let num = [56, 5, 9, -2, 1, 7, 3, 22, 11, 30, -10];

console.log(...margeSort(num));

num = margeSort(num);


console.log("---------------Binary Search-----------------------");

function binarySearch(arr , target){
    let l =0 , r = arr.length - 1;
    while(l <= r){
        let mid = Math.floor((l + r) / 2);
        if(arr[mid] == target) return `${target} has rank ${mid + 1} of array`;
        (arr[mid] > target ? r = mid - 1 : l = mid + 1);
    }
    return `${target} not Found`;
}

console.log(binarySearch(num, 3));
console.log(binarySearch(num, 56));
console.log(binarySearch(num, -10));
console.log(binarySearch(num, -20));
console.log(binarySearch(num, 70));
console.log(binarySearch(num, 6));

console.log("---------------DFS-----------------------");

let adj= [[1, 2], [3, 4], [5, 6], [7, 8], [9, 10],[],[],[],[],[],[]];
let vis=new Array(11).fill(0) , output =[];
function DFS(root){
    if(vis[root]) return;
    vis[root] = 1;
    output.push(root + 1);
    for(let u of adj[root]) DFS(u);
}

DFS(0);
console.log(...output);
