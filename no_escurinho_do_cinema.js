function solucao(obj) {
    if (obj.temIngresso) 
        if (obj.idade <= obj.censura && !obj.estaComPais) {
                 console.log("ACESSO NEGADO"); 
             } else if (obj.temCarteirinha || obj.idade < 18) {
                console.log("MEIA")
                 } else {
                 console.log("INTEIRA")            
    } else {
        console.log("ACESSO NEGADO")
    }
}