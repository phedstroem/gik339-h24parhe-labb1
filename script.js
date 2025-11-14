
// Uppgift 2

console.log(mBike); // undefined
{
    console.log(mBike); // undefined
    var mBike = "Moutainbike"
    console.log(mBike); //Funkar
}
console.log(mBike); // funkar även utanför kodblocket

//console.log(lvgBike); // Error, lvgBike is not defined
{
    //console.log(lvgBike); // Error som ovan
    let lvgBike = "Landsvägscykel"
    console.log(lvgBike); // Funkar    
}
//console.log(lvgBike); // Error. Funkar inte utanför kodblock. "lvgBike is not defined."

//console.log(bmx); // Error, bmx is not defined
{
    //console.log(BMX); // Error, bmx is not defined
    const bmx = "Bmxcykel"
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

       const/let: Om jag placerar console.log();" före (både inom och utanför blocket) så får jag error.
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
console.log(NaN == NaN); // false
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
        
    2. Om ett uttryck står för sig själv i en tenerary operator eller inom paranteserna i
       en if-sats så utvärderas uttrycket om det är "truthy" eller "falsy". Efter det tolkas
       det som antingen true om "truthy" eller false om "falsy". Den tolkar altså truthy/falsy
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
       
    3. NaN: Representerar ett värde som är vad som helt, men INTE en siffra. Om man
       jämför NaN med NaN så är de dock aldrig samma värde.
       
       undefined: Är ett värde till en variabel som deklarerats men inte tilldelats ett värde.
       Som någon sorts standarndvärde(undefined) som js ger den.
       Det är ett specialvärde som är samma som sig själv i en jämförelse.    
       
       null: Är ett värde som är helt tomt. exempelvis let a = null; Variabeln a tildelas
       null och blir helt tom. Avsiktligt.

       Notering: Vid jämförelsen undefined == null får vi true pga att båda värdena ändå
       representerar inget värde, men med === blir det false då de är olika typer.  
       */