//Declaración de variables
var nombreUsuario="Agustin P. Massun";
var saldoCuenta=3800;
var limiteExtraccion=1000;  

var precioAgua=350;
var precioLuz=210;
var precioInternet=570;
var precioTelefono=425;

var cuentaAmiga1=1234567;
var cuentaAmiga2=7654321;

var codigoInicioSesion=9999;



//Ejecución de las funciones que actualizan los valores de las variables en el HTML.

iniciarSesion();

window.onload = function() {
    cargarNombreEnPantalla();
    actualizarSaldoEnPantalla();
    actualizarLimiteEnPantalla();
}

//Mis funciones

var sumarDinero=function(cantidadASumar){
    saldoCuenta += cantidadASumar;
}

var restarDinero=function(cantidadARestar){
    saldoCuenta -= cantidadARestar;
}

var haySaldoDisponible=function(x){
    if(x<=saldoCuenta){
        return true;
    }
    else{
        return false;   
    }
}

var esMultiploDe100=function(x){
    if(x%100===0){
        console.log("si, es multiplo de 100");
        return true;
    }
    else {
        console.log("no, no es multiplo de 100");
        return false;
    }
}
   
var pagarServicios=function(nombreServicio,costoDelServicio){
    if (haySaldoDisponible(costoDelServicio)){
        saldoAnterior=saldoCuenta;
        restarDinero(costoDelServicio);
        actualizarSaldoEnPantalla();
        alert ("Has pagado el servicio "+nombreServicio+"\nSaldo anterior: $"+saldoAnterior+"\nDinero descontado: $"+costoDelServicio+"\nSaldo actual: $"+saldoCuenta);
    } else {
        alert("No hay saldo suficiente en tu cuenta para pagar este servicio");
    }   
}


//Funciones que tenes que completar

function cambiarLimiteDeExtraccion(nuevoLimiteExtraccion) {
    var nuevoLimiteExtraccion = parseInt(prompt("Por favor ingrese el valor del nuevo de límite de extracción:"));
    if(isNaN(nuevoLimiteExtraccion)) {
        alert("No es un número o no complestaste el formulario. Debes ingresar solo números.");
    }else {
        limiteExtraccion=nuevoLimiteExtraccion;
        actualizarLimiteEnPantalla();
        alert("El nuevo límite de extracción es: $"+limiteExtraccion);
    }
}

function depositarDinero(cantADepositar) {
    var cantADepositar = parseInt(prompt("Por favor ingrese la cantidad de dinero que desea depositar:"));
    if(isNaN(cantADepositar)) {
        alert("No es un número o no complestaste el formulario. Debes ingresar solo números.");
    }else {
        var saldoAnterior=saldoCuenta;
        sumarDinero(cantADepositar);
        actualizarSaldoEnPantalla();
        alert("Has depositado: $"+cantADepositar+"\nSaldo anterior: $:"+saldoAnterior+"\nSaldo actual $:"+saldoCuenta);
    }
}

function depositarCheque(cantADepositar) {
    var cantADepositar = parseInt(prompt("Por favor ingrese el monto del cheque a depositar:"));
    if(isNaN(cantADepositar)) {
        alert("No es un número o no complestaste el formulario. Debes ingresar solo números.");
    }else {
        var numeroDeCheque = parseInt(prompt("Por favor ingrese el número de serie del cheque:"));
        var banco = prompt("Por favor ingrese el nombre del banco emisor:");
        var saldoAnterior=saldoCuenta;
        sumarDinero(cantADepositar);
        actualizarSaldoEnPantalla();
        alert("Has depositado: $"+cantADepositar+
        "\nNumero de serie del cheque: "+numeroDeCheque+
        "\nNumero del banco emisor del cheque: "+banco+
        "\n\nSaldo anterior: $:"+saldoAnterior+
        "\nSaldo actual $:"+saldoCuenta);
    }
}

function extraerDinero(cantAExtraer) {
    var cantAExtraer = parseInt(prompt("Por favor ingrese la cantidad de dinero que desea extraer:"));
    if(isNaN(cantAExtraer)) {
        alert("No es un número o no complestaste el formulario. Debes ingresar solo números.");
    }else {
        if(haySaldoDisponible(cantAExtraer)){
            if(cantAExtraer>limiteExtraccion){
                alert("La cantidad de dinero que deseas extraer es mayor a tu límite de extracción.");
            } else {
                if(esMultiploDe100(cantAExtraer)){
                    var saldoAnterior=saldoCuenta;
                    restarDinero(cantAExtraer);
                    actualizarSaldoEnPantalla();
                    alert("Has extraido: $"+cantAExtraer+"\nSaldo anterior: $:"+saldoAnterior+"\nSaldo actual $:"+saldoCuenta);
                } else {
                        alert("Solo puede extraer billetes de 100");
                }
            }
        } else {
            alert("No hay saldo disponible en tu cuenta para extraer esa cantidad de dinero.");
        }
    }
}


function pagarServicio() {
    var eleccion=parseInt(prompt("Ingrese el número que corresponda con el servicio que querés pagar: \n 1 - Agua \n 2 - Luz \n 3 - Internet \n 4 - Teléfono"));
    switch(eleccion){
        case 1:
                pagarServicios("Agua",precioAgua);                
                break;        
        case 2:
                pagarServicios("Luz",precioLuz);        
                break;
        case 3:
                pagarServicios("Internet",precioInternet);
                break;
        case 4:
                pagarServicios("Teléfono",precioTelefono);        
                break;
        default:
            alert("No existe el servicio que se ha seleccionado");
    }
}

function transferirDinero() {
    var MontoATransferir=parseInt(prompt("Ingrese el monto que quiere transferir: $"));
    if(isNaN(MontoATransferir)) {
        alert("No es un número o no complestaste el formulario. Debes ingresar solo números.");
    }else {
        if (haySaldoDisponible(MontoATransferir)){
            var numeroDeCuentaAmiga=parseInt(prompt("Ingrese el el número de la cuenta amiga a transferir:"));
            if (numeroDeCuentaAmiga==cuentaAmiga1 || numeroDeCuentaAmiga==cuentaAmiga2 ) {
                restarDinero(MontoATransferir);
                actualizarSaldoEnPantalla();
                alert ("Se han transferido $"+MontoATransferir+"\nCuenta Destino: "+numeroDeCuentaAmiga);
            } else {
                alert("Solo puede transferir dinero a una cuenta amiga.");
            }   
        } else {
            alert("No hay saldo suficiente para transferir esa cantidad de dinero.");
        } 
    } 
}

function iniciarSesion() {
    var codigoIngresadoPorElUsuario=prompt("Por favor ingrese el código de inicio de sesión: ");
    if (codigoIngresadoPorElUsuario==codigoInicioSesion){
        alert("Bienvenido/a "+nombreUsuario+" ya puedes comenzar a realizar operaciones.")
    }else if(codigoIngresadoPorElUsuario==null){
        alert("No se puede dejar en blanco y tocar CANCELAR. Vuelva a intentarlo");
        iniciarSesion();
    }else if(codigoIngresadoPorElUsuario==""){
        alert("No se puede dejar en blanco y tocar ACEPTAR. Vuelva a Intentarlo");
        iniciarSesion();
    }else {
        saldoCuenta=0;
        alert("Código Incorrecto. Tu dinero ha sido retenido por cuestiones de seguridad.");
    }

}

//Funciones que actualizan el valor de las variables en el HTML
function cargarNombreEnPantalla() {
    document.getElementById("nombre").innerHTML = "Bienvenido/a " + nombreUsuario;
}

function actualizarSaldoEnPantalla() {
    document.getElementById("saldo-cuenta").innerHTML = "$" + saldoCuenta;
}

function actualizarLimiteEnPantalla() {
    document.getElementById("limite-extraccion").innerHTML = "Tu límite de extracción es: $" + limiteExtraccion;
}