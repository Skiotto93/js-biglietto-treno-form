"use strict";
// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.

const ticket = document.getElementById("ticket");

// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65.

const btngenerate = document.getElementById("generate");
btngenerate.addEventListener('click', 
    function()  {
        // Il programma leggerà dal form il numero di chilometri che vuole percorrere, il nome e la fascia d'età.
        const name = document.getElementById('name').value;
        const distance = Number(document.getElementById('distance').value);
        const age =  document.getElementById('age').value; // minorenne, maggiorenne, over
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
        console.log(ticketPrice);
    }
    );
