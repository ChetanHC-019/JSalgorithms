function reverse(str){
    var rtnstr='';
    for(var i=str.length-1;i>=0;i--){
        rtnstr+=str[i]
    }
    return rtnstr
}

console.log(reverse('hello hii how r u'))

function reverse(str){
    
   if(!str || str.length<2) return str
    return str.split('').reverse().join('')
}

console.log(reverse("m"))


