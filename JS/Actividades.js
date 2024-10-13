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

// Función para filtrar actividades por categoría
function filterActivitiesByCategory(category) {
    const allActivities = getAllActivities();
    return allActivities.filter(activity => activity.category === category);
}

// Función para manejar el click en la categoría
function filterCategory(category) {
    const activityList = document.getElementById("activity-list");
    const containerDestacadas = document.querySelector(".container.mt-1"); // Contenedor de actividades destacadas
    const activityContainer = document.querySelector(".container.mt-4"); // Contenedor de actividades por categoría
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
    categoryTitle.innerText = category.charAt(0).toUpperCase() + category.slice(1);

    if (filteredActivities.length === 0) {
        activityList.innerHTML = '<p>No hay actividades en esta categoría.</p>';
    } else {
        filteredActivities.forEach(activity => {
            const activityCard = `
                <div class="col-md-4 mt-2">
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
            return age <= 6; // Filtra actividades hasta 6 años
        } else if (ageCategory === 'over-6') {
            return age >= 6; // Filtra actividades mayores de 6 años
        }
        return []; // Por defecto, no devuelve ninguna actividad si la categoría es desconocida
    });
}

// Función para manejar el click en el filtro de edad
function filterByAge(ageCategory) {
    const activityList = document.getElementById("activity-list");
    const containerDestacadas = document.querySelector(".container.mt-1"); // Contenedor de actividades destacadas
    const activityContainer = document.querySelector(".container.mt-4"); // Contenedor de actividades por categoría
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
        categoryTitle.innerText = 'Actividades para niños hasta 6 años';
    } else {
        categoryTitle.innerText = 'Actividades para niños mayores de 6 años';
    }

    if (filteredActivities.length === 0) {
        activityList.innerHTML = '<p>No hay actividades en esta categoría de edad.</p>';
    } else {
        filteredActivities.forEach(activity => {
            const activityCard = `
                <div class="col-md-4 mt-2">
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

// Mostrar reseñas con SweetAlert
function showReviews(activityName) {
    const allActivities = getAllActivities();
    const activity = allActivities.find(act => act.name === activityName);
    const reviewsText = activity.reviews.map(review => `<p>${review.text} - ${generateStars(review.rating)}</p>`).join('');
    
    Swal.fire({
        title: `Reseñas de ${activityName}`,
        html: `<div>${reviewsText}</div>`,
        icon: 'info',
        confirmButtonText: 'Cerrar'
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
