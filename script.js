document.addEventListener("DOMContentLoaded", function () {
    const pullcord = document.getElementById("pullcord");

    if (pullcord) {
        const title = document.querySelector(".title");
        const navbar = document.querySelector(".navbar");
        const buttons = document.querySelectorAll(".button");
        const catgif = document.getElementById("catgif");

        // Check localStorage for dark mode preference
        let darkMode = localStorage.getItem("darkMode") === "enabled";

        // Apply dark mode if previously enabled
        if (darkMode) {
            document.body.classList.add("dark-mode");
            document.body.style.transition = 'none';
            pullcord.src = "img/pull_cord_light.png";
            if (title) title.style.color = "#ffffff";
            if (navbar) navbar.style.backgroundColor = "#4a4a4a";
            buttons.forEach(button => {
                button.style.backgroundColor = "#666";
                button.style.color = "#fff";
            });
            if (catgif) catgif.src = "img/cat_gif_dark.gif";

            setTimeout(() => {
                document.body.style.transition = '';
            }, 10);
        }

        pullcord.addEventListener("click", function () {
            document.body.classList.toggle("dark-mode");
            darkMode = !darkMode;

            if (darkMode) {
                localStorage.setItem("darkMode", "enabled");
                pullcord.src = "img/pull_cord_light.png";
                if (title) title.style.color = "#ffffff";
                if (navbar) navbar.style.backgroundColor = "#4a4a4a";
                buttons.forEach(button => {
                    button.style.backgroundColor = "#666";
                    button.style.color = "#fff";
                });
                if (catgif) {
                    catgif.style.opacity = "0";
                    catgif.src = "img/cat_gif_dark.gif";
                    setTimeout(() => {
                        catgif.style.opacity = "1";
                    }, 1000);
                }
            } else {
                localStorage.setItem("darkMode", "disabled");
                pullcord.src = "img/pull_cord_dark.png";
                if (title) title.style.color = "#715b82";
                if (navbar) navbar.style.backgroundColor = "#d3b4e6";
                buttons.forEach(button => {
                    button.style.backgroundColor = "#9a7baf";
                    button.style.color = "white";
                });
                if (catgif) catgif.src = "img/cat_gif_light.gif";
            }
        });
    }

    // Carousel logic
    const carousel = document.querySelector('.carousel');
    if (carousel) {
        const images = document.querySelectorAll('.carousel-img');
        const prevBtn = document.getElementById('prevBtn');
        const nextBtn = document.getElementById('nextBtn');
        let index = 0;
        const totalImages = images.length;

        function updateCarousel() {
            carousel.style.transform = `translateX(-${index * 100}%)`;
        }

        nextBtn.addEventListener('click', () => {
            index = (index + 1) % totalImages;
            updateCarousel();
        });

        prevBtn.addEventListener('click', () => {
            index = (index - 1 + totalImages) % totalImages;
            updateCarousel();
        });

        setInterval(() => {
            index = (index + 1) % totalImages;
            updateCarousel();
        }, 10000);

        updateCarousel();
    }

    // Video loader logic
    const video = document.getElementById("campusVideo");
    const loader = document.getElementById("videoLoader");

    if (video) {
        loader.style.display = "block";
        video.style.display = "none";

        video.onload = function () {
            loader.style.display = "none";
            video.style.display = "block";
        };

        video.onreadystatechange = function () {
            if (video.readyState === "complete") {
                loader.style.display = "none";
                video.style.display = "block";
            }
        };

        setTimeout(() => {
            loader.style.display = "none";
            video.style.display = "block";
        }, 5000);
    }

    // Contact Form
    const contactForm = document.getElementById("contactForm");

    if (contactForm) {
        contactForm.addEventListener("submit", function (event) {
            alert("Thank you for your message! We'll get back to you soon.");
        });
    }
});
