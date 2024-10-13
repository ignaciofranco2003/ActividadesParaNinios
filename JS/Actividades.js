// Función para obtener todas las actividades
function getAllActivities() {
    return [
        { name: "Visita al Museo paleontológico", age: "6+ años", price: "Gratis", location: "Centro de la ciudad", date: "LUN A VIE 10hs a 19hs", category: "Museos", image: "CSS/IMG/museo-paleontologico.jpeg", reviews: [{ text: "Muy educativo", rating: 5 }, { text: "Ideal para niños curiosos", rating: 4 }] },
        { name: "Clases de Natación", age: "3+ años", price: "$2500", location: "Pileta Municipal", date: "LUN - MIE - VIE 15hs a 16 hs", category: "Clases", image: "CSS/IMG/clases-natacion.jpeg", reviews: [{ text: "Profesores muy amables", rating: 4 }, { text: "Buen ambiente", rating: 3 }] },
        { name: "Taller de Manualidades", age: "4+ años", price: "$3000", location: "Escuela tecnica N2", date: "MAR Y JUE 15hs a 17HS", category: "Talleres", image: "CSS/IMG/manualidades.jpg", reviews: [{ text: "Muy divertido", rating: 5 }] },
        { name: "Paseo por la costanera", age: "3+ años", price: "Gratis", location: "Paseo publico municipal", date: "-", category: "Aire libre", image: "CSS/IMG/paseo-bicicleta.jpg", reviews: [{ text: "Excelente recorrido", rating: 5 }] },
        { name: "Clases de Pintura", age: "7+ años", price: "$1500", location: "Escuela de Arte", date: "LUN Y VIE 16hs a 17hs", category: "Clases", image: "CSS/IMG/pinturas.jpg", reviews: [{ text: "Ideal para artistas en crecimiento", rating: 4 }] }
    ];
}

function filterCategory(category) {
    const activityList = document.getElementById("activity-list");
    const containerDestacadas = document.querySelector(".container.actividades-destacadas"); // Contenedor de actividades destacadas
    const activityContainer = document.querySelector(".container.actividades-filtradas"); // Contenedor de actividades por categoría
    const categoryTitle = document.getElementById("filtered-category-title"); // Elemento h2 para el título de la categoría
    
    // Mostrar contenedor de actividades filtradas
    activityContainer.style.display = 'block';
    // Ocultar actividades destacadas
    containerDestacadas.style.display = 'none';

    // Limpiar la lista de actividades filtradas
    activityList.innerHTML = '';

    // Filtrar actividades por categoría
    const filteredActivities = filterActivitiesByCategory(category);

    // Actualizar el encabezado con el nombre de la categoría
    categoryTitle.innerText = category.toUpperCase();

    if (filteredActivities.length === 0) {
        activityList.innerHTML = '<p>No hay actividades en esta categoría.</p>';
    } else {
        filteredActivities.forEach(activity => {
            const activityCard = `
                <div class="col-md-4 mt-2 mb-2">
                    <div class="card text-bg-dark">
                        <img src="${activity.image}" style="min-height: 18.8rem; max-height:18.8rem; opacity:55%;" class="card-img" alt="${activity.name}">
                        <div class="card-img-overlay">
                            <h5 class="card-title text-center" style="font-weight: 700;">${activity.name}</h5>
                            <p class="card-text" style="font-weight: 600;">Edad recomendada: ${activity.age}</p>
                            <p class="card-text" style="font-weight: 600;">Precio: ${activity.price}</p>
                            <p class="card-text" style="font-weight: 600;">Ubicación: ${activity.location}</p>
                            <p class="card-text" style="font-weight: 600;">Fecha y horario: ${activity.date}</p>
                            <p class="card-text" style="font-weight: 600;">Promedio de reseñas: ${calculateAverageRating(activity.reviews)} ★</p>
                            <button class="btn btn-primary" onclick="showReviews('${activity.name}')">Ver Reseñas</button>
                        </div>
                    </div>
                </div>`;
            activityList.innerHTML += activityCard;
        });
    }
}

// Función para manejar el click en el filtro de edad
function filterByAge(ageCategory) {
    const activityList = document.getElementById("activity-list");
    const containerDestacadas = document.querySelector(".container.actividades-destacadas"); // Contenedor de actividades destacadas
    const activityContainer = document.querySelector(".container.actividades-filtradas"); // Contenedor de actividades por categoría
    const categoryTitle = document.getElementById("filtered-category-title"); // Elemento h2 para el título de la categoría

    // Mostrar contenedor de actividades filtradas
    activityContainer.style.display = 'block';
    // Ocultar actividades destacadas
    containerDestacadas.style.display = 'none';

    // Limpiar la lista de actividades filtradas
    activityList.innerHTML = '';

    // Obtener actividades filtradas por edad
    const filteredActivities = getActivitiesByAge(ageCategory);

    // Actualizar el encabezado con el nombre de la categoría
    if (ageCategory === 'up-to-6') {
        categoryTitle.innerText = 'ACTIVIDADES PARA NIÑOS HASTA 6 AÑOS';
    } else {
        
        categoryTitle.innerText = 'ACTIVIDADES PARA NIÑOS MAYORES DE 6 AÑOS';
    }

    if (filteredActivities.length === 0) {
        activityList.innerHTML = '<p>No hay actividades en esta categoría de edad.</p>';
    } else {
        filteredActivities.forEach(activity => {
            const activityCard = `
                <div class="col-md-4 mt-2 mb-2">
                    <div class="card text-bg-dark">
                        <img src="${activity.image}" style="min-height: 18.8rem; max-height:18.8rem; opacity:55%;" class="card-img" alt="${activity.name}">
                        <div class="card-img-overlay">
                            <h5 class="card-title text-center" style="font-weight: 700;">${activity.name}</h5>
                            <p class="card-text" style="font-weight: 600;">Edad recomendada: ${activity.age}</p>
                            <p class="card-text" style="font-weight: 600;">Precio: ${activity.price}</p>
                            <p class="card-text" style="font-weight: 600;">Ubicación: ${activity.location}</p>
                            <p class="card-text" style="font-weight: 600;">Fecha y horario: ${activity.date}</p>
                            <p class="card-text" style="font-weight: 600;">Promedio de reseñas: ${calculateAverageRating(activity.reviews)} ★</p>
                            <button class="btn btn-primary" onclick="showReviews('${activity.name}')">Ver Reseñas</button>
                        </div>
                    </div>
                </div>`;
            activityList.innerHTML += activityCard;
        });
    }
}

// Función para filtrar actividades según la categoría de edad
function getActivitiesByAge(ageCategory) {
    const allActivities = getAllActivities(); // Obtener todas las actividades

    return allActivities.filter(activity => {
        const age = parseInt(activity.age); // Extraer la edad numérica de la cadena

        if (ageCategory === 'up-to-6') {
            return age < 6; // Filtra actividades hasta 6 años
        } else if (ageCategory === 'over-6') {
            return age >= 6; // Filtra actividades mayores de 6 años
        }
        return []; // Por defecto, no devuelve ninguna actividad si la categoría es desconocida
    });
}

// Función para filtrar actividades por categoría
function filterActivitiesByCategory(category) {
    const allActivities = getAllActivities();
    return allActivities.filter(activity => activity.category === category);
}

function showAllActivities() {
    const activityList = document.getElementById("activity-list");
    const activityContainer = document.querySelector(".container.todas-actividades"); // Contenedor de actividades por categoría
    const categoryTitle = document.getElementById("filtered-category-title"); // Elemento h2 para el título de la categoría

    // Mostrar contenedor de actividades filtradas
    activityContainer.style.display = 'block';
    
    // Limpiar la lista de actividades filtradas
    activityList.innerHTML = '';

    // Obtener todas las actividades
    const allActivities = getAllActivities();

    // Actualizar el encabezado
    categoryTitle.innerText = 'ACTIVIDADES DISPONIBLES';

    // Mostrar todas las actividades
    allActivities.forEach(activity => {
        const activityCard = `
            <div class="col-md-4 mt-2 mb-2">
                <div class="card text-bg-dark">
                    <img src="${activity.image}" style="min-height: 18.8rem; max-height:18.8rem; opacity:55%;" class="card-img" alt="${activity.name}">
                    <div class="card-img-overlay">
                        <h5 class="card-title text-center" style="font-weight: 700;">${activity.name}</h5>
                        <p class="card-text" style="font-weight: 600;">Edad recomendada: ${activity.age}</p>
                        <p class="card-text" style="font-weight: 600;">Precio: ${activity.price}</p>
                        <p class="card-text" style="font-weight: 600;">Ubicación: ${activity.location}</p>
                        <p class="card-text" style="font-weight: 600;">Fecha y horario: ${activity.date}</p>
                        <p class="card-text" style="font-weight: 600;">Promedio de reseñas: ${calculateAverageRating(activity.reviews)} ★</p>
                        <button class="btn btn-primary" onclick="showReviews('${activity.name}')">Ver Reseñas</button>
                    </div>
                </div>
            </div>`;
        activityList.innerHTML += activityCard;
    });
}

// Mostrar reseñas con SweetAlert
function showReviews(activityName) {
    const allActivities = getAllActivities();
    const activity = allActivities.find(act => act.name === activityName);
    const reviewsText = activity.reviews.map(review => `<p>${review.text} - ${generateStars(review.rating)}</p>`).join('');
    
    Swal.fire({
        title: `Reseñas de ${activityName}`,
        html: `<div>${reviewsText}</div>`,
        icon: 'info',
        confirmButtonText: 'Cerrar',
        customClass: {
            popup: 'alerta-rev' // Clase CSS personalizada
        }
    });
}

function calculateAverageRating(reviews) {
    if (reviews.length === 0) return 0; // Si no hay reseñas, devuelve 0

    const totalRating = reviews.reduce((sum, review) => sum + review.rating, 0);
    return (totalRating / reviews.length).toFixed(1); // Devuelve el promedio con un decimal
}

// Generar estrellas de calificación
function generateStars(rating) {
    let stars = '';
    for (let i = 0; i < 5; i++) {
        stars += i < rating ? '★' : '☆';
    }
    return stars;
}

function showfilters() {
    Swal.fire({
        html: `
        <div class="position-relative">
            <a class="text-center" href="#" style="font-size: 24px; text-decoration: none; color: #333; opacity:95%; font-weight: 500;">FILTROS</a>
            <button type="button" onclick="Swal.close()" style="background: transparent; border: none; position: absolute; top: 0px; right: 0px; opacity: 65%; font-size: 30px;">&times;</button>
            <div class="container mt-4">
                <!-- Filtro de Categorías -->
                <div class="mb-3">
                    <h5>Categorías</h5>
                    <div class="row">
                        <div class="col-6 col-md-4">
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="filterMuseos">
                                <label class="form-check-label" for="filterMuseos">Museos</label>
                            </div>
                        </div>
                        <div class="col-6 col-md-4">
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="filterAireLibre">
                                <label class="form-check-label" for="filterAireLibre">Aire libre</label>
                            </div>
                        </div>
                        <div class="col-6 col-md-4">
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="filterClases">
                                <label class="form-check-label" for="filterClases">Clases</label>
                            </div>
                        </div>
                        <div class="col-6 col-md-4 mt-2">
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="filterTalleres">
                                <label class="form-check-label" for="filterTalleres">Talleres</label>
                            </div>
                        </div>
                        <div class="col-6 col-md-4 mt-2">
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="filterHasta6">
                                <label class="form-check-label" for="filterHasta6">Hasta 6 años</label>
                            </div>
                        </div>
                        <div class="col-6 col-md-4 mt-2">
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="filterMas6">
                                <label class="form-check-label" for="filterMas6">+6 Años</label>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Filtro de Edad -->
                <div class="mb-3">
                    <h5>Edad Recomendada</h5>
                    <div class="row">
                        <div class="col">
                            <label for="filterEdadMinima" class="form-label">Edad Mínima</label>
                            <input type="number" class="form-control" id="filterEdadMinima" placeholder="Mínima" min="0" max="18">
                        </div>
                        <div class="col">
                            <label for="filterEdadMaxima" class="form-label">Edad Máxima</label>
                            <input type="number" class="form-control" id="filterEdadMaxima" placeholder="Máxima" min="0" max="18">
                        </div>
                    </div>
                </div>

                <!-- Filtro de Costo -->
                <div class="mb-3">
                    <h5>Costo</h5>
                    <div class="d-flex justify-content-center">
                        <div class="form-check me-3">
                            <input class="form-check-input" type="checkbox" value="" id="filterGratis">
                            <label class="form-check-label" for="filterGratis">Gratis</label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="filterPago">
                            <label class="form-check-label" for="filterPago">Con Costo</label>
                        </div>
                    </div>
                </div>

                <!-- Botón para aplicar los filtros -->
                <div class="text-center">
                    <button class="btn btn-primary" onclick="Swal.close()">Aplicar Filtros</button>
                </div>
            </div>
        </div>`,
        showConfirmButton: false, // Oculta el botón de confirmación por defecto
        background: '#80d661fa', // Color de fondo
        width: '600px', // Ajuste de ancho opcional
    });
}

