"use strict";
// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
const distance = document.getElementById("distance").value;
const age =  document.getElementById("age").value;
const name = document.getElementById("name").value;
const ticket = document.getElementById("ticket");
let ticketPrice = 0;

// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65.

const generate = document.getElementById("generate");
generate.addEventListener("click", 
    function()  {
        // Il programma leggerà dal form il numero di chilometri che vuole percorrere, il nome e la fascia d'età.
        const name = name.value;
        const distance = Number(distance.value);
        const age = age.value; // minorenne, maggiorenne, over
        // Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
        // il prezzo del biglietto è definito in base ai km (0.21 € al km)
        // va applicato uno sconto del 20% per i minorenni
        // va applicato uno sconto del 40% per gli over 65.
        let ticketPrice = distance * 0.21;
        let ticketType = "Biglietto Standard";

        if( age === "minorenne" ) {
            ticketPrice -= ticketPrice * 0.2;
            ticketType = "Biglietto scontato del 20%";
        } else if( age === "over" ) {
            ticketPrice -= ticketPrice * 0.4;
            ticketType = "Biglietto scontato del 40%";
        }
    }
    );
console.log(`${ticketPrice.toFixed(2)}€`);
