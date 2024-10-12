// Escuchar los clics en el documento
document.addEventListener('click', function (event) {
    // Obtener el elemento navbar y el botón de toggler
    var navbar = document.getElementById('navbarContent');
    var toggler = document.querySelector('.navbar-toggler');

    // Verificar si el clic ocurrió fuera de la navbar y el botón de toggler
    var isClickInside = navbar.contains(event.target) || toggler.contains(event.target);

    // Si el clic fue fuera y la navbar está visible, la colapsamos
    if (!isClickInside && navbar.classList.contains('show')) {
        new bootstrap.Collapse(navbar).toggle();
    }
});

function mostrarAlerta() {
    Swal.fire({
        title: 'CONTACTOS',
        html: `
            <p><i class="fas fa-phone"></i> (03329) 644042</p>
            <p><i class="fas fa-envelope"></i> turismo@sanpedro.gob.ar</p>
            <p>Secretaría de Turismo, Cultura y Deportes</p>
        `,
        // icon: '',
        confirmButtonText: 'Cerrar',
        position: 'top-end',  // Posición arriba a la izquierda
        customClass: {
            popup: 'alert-personalizada' // Clase CSS personalizada
        }
    });
}