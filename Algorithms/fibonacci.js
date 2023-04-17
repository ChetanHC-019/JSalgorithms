// function fibonacci(n){
//     fibo=[0,1]
   
//     if(n<=2) return 1

//     for(let i=2;i<=n;i++){
//         fibo[i]=fibo[i-1]+fibo[i-2];
//     }
//     return fibo[n]
// }

// console.log(fibonacci(15))


// function fibonacci(n){
//     let fibo=[0,1];
//   if(n<=2) return 1
//   for(let i=2;i<=n;i++){
//     fibo[i]=fibo[i-1]+fibo[i-2];
//   }  
//   return fibo[n]
// }

// console.log(fibonacci(12))


// function fibonacci(n){
//     let fibo=[0,1];

//     if(n<=2) return 1

//     for(let i=2;i<=n;i++){
//       fibo[i]=fibo[i-1]+fibo[i-2];
//     }
//   return fibo[n]
// }

// console.log(fibonacci(10))

function isFibo(num){
  someting=[0,1]
  for(let i=2;i<=num;i++){
    someting[i]=someting[i-2]+someting[i-1]
  }
  for(var currindex=0;currindex<=num;currindex++){
    if(currindex%2==0)
      console.log(someting[currindex+""])
  }
// return someting
}

console.log(isFibo(12))

