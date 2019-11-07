
    let bruttoToNetto = document.getElementById('bruttoToNetto');
    let nettoToBrutto = document.getElementById('nettoToBrutto');
    var title = document.getElementById('title');

    // to change the title of input and make the output invisible and reload value from preis to zero
    bruttoToNetto.addEventListener('click', function() {
        title.innerHTML = "Bruttobetrag (Preis ohne Mehrwertsteuer) in Euro<span class='star'>*</span>"
        output.style.opacity = "0"
        preis.value = "0";
        
    })
    // to change the title of input  and make the output invisible and reload value from preis to zero
    nettoToBrutto.addEventListener('click', function() {
        title.innerHTML = "Nettobetrag (Preis ohne Mehrwertsteuer) in Euro<span class='star'>*</span>"
         output.style.opacity = "0"
         preis.value = "0";
        
    })



function berechnen() {
    let nettoToBrutto = document.getElementById('nettoToBrutto');
    let wert1 = document.getElementById('wert1');
    let wert2 = document.getElementById('wert2');
    let preis = document.getElementById('preis') ;
    var output1 = document.getElementById('output1');
    var output2 = document.getElementById('output2');
    var titlenb = document.getElementById('titlenb');
    var output = document.getElementById('output');
    var nettoBetrag = document.getElementById('nettoBetrag')
    var bruttoBetrag = document.getElementById('bruttoBetrag')
   
    let brutto;
    let netto;
    let betrag;
 


 // check if the option is Netto to Brutto
    if(nettoToBrutto.checked) {
       
        // check if option 19% checked
        if(wert1.checked) {
            nettoBetrag.innerHTML = "Bruttobetrag"
            brutto = preis.value * 1.19;
            brutto= brutto.toFixed(2)
            output2.innerHTML = brutto + "€ ";
            betrag = brutto - preis.value;
            betrag = betrag.toFixed(2)
            output1.innerHTML = betrag + " €";
            output.style.opacity = "1"
            
        }
         // check if option 7% checked
        else {
            nettoBetrag.innerHTML = "Bruttobetrag"
            brutto = preis.value * 1.07;
            brutto = brutto.toFixed(2)
            output2.innerHTML = brutto + " €";
            betrag = brutto - preis.value;
            betrag = betrag.toFixed(2)
            output1.innerHTML = betrag + " €";
            output.style.opacity = "1"
        }
    }
    // check if the option is Brutto to Netto
    else {
         // check if option 19% checked
        if(wert1.checked) {

            nettoBetrag.innerHTML = "Nettobetrag"
            netto = preis.value /1.19;
            netto = netto.toFixed(2)
            output2.innerHTML = netto + " €";
            betrag = preis.value - netto;
            betrag = betrag.toFixed(2)
            output1.innerHTML = betrag + " €";
            output.style.opacity = "1"
        }
         // check if option 7% checked
        else {
         
            nettoBetrag.innerHTML = "Nettobetrag"
            netto = preis.value/1.07;
            netto = netto.toFixed(2)
            output2.innerHTML = netto + " €";
            betrag = preis.value - netto;
            betrag = betrag.toFixed(2)
            output1.innerHTML = betrag + " €";
            output.style.opacity = "1"
        }
    }
}

