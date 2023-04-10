function isPrime(num){
  var divisor=2

  while(num > divisor){
    if(num % divisor ==0){
       return false
    }
    else
      divisor++
  }
  return true
}

console.log(isPrime(13)) 


//  function MyOddnums(num){
//   var devisor=2;
//    for(let i=2;i<=num;i++){
//        if(i%devisor!==0){
//         console.log(i)
//        }
      
//    }
// }

// MyOddnums(20)

function isPrime(n){
    divisor=2
    while(n>divisor){
        if(n%divisor==0){
            return false
        }
        else divisor++
    }
    return true
}

console.log(isPrime(6))
