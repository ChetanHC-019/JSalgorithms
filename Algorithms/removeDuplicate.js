// function removeDup(arr){
//     var exists={},outArr=[],elm

//   for(let i=0;i<arr.length;i++){
//     elm=arr[i];
//     if(!exists[elm]){
//        outArr.push(elm);
//       exists[elm]=true;
//     }
//   }
//   return  outArr;
// }

// console.log(removeDup([1,2,1,3,2,4]))


function findDuplicate(arr){
  let exists={}, outArr=[], elm
   for(let i=0;i<=arr.length;i++){
     elm=arr[i]
    if(!exists[elm]){
      outArr.push(elm);
      exists[elm]=true;
    }
   }
   return outArr
}

console.log(findDuplicate([1,2,3,4,2,5]))