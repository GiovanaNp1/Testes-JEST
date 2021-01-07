function hello(params) {
    console.log("Bem vindo")
}

hello();

function pegarHoras(params) {
    var data = new Date();
    return data.getHours() <= 12? "Bom dia :D": data.getHours <= 18? "Boa tarde": "Boa noite";
}

console.log(pegarHoras());