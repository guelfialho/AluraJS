var titulo = document.querySelector(".titulo");
    titulo.textContent = "Aparecida Nutricionista"

var pacientes = document.querySelectorAll(".paciente");
        
    for(i = 0; i < pacientes.length; i++) {
                    
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
            var imc = calculaImc(peso,altura);
            tdImc.textContent = imc;
        }
    }
        
function calculaImc(peso,altura){
    var imc = 0;

    imc = peso / (altura * altura);
    
    return imc.toFixed(2);
}


