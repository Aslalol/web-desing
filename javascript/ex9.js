let endereco = {
    "rua": "Nadir Vieira",
    "num": 110,
    "bairro": "Centro",
    "cidade": "Chapel of High"
}


for (let loc in endereco) {
    console.log(`${loc}: ${endereco[loc]}`); 
}
