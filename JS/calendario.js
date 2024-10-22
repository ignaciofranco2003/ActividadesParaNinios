    // Datos de ejemplo de actividades
    const activities = {
        1: [
            { time: "10:00hs a 12:00hs", name: "Clases de natacion" },
            { time: "14:00hs a 16:00hs", name: "Taller de arte" }
        ],
        3: [
            { time: "10:00hs a 12:00hs", name: "Clases de natacion" },
            { time: "14:00hs a 16:00hs", name: "Taller de arte" }
        ],
        11: [
            {time: "9:00hs a 23:00hs", name: "Ferias paseo publico municipal" }
        ],
        12: [
            { time: "9:00hs a 23:00hs", name: "Ferias paseo publico municipal" }
        ],
        13: [
            {time: "9:00hs a 23:00hs", name: "Ferias paseo publico municipal" }
        ],
    };

    function showActivities(day) {
        const dayActivities = activities[day] || [];
        const activityList = dayActivities.length > 0 
            ? dayActivities.map(activity => `${activity.time} - ${activity.name}`).join('<br>')
            : 'No hay actividades para este día.';
        
        Swal.fire({
            title: `Actividades para el día ${day}`,
            html: activityList,
            icon: 'warning',
            confirmButtonText: 'Cerrar',
            customClass: {
            popup: 'alerta-calendario',
            confirmButton: 'cerrar-calen'
        }
        });
    }