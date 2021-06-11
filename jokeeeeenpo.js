function solucao(joao, andre) {
    if (joao === "PAPEL" && andre === "PEDRA") {
        console.log ("JOAO"); }
    if (andre === "PAPEL" && joao === "PEDRA"){
        console.log ("ANDRE");}

    if (joao === "PEDRA" && andre === "TESOURA") {
        console.log ("JOAO"); }
    if (andre === "PEDRA" && joao === "TESOURA") {
        console.log ("ANDRE"); }
    if (joao === "TESOURA" && andre === "PAPEL") {
        console.log ("JOAO"); }
    if (andre === "TESOURA" && joao === "PAPEL") {
        console.log ("ANDRE"); }
    if (joao === andre) {
        console.log("EMPATE");
    }

}