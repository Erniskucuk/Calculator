//deklariranje displeja
let display = document.getElementById("display");
//deklarisanje svih tipki i pretvaranje u ARREY
let buttons = Array.from(document.getElementsByClassName("button"));
// dodavanje addEventListenera za svaku tiku na klik
buttons.map(button =>{
    button.addEventListener("click", (e) =>{
     //dodavanje dugmeta sa innertextom
     switch(e.target.innerText){
        //dodavanje slucaja posebnim tipkama
        case "C":
            display.innerText = " ";
            //sa break brisemo C sa displeya koje ostaje nakon sto ga pritisnemo
            break;
            // brisanje zadnjeg karaktera na displeju
        case "←":
            if(display.innerText){
                display.innerText = display.innerText.slice(0, -1);
            }
         
           break;

           //dodavanje skripte za racunarske operacije
        case "=":
            display.innerText = eval(display.innerText);
            break;

        default:
            //dodavanje texta tipke i ispisivanje na displej
            display.innerText += e.target.innerText;
            
     }
    });
});




