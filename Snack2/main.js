/*Snack2 
Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse
proprietà: nome, punti fatti, falli subiti.

Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
Generare numeri random al posto degli 0 nelle proprietà:
Punti fatti e falli subiti.

Infine usando la destrutturazione creiamo un nuovo array i cui elementi
 contengono solo nomi e falli subiti e stampiamo tutto in console. */




 // ARRAY
let team = [
    
    {
        nome: 'Napoli',
        puntiFatti: 0,
        falliSubiti: 0
    },

    {
        nome: 'Juve',
        puntiFatti: 0,
        falliSubiti: 0
    },

    {
        nome: 'Barcellona',
        puntiFatti: 0,
        falliSubiti: 0
    },

    {
        nome: 'RealMadrid',
        puntiFatti: 0,
        falliSubiti: 0
    }
];

console.log(team);

// NUMERI RANDOM DA INSERIRE NELLE PROPRIETA' VUOTE

let NewTeam = [0];

for (let i = 0; i < team.length; i++){

    // INSERISCO I NUM RANDOM NEGLI ELEMENTI
    team[i].puntiFatti = Math.floor(Math.random() * 3) +1;
    team[i].falliSubiti = Math.floor(Math.random() * 3) +1;

    // DESTRUCTURING
    // NEL NUOVO ARRAY INSERISCO SOLO DUE PROPRIETA'
    let {nome, falliSubiti} = team[i];
    NewTeam.push({nome, falliSubiti});
    // STAMPO 
    console.log(`${nome} ha subito ${falliSubiti} falli!`);

}