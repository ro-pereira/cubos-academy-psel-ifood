function solucao(precos) {
    let soma = 0
      let item = 0
      let menor = 0
      
      if (precos.length<5) {
        while (item < precos.length) {
          soma += precos[item]
          item++
        } 
          console.log(soma)
        } 
        else {
            while (item < precos.length) {
                soma += precos[item]
                item++
                if (item == 1) {
                    menor = precos[0]
                } else if (precos[item] < menor) {
                    menor = precos[item]
                }
            }
            console.log(soma - menor)
        }
    }  