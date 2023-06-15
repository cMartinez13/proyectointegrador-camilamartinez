let botonresumen1 = document.getElementById("botonresumen");
botonresumen1.addEventListener("click", respuestaClick)
function respuestaClick(e){
    e.preventDefault();
    let input1 = document.getElementById("nombre").value;
    console.log("El nombre ingresado es ", input1);
    let input2 = document.getElementById("apellido").value;
    console.log("El apellido ingresado es ", input2);
    let input3 = document.getElementById("correo").value;
    console.log("El correo ingresado es ", input3);
    let input4 = document.getElementById("cantidad").value;
    console.log("La cantidad ingresada es ", input4);
    let input5 = document.getElementById("categoria");
    let categoriaseleccionada = input5.selectedIndex;
    let opcionSeleccionada = input5.options[categoriaseleccionada];
    let valorSeleccionado = opcionSeleccionada.value;
    console.log(valorSeleccionado);
    let descuentoEstudiante = 200 *0.2
    let descuentoTrainee = 200 * 0.5
    let descuentoJunior = 200 * 0.75
    if(valorSeleccionado ==="1"){
        let resultado1 = descuentoEstudiante *input4
        console.log("El total a pagar es "+ resultado1);
        const totalventa = document.getElementById("totalventa")
        totalventa.innerHTML = "El total a pagar es $ " +resultado1; 
        

    }
    else if(valorSeleccionado==="2"){
        let resultado2 = descuentoTrainee * input4
        console.log("El total a pagar es "+ resultado2);
        const totalventa = document.getElementById("totalventa")
        totalventa.innerHTML = "El total a pagar es $ " +resultado2;
    }
    else if(valorSeleccionado==="3"){
        let resultado3 = descuentoJunior *input4
        console.log("El total a pagar es"+ resultado3);
        const totalventa = document.getElementById("totalventa")
        totalventa.innerHTML = "El total a pagar es $ " +resultado3;
    }
}
