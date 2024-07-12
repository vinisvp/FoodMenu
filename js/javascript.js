var prods = [
    {"id": 1, "name": "Bife com batata", "price": 30.0},
    {"id": 2, "name": "Coxa de frango Crocante", "price": 25.0},
    {"id": 3, "name": "Carne de Panela", "price": 22.0},
    {"id": 4, "name": "Farofa", "price": 10.0},
    {"id": 5, "name": "Salada", "price": 8.0},
    {"id": 6, "name": "Torresmo", "price": 12.0}
];

function calc(){
    quantities = document.getElementsByName("quantity");

    for (var prod of quantities){
        if (prod.value > 0){
            console.log(`${prods[prod.id - 1].name} - ${prods[prod.id - 1].price * prod.value}`)
        }
    }
}
