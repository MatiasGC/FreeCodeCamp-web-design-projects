    // SCROLL INTOVIEW - HACE SCROLL DIRECTO A UN ANCLA EN ESPECIAL
    // VARIANTE en CSS => scroll-behavior: smooth
    document.getElementById("work").addEventListener('click', e => {
        e.preventDefault();
        document.getElementById("projects").scrollIntoView({
            behavior: "smooth"
        });
    })

    document.getElementById("about").addEventListener('click', e => {
        e.preventDefault();
        document.getElementById("welcome-section").scrollIntoView({
            behavior: "smooth"
        });
    })

    document.getElementById("contacto").addEventListener('click', e => {
        e.preventDefault();
        document.getElementById("contact").scrollIntoView({
            behavior: "smooth"
        });
    })