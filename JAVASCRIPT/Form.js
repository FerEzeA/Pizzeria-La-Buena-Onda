const formulario = document.querySelector("form");
const nombre = document.querySelector("#Nombre");
const email = document.querySelector("#Email");
const telefono = document.querySelector("#Telefono");
const asunto = document.querySelector("#Asunto");
const mensaje = document.querySelector("#Mensaje");



formulario.addEventListener("submit", (e)=> {
    e.preventDefault();
    validarCampos();
})

const validarCampos = ()=> {
    const nombreValue = nombre.value.trim();
    const emailValue = email.value.trim();
    const telefonoValue = telefono.value.trim();
    const asuntoValue = asunto.value.trim();
    const mensajeValue = mensaje.value.trim();

    if(nombreValue === ""){
        validacionIncorrecta(nombre,"Campo Vacio");
    }else if(nombreValue.length>20){
        validacionIncorrecta(nombre,"El nombre es muy largo");
    }else if(validacionNombre(nombreValue)){
        validacionIncorrecta(nombre,"El nombre no es valido");
    }else{
        validacionCorrecta(nombre);
    }


    if(emailValue === ""){
        validacionIncorrecta(email,"Campo Vacio");
    }else if(validacionEmail>40){
        validacionIncorrecta(email,"El email muy largo");
    }else if(validacionEmail(emailValue)){
        validacionIncorrecta(email,"El email no es valido");
    }else{
        validacionCorrecta(email);
    }


    if(telefonoValue === ""){
        validacionIncorrecta(telefono,"Campo Vacio");
    }else if(validacionTelefono(telefonoValue)){
        validacionIncorrecta(telefono,"El telefono no es valido");
    }else if(telefonoValue.length>10){
        validacionIncorrecta(telefono,"El telefono es muy largo");
    }else if(telefonoValue.length<8){
        validacionIncorrecta(telefono,"El telefono es muy corto");
    }else{
        validacionCorrecta(telefono);
    }
    
    if(asuntoValue === ""){
        validacionIncorrecta(asunto,"Campo Vacio");
    }else if(asuntoValue.length>20){
        validacionIncorrecta(asunto,"El asunto es muy largo");
    }else{
        validacionCorrecta(asunto);
    }

    if(mensajeValue === ""){
        validacionIncorrecta(mensaje,"Campo Vacio");
    }else if(asuntoValue.length>100){
        validacionIncorrecta(mensaje,"El mensaje es muy largo");
    }else{
        validacionCorrecta(mensaje);
    }
    
}


const validacionIncorrecta = (input,mensaje)=> {
    const formControl = input.parentElement;
    const aviso = formControl.querySelector("p");
    aviso.innerText = mensaje;
    formControl.className = "form-Control false";
}


const validacionCorrecta = (input)=> {
    const formControl = input.parentElement;
    formControl.className = "form-Control true";
}

const validacionNombre = (nombre)=>{
    return !/[:a-z:]+$/.test(nombre); 
}

const validacionEmail = (email)=>{
    return !/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email); 
}

const validacionTelefono = (telefono)=>{
    return !/[:0-9:]+$/.test(telefono);
}


