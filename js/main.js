/* Verificacion de edades */
function verificarEdad(){
    let edad = document.getElementById("edad").value;

    if ((edad!="") && (edad>18)) {
        alert("Bienvenido!" + " tu edad es de " + edad+ " años")
    }else{
        alert('DATOS INCORRECTOS - No eres mayor de 18')
    }
}

/* Algoritmo promedio de edades */
let cantidadUsuarios = parseInt(prompt("Indique cuantos usuarios se registraran"));
let sumaDeUsuarios = 0;
let n;

for(let n=1; n<=cantidadUsuarios;n++){
    edadUsuarios=parseInt(prompt("Ingrese la edad del usuario"+n));
    sumaDeUsuarios= sumaDeUsuarios + edadUsuarios;
}

alert('El promedio de edades de los ' + cantidadUsuarios + ' Usuarios es de: ' + parseInt(sumaDeUsuarios/cantidadUsuarios) + ' años')