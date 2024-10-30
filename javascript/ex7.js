let EncontraMaiorNum= (nam) => { 
    let resu=nam[0];
    for (var i=1;i<=nam.length;i++){
    if(resu<num[i])
    resu=num[i]
 }
 return resu;
}


let num =[10,20,30,40,50];
console.log(EncontraMaiorNum(num));