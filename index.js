/// <reference types="jquery" />
/// <reference types="@geps/geofs-types" />


function startFlight() {
    window.open("https://yousofbahieldeen.github.io/Flight-Plan-Geofs/");   
}


// Main page code
const btn = document.createElement('button');
btn.innerText = "Make a Flight Plane";
document.body.appendChild(btn);
btn.addEventListener('click', () => {
    startFlight();
});

// start writing your code here!
// you can reference the geofs apis in intellisense because of the triple-slash directives
// the apis from geofs plugin system are not available yet
