// function isPalindrome(str){
//    if(str==str.split('').reverse().join('')){
//     return true
//    }
//    else return false
// }

// console.log(isPalindrome("mohahom"))


function isPalindrome(str){
   var truestr=str.split('').reverse().join('')
   if(str===truestr){
      return true
   }
   else return false
}

console.log(isPalindrome("mohanahom")) 