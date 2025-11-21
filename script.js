
// Uppgift 2

console.log(mBike); // undefined
{
    console.log(mBike); // undefined
    var mBike = "Moutainbike" // uppgift 2.2
    console.log(mBike); //Funkar
}
console.log(mBike); // funkar även utanför kodblocket

//console.log(lvgBike); // Error, lvgBike is not defined
{
    //console.log(lvgBike); // Error som ovan
    let lvgBike = "Landsvägscykel" // uppgift 2.2
    console.log(lvgBike); // Funkar    
}
//console.log(lvgBike); // Error. Funkar inte utanför kodblock. "lvgBike is not defined."

//console.log(bmx); // Error, bmx is not defined
{
    //console.log(BMX); // Error, bmx is not defined
    const bmx = "Bmxcykel" // uppgift 2.2
    console.log(bmx); // funkar
    console.log(mBike); // Funkar även här
}
//console.log(bmx); // Error, bmx is not defined

/* Reflektion uppgift 2
    1. var fungerar både inom blocket och utanför. Även inom andra block som i sista blocket exempeplvis.
       
       const/let fungerar lika angående block. De fungerar endast inom deras block. Inte utanför.

    2. var: Om jag placerar "console.log(mBike);" före (både inom och utanför blocket) så får jag en utskrift "undefined."
       INGET felmeddelande. 
       Placerar jag efter så (både inom och utanför blocket) så skriver den ut variabeln som den ska.

       const/let: Om jag placerar console.log(); före (både inom och utanför blocket) så får jag error.
       Ex. bmx is not defined. Det bryter programmet helt enkelt till skillnad mot var.
       Placerar jag efter deklarationen så fungerar det OM det ligger inom blocket. Utanför blocket så
       känner den inte av variabeln längre och det blir error och programmet avbryts. 
*/

/****************************************************************************************************************************/

// Uppgift 3

// == 
console.log(5 == 5);
console.log('5' == 5); // String och int. True för att den typomvandlar värdet.

// ===
console.log(5 === 5);
console.log('5' === 5); // String och int. False för att den INTE typomvandlar. Strikt jämförelse

// NaN, null, undefined
console.log(NaN === NaN); // false
console.log(null == undefined); // true
console.log(null === undefined); // false

console.log(undefined ? 'truthy': 'falsy'); // undefined är så falsy

/* Reflektion uppgift 3
    1.  Först provade jag: 5 == 5, det är ju då såklart samma (true). Båda är int.
        Sedan '5' == 5, trots att jag jämför en string med en int blir det samma true(),
        pga att den typovandlar när det är två ==. 5 är 5 helt enkelt oavsett olika variabeltyper..
        
        Sedan provade jag: 5 === 5, det är ju då också samma (true). Båda är int.
        Sedan '5' === 5, Här blir det annorlunda mot ovan, det blir false.
        pga att det gör en strikt jämförelse, den typomvandlar INTE int/string.

        NaN === NaN - false, se punkt 3.
        null == undefined - true, den typomvandlar och behnadlar dom lika
        null === undefined - false, strikt jämförelse därav false.
        
    2. Om ett uttryck står för sig själv i en tenerary operator eller inom paranteserna i
       en if-sats så utvärderas uttrycket om det är "truthy" eller "falsy". Efter det så tolkas
       det som antingen true om "truthy" eller false om "falsy". Den tolkar alltså truthy/falsy
       som respektive boolvärde i en if-sats exempelvis.
       Dessa är alla falsy värden:
       false,
       null,
       undefined,
       0,
       -0,
       NaN,
       ""/''
       ALLA andra värden och objekt är truthy. (Kap. Logical AND (&&))
       
    3. NaN: Representerar ett värde som är vad som helst, men INTE en siffra. Om man
       jämför NaN med NaN så är de dock aldrig samma värde.
       
       undefined: Är ett värde till en variabel som deklarerats men inte tilldelats ett värde.
       Som någon sorts standardvärde(undefined) som js ger den.
       Det är ett specialvärde som är samma som sig själv i en jämförelse.    
       
       null: Är ett värde som är helt tomt. exempelvis let a = null; Variabeln a tildelas
       null och blir helt tom. Avsiktligt.

       Notering: Vid jämförelsen undefined == null får vi true pga att båda värdena ändå
       representerar inget värde, men med === blir det false då de är olika typer.  
       */

       /**********************************************************************************************/

// Uppgift 4
//let name = "Petter" . Fungerar
// 1. Väljer att göra en funktionsdeklaration för att jag tycker det är enklast nu i början.
//console.log(name); // Error. Kan inte accessa 'name' innan initialization.
function greet(name) // 4.1
{
//let name = "Petter" .Error variabeln har redan blivit deklararerad.
console.log(name); // Här funkar det, men 'name' blir Anders. Notering: Om inte greet anropats så funkar det inte.
return "Hej " + name;
}
//console.log(name); // Error. Kan inte accessa 'name' innan initialization.
// 2. Testar att skriva ut direkt i console.log(), funkar fint.
console.log(greet("Anders")); // 4.2 

// 3.
let name = "Petter"
console.log(name); // Det fungerar men 'name' blir överstruket

/* Reflektion uppgift 4
    1. Funktionsdeklaration - 1. nyckelordet function som används för att skapa funktionen, 2. funktionsnamnet, 
                              3. (med ev parametrar.), 4. {funktionens innehåll}.
                              = function x(ev. parameter) {själva funktionen}
                              Kan nås innan den defineras i koden. Så länge den är definerad dvs.

       Funktionsuttryck - 1. Deklarera variabel, 2. tilldela den funktionen. 
                             = const x = function() {}. Först deklaration av x, sen tilldela x funktionen.
                            Kan INTE nås innan den definerats

        Arrowfunktioner - 1. Deklarera variabel, 2. Tilldela den parametrar (), 3. pil =>, 4. själva funktionen
                          i {}. 
                          = const x = (parametrar) => {funktion}.
                          Kan INTE nås innan den definerats.

    2. Med en funktionsdeklaration kan jag anropa den innan den är definerad i koden. Det gör att om jag deklarerar 
    funktionen på rad 25 så kan jag ändå anropa funktionen på rad 10 tex. Själklart efter också.

    Gällande både funktionsuttryck och arrowfunktioner går inte det. Du måste definera funktionen INNAN du kan 
    anropa den för att det ska fungera.  

    3. Ändrar jag 'name' längst ner på rad 116 så ändras bara utskriften på rad 117.
       Ändrar jag högst upp ovanför functionen ändras också bara utskriften på rad 117.
       Ändrar jag i funktikonens {} så blir det error. variabeln 'name' är redan deklarerad.
       Slutsatsats: Ändrar jag utanför funktionen så påverkar det bara utanför funktionen. 
       Innanför funktionen är den redan deklarerad och det går inte att ändra i funktionen.
       
    4. Parameter - Är vad som förväntas skickas in i en funktion. Parametrarna defineras när man
       skapar funkionen, ex function x(a,b). Här är parametrarna a och b.

       Variabel: - Är ett sparat namngett värde enkelt uttryckt. Du spar ett värde i en variabel.
       ex. const name = "Pär". Här är 'name' variabeln och som lagrar värdet "Pär"

       Argument - Det är värdena man skickar till funktionen när man anropar den. Ex med funktionen greet().
       console.log(greet("Anders"));. Här är "Anders" argumentet. 
    */ 

