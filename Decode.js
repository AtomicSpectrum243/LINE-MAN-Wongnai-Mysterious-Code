var encodedStringAtoB = 'aWFuZ25vVzpOQU06RU5JTDp0YTpzdTpuaW9K';
var decodedStringAtoB = atob(encodedStringAtoB);

const newStr = decodedStringAtoB.split('');
console.log(newStr.reverse().join(''));

//Ans = "Join:us:at:LINE:MAN:Wongnai"