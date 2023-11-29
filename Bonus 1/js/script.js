
let buttonStart = document.getElementById('button_start');

buttonStart.addEventListener("click", function(){
    for(i=0; i<100; i++)
    creazioneDiUnQuadrato();

})

let containerPadre = document.getElementById('container_padre')

  function creazioneDiUnQuadrato () {
    let nuovoQuadrato = document.createElement("div");
    nuovoQuadrato.classList.add("casella");
    containerPadre.appendChild(nuovoQuadrato);
    nuovoQuadrato.textContent = (i+1);
}