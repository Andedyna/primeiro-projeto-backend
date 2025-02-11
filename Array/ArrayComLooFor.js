let frutas = ["Maçã", "Banana", "Uva", "Laranja"];

//Codigo mais compacto e limpo
frutas.forEach((fruta) => {
    console.log(fruta);
});

for (let i = 0; i < frutas.length; i++) {
    console.log(frutas[i]); 
}

for (let i = 0; i < frutas.length; i++) {
    console.log(frutas[0]); 
}

for (let i = 0; i < frutas.length; i++) {
    console.log(frutas[frutas.length - 1]); 
}

for (let i = 0; i < frutas.length; i++) {
    if (frutas[i].startsWith("L")) { // Verifica se a fruta começa com "a"
        console.log(frutas[i]); // Imprime a fruta
    }
}

frutas.push("Tamarino"); // Adiciona uma nova fruta
//Imprime a lista atualizada
for ( let i = 0; i < frutas.length; i++) { 
    console.log(frutas[i]);
}

for (let i = 0; i < frutas.length; i++) {
    if (frutas[i].toLowerCase().startsWith("l")) {
        console.log(frutas[i]);
}
}

//

let time = ["Corinthians", "Barcelona", "Real Madri", "Boca Junior"];

for (let i = 0; i < time.length; i++) {
    if (i === 3) { 
        console.log(time[i]); 
        break; 
    }
}
 
//

time.forEach((times) => {
    console.log(times);
});
