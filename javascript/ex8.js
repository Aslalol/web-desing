let produto = {
    "nome": "pão",
    "preço": 0.20,
    "quantia": 10,
    CalcTotal: function() {
        return this.preço * this.quantia;
}
}

console.log(produto.CalcTotal());