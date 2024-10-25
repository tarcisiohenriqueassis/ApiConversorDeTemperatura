
function converteTemperatura(temperatura, conversor){
    
    let resultado;

    if(conversor == 'C'){
        
        resultado = converteParaCelsius(temperatura)+' Graus';
    }
    else if(conversor == 'F'){

        resultado = converteParaCelsius(temperatura)+' Farenhait';
    }

    return resultado;
};

function converteParaFarenrait(celsius){
   
    let fahrenheit = (celsius * 1.8) + 32 ;
    
    return fahrenheit;
};

function converteParaCelsius(fahrenheit){
  
    let celsius = (fahrenheit - 32) / 1.8 ;
    
    return celsius;
};

/*function validaConversor(temperatura){
    let resultado;
    
    if(NaN(temperatura)){
        return resultado = false;
    }
    else{
        return resultado = true;
    }
    return resultado;
}

*/

exports.converteTemperatura = converteTemperatura;
exports.converteParaCelsius = converteParaCelsius;
exports.converteParaFarenrait = converteParaFarenrait;
