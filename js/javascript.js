$(document).ready(function(){
    $("#phone").mask("(99) 99999-9999")
});

var prods = [
    {"id": 1, "name": "Bife com batata", "price": 30.0},
    {"id": 2, "name": "Coxa de frango Crocante", "price": 25.0},
    {"id": 3, "name": "Carne de Panela", "price": 22.0},
    {"id": 4, "name": "Farofa", "price": 10.0},
    {"id": 5, "name": "Salada", "price": 8.0},
    {"id": 6, "name": "Torresmo", "price": 12.0}
];



function calc(){
    var name = document.getElementById("name");
    var result = document.getElementById("result");
    var quantities = document.getElementsByName("quantity");

    result.innerHTML = "";
    result.innerHTML += `Caro <b>${name.value}</b><br><br>Seguem os dados do seu pedido.<br><br>O Seu pedido é:<br><ul>`;

    for (var prod of quantities){
        if (prod.value > 0){
            result.innerHTML += `<li>Prato: ${prods[prod.id - 1].name} - Preço unitário: ${prods[prod.id - 1].price} - Quantidade: ${prod.value} - Total: ${prods[prod.id - 1].price * prod.value}</li>`;
        }
    }

    result.innerHTML += `</ul>`;
}
