/*
function mostrar(pagina) {
    const contenido = document.getElementById("contenido");

    if (pagina === "inicio")
        contenido.innerHTML = "<h1>Inicio</h1>";

    if (pagina === "servicios")
        contenido.innerHTML = "<h1>Servicios</h1>";
	
	if (pagina === "proyectos")
        contenido.innerHTML = "<h1>Proyectos</h1>";

    if (pagina === "contacto")
        contenido.innerHTML = "<h1>Contacto</h1>";
}
*/
function mostrar(pagina) {
    document.querySelectorAll("#contenido section")
        .forEach(s => s.style.display = "none");

    document.getElementById(pagina).style.display = "block";
}
mostrar("inicio");