function bubbleSort(arr){
  for(let i=0;i<=arr.length;i++){
     for(let j=0;j<=(arr.length-i-1);j++){
        var temp=arr[j];
         arr[j]=arr[j+1];
         arr[j+1]=temp
     }
  }
  console.log(arr)
}

bubbleSort([-3,0,3,4,10])
