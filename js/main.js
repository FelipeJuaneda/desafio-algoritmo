let cantidadUsuarios = parseInt(prompt("Indique cuantos usuarios se registraran"));
let sumaDeUsuarios = 0;
let n;

for(let n=1; n<=cantidadUsuarios;n++){
    edadUsuarios=parseInt(prompt("Ingrese la edad del usuario"+n));
    sumaDeUsuarios= sumaDeUsuarios + edadUsuarios;
}

alert('El promedio de edades de los ' + cantidadUsuarios + ' Usuarios es de: ' + parseInt(sumaDeUsuarios/cantidadUsuarios) + ' años')