function muestraMensaje(){
    alert('No valido!');
    Value('proceso exitoso!')
}

function ValidarNombre(){
    var regex= /^([a-zA-Z_\.\-])+$/;
    var nombre = document.getElementById("nombre").Value;
    var msgNombre =document.getElementById("msgNombre");

    if(!regex.test(nombre)){
        msgNombre.innerText= "¡Ingrese un nombre valido!";
        msgNombre.classList.remove("exito");
        msgNombre.classList.add("error");
    }else{
        msgNombre.innerText= "el nombre es correcto";
        msgNombre.classList.remove("error");
        msgNombre.classList.add("exito");
    }
}

function ValidarCorreo(){
    var regex= /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    var correo = document.getElementById("correo").Value;
    var msgCorreo =document.getElementById("msgCorreo");

    if(!regex.test(correo)){
        msgCorreo.innerText= "¡Ingrese un correo valido!";
        msgCorreo.classList.remove("exito");
        msgCorreo.classList.add("error");
    }else{
        msgCorreo.innerText= "el correo es correcto";
        msgCorreo.classList.remove("error");
        msgCorreo.classList.add("exito");
    }
}

function ValidarTelefono(){
    var regex= /^([1-9_\.\-])$/;
    var telefono = document.getElementById("telefono").Value;
    var msgTelefono =document.getElementById("msgTelefono");

    if(!regex.test(telefono)){
        msgTelefono.innerText= "¡Ingrese un número valido!";
        msgTelefono.classList.remove("exito");
        msgTelefono.classList.add("error");
    }else{
        msgTelefono.innerText= "el número es correcto";
        msgTelefono.classList.remove("error");
        msgTelefono.classList.add("exito");
    }
}