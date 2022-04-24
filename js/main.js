function consulta() {
    $.ajax ({
        url: "https://viacep.com.br/ws/62400000/json/",
        type : "GET",
        sucess : function(response) {
            console.log(response);
        }
    })
}