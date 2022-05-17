

let x = 0;
let score = 0;
let trust = 0;

function submit() {

    x = 0;
    score = 0;

    document.getElementById("popup2").style.visibility = "visible";
    let name = document.getElementById("name").value;
    let date = document.getElementById("date").value; //
    let delatnost = document.getElementById("delatnostt").value;//
    let dobitak = document.getElementById("dobitak").value;//
    let linkv = document.getElementById("linkv").value;//
    let racio = document.getElementById("racio").value;//

    let promena_del = document.getElementById("promenadelatnosti").checked;//
    let promena_vla = document.getElementById("promenavlasnika").checked;//
    let uredan = document.getElementById("uredan").checked;//



    if (2022 - date < 3 || racio < 50 || dobitak < 1 || uredan == false) {
        x = 1;
    } 



    if (name == '' || date == '' || delatnost == '' || dobitak == '' || linkv == '' || racio == '') {
        x = 2;
    } 


    // Racun 

    if (x == 0) {
        score += (2022 - date) * 50 - 2;
        dobitak = dobitak / 50

        if (delatnost == "Šumarstvo / Poljoprivreda / Ribarstvo") {
            dobitak = dobitak * 0.95;
        }
        if (delatnost == "Prerađivačka industrija") {
            dobitak = dobitak * 1.1;
        }
        if (delatnost == "Snabdevanje električnom energijom, gasom itd.") {
            dobitak = dobitak * 1.15;
        }
        if (delatnost == "Građevinarstvo") {
            dobitak = dobitak * 1.05;
        }
        if (delatnost == "Trgovina na veliko / Trgovina na malo") {
            dobitak = dobitak * 1.15;
        }
        if (delatnost == "Obrazovanje") {
            dobitak = dobitak * 1.2;
        }
        if (delatnost == "Poslovanje nekretninama") {
            dobitak = dobitak * 1.05;
        }
        if (delatnost == "Informisanje i komunikacija") {
            dobitak = dobitak * 1.1;
        }
        if (delatnost == "Saobraćaj i skladištenje") {
            dobitak = dobitak * 1.15;
        }
        score += dobitak;

        linkv = linkv / 20;
        score += linkv;


        if (racio < 100) {
            racio = 0.3;
        }
        if (racio >= 100 && racio < 150) {
            racio = 1;
        }
        if (racio > 150) {
            racio = 1.3;
        }

        score = score * racio;


        if (promena_del == true) {
            score = score * 0.80;
        }

        if (promena_vla == true) {
            score = score * 0.80;
        }
 

        score = score / 100
        score = Math.round(score)


        if (score < 100) {
            trust = "< 50%";
        }

        else {
            trust = "> 50%"
        }
    }









  


    if (x == 0) {
        document.getElementById("info").innerHTML = name + "<br>" + "Score: " + score + "</br>" + "Trust: " + trust;
    }

    if (x == 2) {
        document.getElementById("info").innerHTML = "Niste uneli trazene podatke.";
    }

    if (x == 1) {
        document.getElementById("info").innerHTML = "Korisnik ne moze da pogine kredit.";
    }
    
}











function bonitet() {
    document.getElementById("popup").style.visibility = "visible";
}

function done() {
    document.getElementById("popup").style.visibility = "hidden";
}

function remove() {
    document.getElementById("popup2").style.visibility = "hidden";
}



let sound = new Audio("media/sound.wav");

function soundd() {
    sound.play();

    document.getElementById("deda").style.width = "60%";

    setInterval(function () {document.getElementById("deda").style.width = "50%";}, 300);
}


function qr() {
    document.getElementById("popupqr").style.display = "block";
}

function closeqr() {
    document.getElementById("popupqr").style.display = "none";
}