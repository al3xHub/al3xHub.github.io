//function that applies style to the choose option in the menu
function seleccionar(link){
    let opciones = document.querySelectorAll('#links a');
    opciones[0].className = "";
    opciones[1].className = "";
    opciones[2].className = "";
    opciones[3].className = "";
    opciones[4].className = "";
    link.className = "seleccionado";
    //Hide menu when click on option menu
    let x = document.getElementById("nav");
    x.className = "";
}
//function that shows menu
function responsiveMenu(){
    let x = document.getElementById("nav");
    if (x.className === ""){
        x.className = "responsive";
    }
    else{
        x.className = "";
    }
}