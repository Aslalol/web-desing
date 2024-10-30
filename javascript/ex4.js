let impar = (nam) => {
    let resu = [];
    let cont=0;
    for (let i = 0; i < nam.length; i++) {
        if (nam[i] % 2 !== 0)
        {
            cont++;
            resu[cont] = nam[i];
        }
    }
    return resu;
}

let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(impar(num));