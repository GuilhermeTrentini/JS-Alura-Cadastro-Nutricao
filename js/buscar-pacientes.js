var botaoAdicionar = document.querySelector("#buscar-pacientes");

botaoAdicionar.addEventListener("click", function(){
    console.log("Buscando pacientes...");
    
    var xhr = new XMLHttpRequest();

    xhr.open("get", "http://api-pacientes.herokuapp.com/pacientes");

    xhr.addEventListener("load", function(){

        var erroAjax = document.querySelector("#erro-ajax");
        if(xhr.status == 200){
            erroAjax.classList.add("invisivel");
            var resposta = xhr.responseText;
            var pacientes = JSON.parse(resposta); //Lê arquivo JSON (string) e transforma em JS (array)

            pacientes.forEach(function(paciente){
                adicionaPacienteNaTabela(paciente);
            });
        }else{
            console.log(xhr.status);
            erroAjax.classList.remove("invisivel");
        }
    });

    xhr.send();
});