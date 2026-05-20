function mostrarMensaje() {
    const mensaje = document.getElementById('mensaje');
    mensaje.classList.remove('oculto');
    setTimeout(() => {
        mensaje.classList.add('oculto');
    }, 3000);
}

console.log('MiApp cargada correctamente!');