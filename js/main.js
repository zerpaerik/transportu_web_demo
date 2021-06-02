//PEticiones AJAX
const  $correo = document.querySelector("#email"), // Todos los campos
       $nombre = document.querySelector("#nombre"), 
       $apellido = document.querySelector("#apellido"), 
       $fnac = document.querySelector("#fnac"),
       $tratamiento = document.querySelector("#tratamiento"),
       $clave = document.querySelector("#clave"), 
       $telefono = document.querySelector("#telefono"),
       $btnEnviar = document.querySelector("#btnEnviar"), // El botón que envía el formulario
       $respuesta = document.querySelector("#respuesta"); // el div que muestra mensajes

// Agregar listener al botón
$btnEnviar.addEventListener("click", () => {
    // Poner un estado de "enviando"
    $respuesta.textContent = "Cargando...";
    // Armar objeto con datos
    const datos = {
        correo: $correo.value,
        nombre: $nombre.value,
        apellido: $apellido.value,
        fnac: $fnac.value,
        tratamiento: $tratamiento.value,
        clave: $clave.value,
        telefono: $telefono.value,
    };
    // Codificarlo como JSON
    const datosCodificados = JSON.stringify(datos);
    // Enviarlos
    fetch("./procesar.php", {
            method: "POST", // Enviar por POST
            body: datosCodificados, // En el cuerpo van los datos
        })
        .then(respuestaCodificada => respuestaCodificada.json()) // Decodificar JSON que nos responde PHP
        .then(respuestaDecodificada => {
            // Aquí ya tenemos la respuesta lista para ser procesada
            $respuesta.textContent = respuestaDecodificada;
        });
});