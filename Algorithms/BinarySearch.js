const binarySearch = (array, target) => {
    let start = 0;
    let end = array.length - 1;
    while(start <= end) {
      let middle = Math.floor((start + end) / 2);
      if(target === array[middle]) {
        return console.log("Target was found at index " + middle);
      }
      if(target > array[middle]) {
        start = middle + 1;
      }
      if(target < array[middle]) {
        end = middle - 1;
      }
    //   else {
    //     console.log("Not Found this loop iteration. Looping another iteration.")
    //   }
    }
    console.log("Target value not found in array");
  }

  binarySearch([1,4,5,9,10,12,15],100)

// function binarySearch(array,key){
//     let start=0;
//     let end=array.length-1
//     while(start<=end){
//         let mid=Math.floor((start+end)/2)
//         if(array[mid]===key){
//            console.log(`the ${key} found in position ${mid}`)
//         }
//         else if(key>array[mid]){
//             start=mid+1
//         }
//         else{
//             end=mid-1
//         }
//     }
//     console.log(`cant find the key in the given array`)
// }

// binarySearch([1,5,9,10,13,15],10)