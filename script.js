document.addEventListener("DOMContentLoaded", function () {
    const pullcord = document.getElementById("pullcord");

    if (pullcord) {
        const catgif = document.getElementById("catgif");

        // Check localStorage for dark mode preference
        let darkMode = localStorage.getItem("darkMode") === "enabled";

        function applyDarkMode() {
            document.body.classList.add("dark-mode");
            localStorage.setItem("darkMode", "enabled");
            pullcord.src = "img/pull_cord_light.png";

            if (catgif) {
                catgif.style.opacity = "0";
                setTimeout(() => {
                    catgif.src = "img/cat_gif_dark.gif";
                    catgif.style.opacity = "1";
                }, 500);
            }
        }

        function removeDarkMode() {
            document.body.classList.remove("dark-mode");
            localStorage.setItem("darkMode", "disabled");
            pullcord.src = "img/pull_cord_dark.png";

            if (catgif) {
                catgif.style.opacity = "0";
                setTimeout(() => {
                    catgif.src = "img/cat_gif_light.gif";
                    catgif.style.opacity = "1";
                }, 500);
            }
        }

        // Apply dark mode if it was enabled previously
        if (darkMode) {
            applyDarkMode();
        } else {
            removeDarkMode();
        }

        // Pullcord click handler to toggle dark mode
        pullcord.addEventListener("click", function () {
            darkMode = !darkMode;
            if (darkMode) {
                applyDarkMode();
            } else {
                removeDarkMode();
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
