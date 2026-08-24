/* =========================================================
   TREXA SOLUCIONES
   JAVASCRIPT + ANIMACIONES
   ========================================================= */


/* =========================================================
   ESPERAR A QUE CARGUE LA PÁGINA
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {


    /* =====================================================
       ELEMENTOS
       ===================================================== */

    const header =
        document.querySelector(".header");


    const hero =
        document.querySelector(".hero");


    const heroBackground =
        document.querySelector(".hero-background");


    const problemBackground =
        document.querySelector(".problem-background");


    const trexaBackground =
        document.querySelector(".trexa-background");


    const contactBackground =
        document.querySelector(".contact-background");


    /* =====================================================
       HEADER
       ===================================================== */

const logo = document.getElementById("logoTrexa");
function updateHeader() {

    if (!header) return;

    if (window.scrollY > 60) {

        header.classList.add("scrolled");

        logo.src = "./assets/logos/logo-trexa-negro.png";

    } else {

        header.classList.remove("scrolled");

        logo.src = "./assets/logos/logo-trexa.png";

    }

}


    window.addEventListener(
        "scroll",
        updateHeader,
        {
            passive: true
        }
    );


    updateHeader();


    /* =====================================================
       NAVEGACIÓN SUAVE
       ===================================================== */

    const links =
        document.querySelectorAll(
            'a[href^="#"]'
        );


    links.forEach(link => {

        link.addEventListener(
            "click",
            event => {

                const targetId =
                    link.getAttribute("href");


                if (
                    !targetId ||
                    targetId === "#"
                ) {

                    return;

                }


                const target =
                    document.querySelector(
                        targetId
                    );


                if (!target) return;


                event.preventDefault();


                target.scrollIntoView({

                    behavior: "smooth",

                    block: "start"

                });

            }
        );

    });


    /* =====================================================
       PARALLAX DEL HERO
       ===================================================== */

    if (hero && heroBackground) {

        window.addEventListener(
            "scroll",
            () => {

                const rect =
                    hero.getBoundingClientRect();


                const progress =
                    -rect.top * 0.15;


                if (
                    rect.bottom > 0 &&
                    rect.top < window.innerHeight
                ) {

                    heroBackground.style.transform =
                        `scale(1.04) translateY(${progress}px)`;

                }

            },
            {
                passive: true
            }
        );

    }


    /* =====================================================
       PARALLAX PROBLEMA
       ===================================================== */

    if (problemBackground) {

        window.addEventListener(
            "scroll",
            () => {

                const section =
                    problemBackground
                        .parentElement;


                const rect =
                    section.getBoundingClientRect();


                if (
                    rect.bottom > 0 &&
                    rect.top <
                    window.innerHeight
                ) {

                    const movement =
                        (window.innerHeight -
                        rect.top) *
                        0.04;


                    problemBackground.style.transform =
                        `scale(1.08) translateY(${movement}px)`;

                }

            },
            {
                passive: true
            }
        );

    }


    /* =====================================================
       PARALLAX TREXA
       ===================================================== */

    if (trexaBackground) {

        window.addEventListener(
            "scroll",
            () => {

                const section =
                    trexaBackground
                        .parentElement;


                const rect =
                    section.getBoundingClientRect();


                if (
                    rect.bottom > 0 &&
                    rect.top <
                    window.innerHeight
                ) {

                    const movement =
                        (window.innerHeight -
                        rect.top) *
                        0.035;


                    trexaBackground.style.transform =
                        `translateY(${movement}px)`;

                }

            },
            {
                passive: true
            }
        );

    }


    /* =====================================================
       ANIMACIÓN RADAR
       ===================================================== */

    const radar =
        document.querySelector(".radar");


    if (radar) {

        let rotation = 0;


        function animateRadar() {

            rotation += 0.15;


            radar.style.transform =
                `rotate(${rotation}deg)`;


            requestAnimationFrame(
                animateRadar
            );

        }


        animateRadar();

    }


    /* =====================================================
       REVEAL ELEMENTS
       ===================================================== */

    const revealElements =
        document.querySelectorAll(
            `
            .eyebrow,
            .problem-heading h2,
            .problem-heading p,
            .section-heading h2,
            .section-heading p,
            .solution-card,
            .process-step,
            .industry,
            .statistics > div,
            .about-content h2,
            .about-content p,
            .contact h2,
            .contact p
            `
        );


    const observer =
        new IntersectionObserver(
            entries => {

                entries.forEach(
                    entry => {

                        if (
                            entry.isIntersecting
                        ) {

                            entry.target.classList.add(
                                "visible"
                            );


                            observer.unobserve(
                                entry.target
                            );

                        }

                    }
                );

            },
            {
                threshold: 0.15
            }
        );


    revealElements.forEach(
        element => {

            observer.observe(element);

        }
    );


    /* =====================================================
       PROCESO
       ===================================================== */

    const processSteps =
        document.querySelectorAll(
            ".process-step"
        );


    processSteps.forEach(
        (step, index) => {


            const observerStep =
                new IntersectionObserver(
                    entries => {

                        entries.forEach(
                            entry => {

                                if (
                                    entry.isIntersecting
                                ) {


                                    processSteps.forEach(
                                        item => {

                                            item.classList.remove(
                                                "active"
                                            );

                                        }
                                    );


                                    step.classList.add(
                                        "active"
                                    );

                                }

                            }
                        );

                    },
                    {
                        threshold: 0.6
                    }
                );


            observerStep.observe(step);

        }
    );


    /* =====================================================
       CONTADORES
       ===================================================== */

    const statistics =
        document.querySelectorAll(
            ".statistics strong"
        );


    let countersStarted = false;


    function animateCounters() {


        if (countersStarted) return;


        const statsSection =
            document.querySelector(
                ".statistics"
            );


        if (!statsSection) return;


        const rect =
            statsSection.getBoundingClientRect();


        if (
            rect.top <
            window.innerHeight * 0.8
        ) {


            countersStarted = true;


            statistics.forEach(
                counter => {


                    const original =
                        counter.textContent
                            .replace(
                                /[^0-9]/g,
                                ""
                            );


                    const target =
                        parseInt(
                            original
                        );


                    let current = 0;


                    const duration =
                        1800;


                    const start =
                        performance.now();


                    function updateCounter(
                        timestamp
                    ) {


                        const progress =
                            Math.min(
                                (
                                    timestamp -
                                    start
                                ) /
                                duration,
                                1
                            );


                        const eased =
                            1 -
                            Math.pow(
                                1 -
                                progress,
                                3
                            );


                        current =
                            Math.floor(
                                eased *
                                target
                            );


                        counter.textContent =
                            "+" +
                            current.toLocaleString(
                                "en-US"
                            );


                        if (
                            progress < 1
                        ) {

                            requestAnimationFrame(
                                updateCounter
                            );

                        }

                    }


                    requestAnimationFrame(
                        updateCounter
                    );


                }
            );


        }

    }


    window.addEventListener(
        "scroll",
        animateCounters,
        {
            passive: true
        }
    );


    animateCounters();


    /* =====================================================
       CONTACTO PARALLAX
       ===================================================== */

    if (contactBackground) {

        window.addEventListener(
            "scroll",
            () => {


                const section =
                    contactBackground
                        .parentElement;


                const rect =
                    section.getBoundingClientRect();


                if (
                    rect.bottom > 0 &&
                    rect.top <
                    window.innerHeight
                ) {


                    const movement =
                        (window.innerHeight -
                        rect.top) *
                        0.035;


                    contactBackground.style.transform =
                        `scale(1.04) translateY(${movement}px)`;


                }


            },
            {
                passive: true
            }
        );

    }


    /* =====================================================
       HOVER INDUSTRIAS
       ===================================================== */

    const industries =
        document.querySelectorAll(
            ".industry"
        );


    industries.forEach(
        industry => {


            industry.addEventListener(
                "mouseenter",
                () => {

                    industry.classList.add(
                        "hovered"
                    );

                }
            );


            industry.addEventListener(
                "mouseleave",
                () => {

                    industry.classList.remove(
                        "hovered"
                    );

                }
            );


        }
    );


    /* =====================================================
       BOTÓN MENU
       ===================================================== */

    const menuButton =
        document.querySelector(
            ".menu-button"
        );


    if (menuButton) {

        menuButton.addEventListener(
            "click",
            () => {

                document.body.classList.toggle(
                    "menu-open"
                );

            }
        );

    }


    /* =====================================================
       MENSAJE DE CARGA
       ===================================================== */

    console.log(
        "TREXA Soluciones | Web cargada correctamente."
    );


});
/* =====================================================
   MENU MOVIL
===================================================== */

const menuButton = document.querySelector(".menu-button");
const navigation = document.querySelector(".navigation");

if (menuButton && navigation) {

    menuButton.addEventListener("click", () => {

        navigation.classList.toggle("mobile-open");

    });

}