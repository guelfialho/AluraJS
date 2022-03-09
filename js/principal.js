var titulo = document.querySelector(".titulo");
    titulo.textContent = "Aparecida Nutricionista"

var pacientes = document.querySelectorAll(".paciente");
        
    for(i = 0; i < pacientes.length; i++) {
        console.log(pacientes[i]);
            
        var paciente = pacientes[i];

        var tdPeso = paciente.querySelector(".info-peso");
        var peso = tdPeso.textContent;

        var tdAltura = paciente.querySelector(".info-altura");
        var altura = tdAltura.textContent;

        var tdImc = paciente.querySelector(".info-imc");

        var pesoValido = true;
        var alturaValido = true;

        if(peso <= 0 || peso >= 200){
            tdImc.textContent = "Peso inválido";
            pesoValido = false;
            paciente.classList.add("paciente-invalido");
        }

        if(altura <=0 || altura >= 3.0) {
            tdImc.textContent = "Altura inválida";
            alturaValido = false;
            paciente.classList.add("paciente-invalido");
        }

        if(pesoValido == true && alturaValido == true){
            var imc = peso / (altura * altura);
            tdImc.textContent = imc.toFixed(2);
        }
    }
        
titulo.addEventListener("click", mostraMensagem);

function mostraMensagem(){
    console.log("Eu fui clicado")
}
        
