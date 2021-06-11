function solucao(letra, palavras) {
    resultado = 0;
   for (let item of palavras) {

    if (item[0] !== letra)
    resultado++;
}
   console.log(resultado)
}