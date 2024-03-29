const stageIds = ["rest", "StopTimer", "reloadPage",
  "stage001A", "stage001B", "stage001C", "stage001D", "stage001E",
  "stage002A", "stage002B", "stage002C",
  "stage003A", "stage003B", "stage003C", "stage003D",
  "stage004A", "stage004B",
  "stage005",
  "stage006A", "stage006B",
  "stage007A", "stage007B", "stage007C",
  "stage008A", "stage008B", "stage008C", "stage008D",
  "stage009A",
  "stage001.5A", "stage001.5B", "stage001.5C", "stage001.5D",
  "stage003.5A", "stage003.5B", "stage003.5C",
];

function hideElements() {
  stageIds.forEach((id) => {
    document.getElementById(id).style.display = "none";
  });
}

let Seconds = 0;
let Minutes = 0;
let Hours = 0;

let displaySeconds = 0;
let displayMinutes = 0;
let displayHours = 0;

let interval = null;
let status = "parado";


//stopWatch function
function stopWatch(){
    Seconds++;

    //if(uSeconds/99 ===1 ){ uSeconds = 0; Seconds++; }
    if(Seconds/60 ===1 ){ Seconds = 0; Minutes++; }
    if(Minutes/60 ===1 ){ Minutes = 0; Hours++; }

    //if(uSeconds < 10) { displayuSeconds  = "0" +  uSeconds.toString() } else { displayuSeconds =  uSeconds}
    if(Seconds < 10) { displaySeconds  = "0" +  Seconds.toString() } else { displaySeconds =  Seconds}
    if(Minutes < 10) { displayMinutes = "0" + Minutes.toString() } else { displayMinutes = Minutes}
    if(Hours < 10) { displayHours = "0" + Hours.toString() } else { displayHours = Hours}

    document.getElementById("display").innerHTML =`<p>${displayHours}:${displayMinutes}:${displaySeconds}</p>`; //<span>${displayuSeconds}</span>

    setInterval(function() {document.title = displayHours + ":" + displayMinutes + ":" + displaySeconds}, 1000);
}

function StartPause(){
    document.getElementById("StopTimer").style.display=null;
    if (status === "parado") {
        interval = window.setInterval(stopWatch, 1000);
        document.getElementById("StartPause").innerHTML="Pausar";
        document.getElementById("rest").style.display="none";
        status = "iniciado";
        setInterval(function() {document.title = displayHours + ":" + displayMinutes + ":" + displaySeconds}, 1000);
    } else {
        window.clearInterval(interval);
        document.getElementById("StartPause").innerHTML="Continue";
        document.getElementById("rest").style.display=null;
        status = "parado";
    }
}

window.onkeydown = function(event){
    if(event.keyCode === 32) {
        event.preventDefault();
        document.getElementById("StartPause").click(); //This will trigger a click on the first <a> element.
    }
};

function StopTimer(){
    window.clearInterval(interval)
    document.getElementById("display").innerHTML = "00:00:00";
    document.getElementById("StartPause").style.display="none";
    document.getElementById("StopTimer").style.display="none";
    document.getElementById("reloadPage").style.display=null;
    document.getElementById("rest").style.display="none";

    if(Minutes < 1){
        document.getElementById("fim").innerHTML = "Seu aventureiro nem saiu de casa ainda."}
    else{document.getElementById("fim").innerHTML = "Parabéns, sua jornada durou "+displayHours+":"+displayMinutes+":"+displaySeconds;}

    status = "parado";
}

function reloadPage(){
    window.location.reload();
}

function Stage001() {
  hideElements();
  if (Minutes >= 1) {
    const randomStage001 = (min, max) =>
      Math.floor(Math.random() * (max - min + 1) + min);
    console.log(randomStage001(1, 5));

    if (randomStage001(1, 5) == 1) {
      document.getElementById("stage001E").style.display = null;
    } else if (randomStage001(1, 5) == 2) {
      document.getElementById("stage001B").style.display = null;
    } else if (randomStage001(1, 5) == 3) {
      document.getElementById("stage001C").style.display = null;
    } else if (randomStage001(1, 5) == 4) {
      document.getElementById("stage001D").style.display = null;
    } else {
      document.getElementById("stage001A").style.display = null;
    }
  }
}

function Stage001b() {
  hideElements();
  if (Minutes >= 1 & Minutes <2) {
    const randomStage0015 = (min, max) =>
      Math.floor(Math.random() * (max - min + 1) + min);
    console.log(randomStage0015(1, 4));

    if (randomStage0015(1, 4) == 1) {
      document.getElementById("stage001.5D").style.display = null;
    } else if (randomStage0015(1, 4) == 2) {
      document.getElementById("stage001.5C").style.display = null;
    } else if (randomStage0015(1, 4) == 3) {
      document.getElementById("stage001.5B").style.display = null;
    } else {
      document.getElementById("stage001.5A").style.display = null;
    }
  }
}

function Stage002() {
  hideElements();
  if (Minutes >= 2) {
    const randomStage002 = (min, max) =>
      Math.floor(Math.random() * (max - min + 1) + min);
    console.log(randomStage002(1, 3));

    if (randomStage002(1, 3) == 1) {
      document.getElementById("stage002C").style.display = null;
    } else if (randomStage002(1, 3) == 2) {
      document.getElementById("stage002B").style.display = null;
    } else {
      document.getElementById("stage002A").style.display = null;
    }
  }
}

function Stage003() {
  hideElements();
  if (Minutes >= 2 & Minutes <5) {
    const randomStage003 = (min, max) =>
      Math.floor(Math.random() * (max - min + 1) + min);
    console.log(randomStage003(1, 4));

    if (randomStage003(1, 4) == 1) {
      document.getElementById("stage003D").style.display = null;
    } else if (randomStage003(1, 4) == 2) {
      document.getElementById("stage003C").style.display = null;
    } else if (randomStage003(1, 4) == 3) {
      document.getElementById("stage003B").style.display = null;
    } else {
      document.getElementById("stage003A").style.display = null;
    }
  }
}

function Stage003b() {
  hideElements();
  if (Minutes >= 5 & Minutes <6) {
    const randomStage0035 = (min, max) =>
      Math.floor(Math.random() * (max - min + 1) + min);
    console.log(randomStage0035(1, 3));

    if (randomStage0035(1, 3) == 1) {
      document.getElementById("stage0035C").style.display = null;
    } else if (randomStage0035(1, 3) == 2) {
      document.getElementById("stage0035B").style.display = null;
    } else {
      document.getElementById("stage0035A").style.display = null;
    }
  }
}

function Stage004() {
  hideElements();
  if (Minutes >= 6) {
    const randomStage004 = (min, max) =>
      Math.floor(Math.random() * (max - min + 1) + min);
    console.log(randomStage004(1, 2));

    if (randomStage004(1, 2) == 1) {
      document.getElementById("stage004B").style.display = null;
    } else {
      document.getElementById("stage004A").style.display = null;
    }
  }
}

function Stage005(){
    document.getElementById("stage005").style.display="none";

    if(Minutes==6){document.getElementById("stage005").style.display=null;}
}

function Stage006() {
  hideElements();
  if (Minutes > 6) {
    const randomStage006 = (min, max) =>
      Math.floor(Math.random() * (max - min + 1) + min);
    console.log(randomStage006(1, 2));

    if (randomStage006(1, 2) == 1) {
      document.getElementById("stage006B").style.display = null;
    } else {
      document.getElementById("stage006A").style.display = null;
    }
  }
}

function Stage007() {
  hideElements();
  if (Minutes > 6) {
    const randomStage007 = (min, max) =>
      Math.floor(Math.random() * (max - min + 1) + min);
    console.log(randomStage007(1, 3));

    if (randomStage007(1, 3) == 1) {
      document.getElementById("stage007C").style.display = null;
    } else if (randomStage007(1, 3) == 2) {
      document.getElementById("stage007B").style.display = null;
    } else {
      document.getElementById("stage007A").style.display = null;
    }
  }
}

function Stage008() {
  hideElements();
  if (Minutes > 6) {
    const randomStage008 = (min, max) =>
      Math.floor(Math.random() * (max - min + 1) + min);
    console.log(randomStage008(1, 4));

    if (randomStage008(1, 4) == 1) {
      document.getElementById("stage008D").style.display = null;
    } else if (randomStage008(1, 4) == 2) {
      document.getElementById("stage008C").style.display = null;
    } else if (randomStage008(1, 4) == 3) {
      document.getElementById("stage008B").style.display = null;
    } else {
      document.getElementById("stage008A").style.display = null;
    }
  }
}


function Stage009(){
    document.getElementById("stage009A").style.display="none";

    if(Minutes>10) {document.getElementById("stage009A").style.display=null;}
    else {document.getElementById("stage009A").style.display="none";}
}


function backtop() {
    logo = document.getElementById("head-logo");
    logo.scrollIntoView({
        behavior: "smooth",
        block: "start",
    });
}

