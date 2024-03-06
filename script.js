let totalPoints = 50;
// let coolPoints = 0;

function updatePoints() {
    document.getElementById("kulhetsmeter").innerHTML = "Kul-O-Meter:" + totalPoints;
}

function drive() {
    document.getElementById("driveButton").disabled = true
    let randomNum = Math.floor(Math.random() * 3);
    if (randomNum == 0) {
        document.getElementById("app").innerHTML = /*HTML*/`
    Du ser en person som står i veikanten. Hva gjør du?
    <button onclick="whoIsThere()">Se hvem det er</button>
    <button onclick="dontCare()">Kjør videre</button>`;
    }
    else if(randomNum == 1){
        document.getElementById("app").innerHTML =/*HTML*/ `
        Du stopper ved en bensinstajon for å fylle drivstoff.
        <button onclick="bensin()">Fyll bensin</button>
        <button onclick="diesel()">Fyll diesel</button>
        `
    }
    else if(randomNum == 2){
        document.getElementById("app").innerHTML =/*HTML*/ `
        Politiet har kontroll og vinker deg inn.
    En politimann kommer bort til deg og sier: License and registration, plz.
    <button onclick="politiEn()">Nei faen det ligger igjen hjemme</button>
    <button onclick="politiTo()">"Flash titsa/kuken"</button>
    <button onclick="politiTre()">Gi politimannen førerkort og vognkort</button>
        `

    }
}
//bensinstasjon
function bensin(){
    document.getElementById("app").innerHTML =/*HTML*/ `Du fylte bensin på bilen og kan kjøre videre.
    <button onclick="drive()">Continue Driving...</button>
    `

}

function diesel(){
    totalPoints = -1000000000000;
    document.getElementById("app").innerHTML = /*HTML*/`
    <h1>GAME OVER</h1>
    Du fylte på diesel og nå er bilen fucked.
    
    `
    updatePoints()
}

//politikontroll
function politiEn(){
    document.getElementById("app").innerHTML=/*HTML*/`
    Politimannen ber deg kjøre rett hjem og ta det med deg. Du får også en bot for å kjøre uten førerkort
    <button onclick="drive()">Continue Driving...</button>
    `
    totalPoints -= 20;
    updatePoints()
    winOrLose()
}
function politiTo(){
    document.getElementById("app").innerHTML=/*HTML*/`
    Alt ser ut som det skal her, kjør videre.
    <button onclick="drive()">Continue Driving...</button>
    `
}
function politiTre(){
    totalPoints = -10000;
    document.getElementById("app").innerHTML=/*HTML*/`
    <h1>GAME OVER</h1>
    Dette er ikke gyldig, gå ut av bilen og putt henda et sted jeg kan se dem.
    `
    updatePoints()
}

//restart game knapp
function restartGame(){
    totalPoints = 50;
    document.getElementById("driveButton").disabled=false
    document.getElementById("app").innerHTML= "";
    document.getElementById("answers").innerHTML="";
    updatePoints()
    winOrLose()
}

//kjøre videre uten å se hvem som står i veikanten
function dontCare() {
    document.getElementById("app").innerHTML = /*HTML*/`
    Du ignorerer personen og kjører videre. Dette er ikke kult.
    <button onclick="drive()">Continue Driving...</button>
    `
    totalPoints -= 5;
    updatePoints()
    winOrLose()
}

//Personer man møter på veien
function whoIsThere() {
    let randomPerson = Math.floor(Math.random() * 4);

    if (randomPerson == 0) {
        document.getElementById("app").innerHTML =/*HTML*/`
Du ser at personen er <b>Robin</b> han vinker til deg
<button onclick ="robinSvarEn()">Fin bart smexy.</button>
<button onclick ="robinSvarTo()">Er det på tide med en snus?</button>
<button onclick ="robinSvarTre()">Kan jeg låne penger?</button>
`;
    }

    if (randomPerson == 1) {
        document.getElementById("app").innerHTML = /*HTML*/`
Du ser at personen er <b>Govand</b> han ser surt på deg.
<button onclick="govSvarEn()">Hei</button>
<button onclick="govSvarTo()">Hade</button>
<button onclick="govSvarTre()">Faen</button>
`;

    }
    if (randomPerson == 2) {
        document.getElementById("app").innerHTML = /*HTML*/`
Du ser at personen er <b>Rune</b> han ser rart på deg.
<button onclick="runeSvarEn()">Oi du har rødt hår.</button>
<button onclick="runeSvarTo()">Halla du høye sexy mann! Hvordan går det?</button>
<button onclick="runeSvarTre()">HaR dU sPiLt 300 i bOwLiNg I dEt SiSte??</button>
`;

    }
    if (randomPerson == 3) {
        document.getElementById("app").innerHTML = /*HTML*/`
Du ser at personen er <b>Amando</b> han blikker deg sexy.
<button onclick="amaSvarEn()">Oi du er så kul.</button>
<button onclick="amaSvarTo()">Du er vell ikke med på en drink?</button>
<button onclick="amaSvarTre()">La oss ta en snus?</button>
`;
    }

}


//svar fra personer du møter
//Rune
function runeSvarEn() {
    document.getElementById("answers").innerHTML =/*HTML*/ `
    Det visste jeg ikke du...
    `
    totalPoints -= 10;
    updatePoints()
    winOrLose()
}
function runeSvarTo() {
    document.getElementById("app").innerHTML =/*HTML*/ `
    Hei du sexy person! Jeg har det fint, fet kjerre forresten!
    <button onclick="drive()">Continue Driving...</button>
    `
    document.getElementById("answers").innerHTML = "";
    totalPoints += 20;
    updatePoints()
    winOrLose()
}
function runeSvarTre() {
    document.getElementById("answers").innerHTML =/*HTML*/ `
    HueHueHueHueHueHueHueHueHueHueHueHueHueHueHue
    `
    totalPoints -= 10;
    updatePoints()
    winOrLose()
}

//Robin
function robinSvarEn() {
    document.getElementById("app").innerHTML =/*HTML*/ `
    Takk smexy!
    <button onclick="drive()">Continue Driving...</button>
    `
    document.getElementById("answers").innerHTML = "";
    totalPoints += 20;
    updatePoints()
    winOrLose()
}
function robinSvarTo() {
    document.getElementById("answers").innerHTML =/*HTML*/ `
    Er loada.
    `
    totalPoints -= 10;
    updatePoints()
    winOrLose()
}
function robinSvarTre() {
    document.getElementById("answers").innerHTML =/*HTML*/ `
    Nei.
    `
    totalPoints -= 10;
    updatePoints()
    winOrLose()
}

//Govand
function govSvarEn() {
    document.getElementById("answers").innerHTML = /*HTML*/`
    Heisann
    `
    totalPoints -= 10;
    updatePoints()
    winOrLose()
}
function govSvarTo() {
    document.getElementById("answers").innerHTML = /*HTML*/`
    Hade Hade
    `
    totalPoints -= 10;
    updatePoints()
    winOrLose()
}
function govSvarTre() {
    document.getElementById("app").innerHTML = /*HTML*/`
    Helvete
    <button onclick="drive()">Continue Driving...</button>
    `
    document.getElementById("answers").innerHTML = "";
    totalPoints += 20;
    updatePoints()
    winOrLose()
}

//Amando
function amaSvarEn() {
    document.getElementById("answers").innerHTML =/*HTML*/ `
    Takk du og!
    `
    totalPoints -= 10;
    updatePoints()
    winOrLose()
}
function amaSvarTo() {
    document.getElementById("app").innerHTML =/*HTML*/ `
    Seffølgelig er med hverdag
    <button onclick="drive()">Continue Driving...</button>
    `

    document.getElementById("answers").innerHTML = "";
    totalPoints += 20;
    updatePoints()
    winOrLose()
}
function amaSvarTre() {
    document.getElementById("answers").innerHTML =/*HTML*/ `
    Har en upperdecky
    `
    totalPoints -= 10;
    updatePoints()
    winOrLose()
}

function winOrLose() {
    
    if (totalPoints <= 0) {
        document.getElementById("answers").innerHTML= "";
        document.getElementById("app").innerHTML = /*HTML*/
                `<h1>GAME OVER</h1>
        Bilen din er <b>IKKE</b> kul`
    
        }
        else if (totalPoints >= 100) {
            document.getElementById("answers").innerHTML= "";
            document.getElementById("app").innerHTML = /*HTML*/
                `<h1>Gratulerer!</h1>
            Bilen din er den kuleste i hele verden! Alle du kjører forbi er supersjalu
            `
        } 
    }

