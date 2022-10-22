"use strict";
// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
const km = document.getElementById("distance").value;
const age =  document.getElementById("age.ut").value;

// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
let price = km * 0.21;

// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65.

const genera = document.getElementById("genera");
genera.addEventListener('click', 
    function(){
        if( age < 18 ) {
            // price = price - price * 0.2;
            price -= price * 0.2;
            
        } else if( age >= 65 ) {
            // price = price - price * 0.4;
            price -= price * 0.4;
            
        }
    }
)
console.log(`${price.toFixed(2)}€`);