var buttonLatitude = document.getElementById("latitude");
var buttonLongitude = document.getElementById("longitude");
var buttonReculer = document.getElementById("reculer");
var buttonCopier = document.getElementById("copier");
var buttonColler = document.getElementById("coller");

var textLat = document.getElementById("lat");
var textLong = document.getElementById("long");

buttonLatitude.addEventListener("click",getLat); 
buttonLongitude.addEventListener("click",getLong); 
buttonReculer.addEventListener("click",goBack);
buttonCopier.addEventListener("click",copieToClipboard);
buttonColler.addEventListener("click",pastToClipboard);

function getLat(){
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(function(position){
            textLat.innerHTML = position.coords.latitude;
        });
    }
}
function getLong(){
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(function(position){
            textLong.innerHTML = position.coords.longitude;
        });
    }
}

function goBack(){
    window.history.go(-document.getElementById("nbpages").value);
}

function copieToClipboard(){
    navigator.clipboard.writeText(document.getElementById("textecopie").value);
    alert("copie to clipboard");
}

function pastToClipboard(){
    navigator.clipboard.readText().then( text =>
        document.getElementById("textecolle").value = text);

    alert("past");
}