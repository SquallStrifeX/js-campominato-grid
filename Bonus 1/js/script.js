
let buttonStart = document.getElementById('button_start');

buttonStart.addEventListener("click", function(){
 containerPadre.innerHTML = " "
    for(i=0; i<100; i++){
    creazioneDiUnQuadrato();
    
   
   
      }
})

let containerPadre = document.getElementById('container_padre')

  function creazioneDiUnQuadrato () {
    let nuovoQuadrato = document.createElement("div");
    nuovoQuadrato.classList.add("casella");
    containerPadre.appendChild(nuovoQuadrato);
    nuovoQuadrato.textContent = (i+1);
    nuovoQuadrato.addEventListener("click", function onClick(event){
    nuovoQuadrato.classList.toggle("bg-warning");
    console.log(nuovoQuadrato.textContent)

    })
}