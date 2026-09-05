// ==========================================
// JOX - JavaScript
// Gestión vehicular y educación automotriz
// ==========================================

document.addEventListener("DOMContentLoaded", () => {

    // ==========================================
    // ELEMENTOS PRINCIPALES
    // ==========================================

    const btnRegistrar = document.querySelector(".btn-primary");
    const btnEducacion = document.querySelector(".btn-secondary");
    const btnLogin = document.querySelector(".btn-login");

    const navLinks = document.querySelectorAll(".navbar nav a");

    // ==========================================
    // REGISTRO DE VEHÍCULO
    // ==========================================

    if (btnRegistrar) {
        btnRegistrar.addEventListener("click", () => {

            const marca = prompt("Ingrese la marca de su vehículo:");

            if (!marca) return;

            const modelo = prompt("Ingrese el modelo:");

            if (!modelo) return;

            const anio = prompt("Ingrese el año:");

            if (!anio) return;

            const kilometraje = prompt(
                "Ingrese el kilometraje actual:"
            );

            if (!kilometraje) return;

            // Actualizar información del vehículo
            const vehicleTitle = document.querySelector(
                ".vehicle-info h2"
            );

            const vehicleDescription = document.querySelector(
                ".vehicle-info p"
            );

            const mileage = document.querySelector(
                ".mileage strong"
            );

            if (vehicleTitle) {
                vehicleTitle.textContent =
                    `${marca} ${modelo}`;
            }

            if (vehicleDescription) {
                vehicleDescription.textContent =
                    `Año ${anio}`;
            }

            if (mileage) {
                mileage.textContent =
                    `${Number(kilometraje).toLocaleString()} km`;
            }

            // Actualizar estadísticas
            const vehicleStat = document.querySelector(
                ".stat-card h3"
            );

            if (vehicleStat) {
                vehicleStat.textContent = "1";
            }

            alert(
                "Vehículo registrado correctamente en JOX."
            );
        });
    }


    // ==========================================
    // IR AL MÓDULO EDUCATIVO
    // ==========================================

    if (btnEducacion) {
        btnEducacion.addEventListener("click", () => {

            const educationSection =
                document.querySelector("#educacion");

            if (educationSection) {
                educationSection.scrollIntoView({
                    behavior: "smooth"
                });
            }

        });
    }


    // ==========================================
    // BOTÓN INICIAR SESIÓN
    // ==========================================

    if (btnLogin) {

        btnLogin.addEventListener("click", () => {

            const usuario = prompt(
                "Ingrese su usuario:"
            );

            if (!usuario) return;

            alert(
                `Bienvenido a JOX, ${usuario}.`
            );

        });

    }


    // ==========================================
    // NAVEGACIÓN SUAVE
    // ==========================================

    navLinks.forEach(link => {

        link.addEventListener("click", event => {

            const targetId =
                link.getAttribute("href");

            const target =
                document.querySelector(targetId);

            if (target) {

                event.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth"
                });

            }

        });

    });


    // ==========================================
    // BOTONES DE MANTENIMIENTO
    // ==========================================

    const maintenanceButton =
        document.querySelector(".outline-button");

    if (maintenanceButton) {

        maintenanceButton.addEventListener(
            "click",
            () => {

                alert(
                    "Módulo de mantenimiento seleccionado.\n\n" +
                    "Aquí podrás registrar mantenimientos " +
                    "preventivos y correctivos."
                );

            }
        );

    }


    // ==========================================
    // BOTONES EDUCATIVOS
    // ==========================================

    const educationButtons =
        document.querySelectorAll(
            ".education-card button"
        );

    educationButtons.forEach(button => {

        button.addEventListener("click", () => {

            const card =
                button.closest(".education-card");

            const title =
                card.querySelector("h3");

            if (title) {

                alert(
                    `Contenido seleccionado:\n\n${title.textContent}`
                );

            }

        });

    });


    // ==========================================
    // EFECTO DE APARICIÓN
    // ==========================================

    const cards =
        document.querySelectorAll(
            ".stat-card, .maintenance-card, .education-card"
        );

    const observer =
        new IntersectionObserver(
            entries => {

                entries.forEach(entry => {

                    if (entry.isIntersecting) {

                        entry.target.classList.add(
                            "visible"
                        );

                    }

                });

            },
            {
                threshold: 0.15
            }
        );

    cards.forEach(card => {
        observer.observe(card);
    });


    console.log(
        "JOX cargado correctamente."
    );

});
