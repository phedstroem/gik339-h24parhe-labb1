
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
