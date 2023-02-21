const utenteNome = prompt("Qual è il tuo nome?");

const utenteCognome = prompt("Qual è il tuo cognome?");

let utenteColorePreferito = prompt("Inserisci il tuo colore preferito");

let utenteNumeroPreferito = prompt("Inserisci il tuo numero preferito");

console.log(utenteCognome);

document.getElementById("password").innerHTML =
`
    La password meno sicura che tu possa usare è:
    ${utenteNome}${utenteCognome}${utenteColorePreferito}${utenteNumeroPreferito}
`;