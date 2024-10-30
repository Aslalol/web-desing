let soma= (nam) => { 
    let resu=0;
    for (var i=0;i<nam.length;i++){
    resu+=nam[i];
 }
 return resu;
}


let num =[10,20,30,40,50];
console.log(soma(num));