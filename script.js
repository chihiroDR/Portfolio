document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - headerHeight;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Fade in elements on scroll
    const fadeElements = document.querySelectorAll('.section');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });

    fadeElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.8s ease-out, transform 0.8s ease-out';
        observer.observe(el);
    });

    // Mobile Menu Toggle
    const hamburger = document.querySelector('.header__hamburger');
    const nav = document.querySelector('.header__nav');

    if (hamburger && nav) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            nav.classList.toggle('active');
        });

        // Close menu when link is clicked
        nav.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                nav.classList.remove('active');
            });
        });
    }

    // Education PRO Program Toggle
    const toggleBtn = document.getElementById('toggle-program-btn');
    const programDetails = document.getElementById('program-details');
    const educationContainer = document.querySelector('.education-pro__inner');
    const digitalBtn = document.getElementById('education-pro-digital-btn');
    const closeBtnBottom = document.getElementById('close-program-btn-bottom');

    if (toggleBtn && programDetails) {
        toggleBtn.addEventListener('click', (e) => {
            e.preventDefault();
            if (programDetails.style.display === 'none') {
                programDetails.style.display = 'block';
                // Hide top button instead of changing text
                toggleBtn.style.display = 'none';

                if (educationContainer) educationContainer.classList.add('expanded');
                if (digitalBtn) digitalBtn.style.display = 'none';
            } else {
                // This branch usually won't be reached if top button is hidden, 
                // but good to keep for completeness or if logic changes.
                programDetails.style.display = 'none';
                toggleBtn.style.display = 'inline-block';
                if (educationContainer) educationContainer.classList.remove('expanded');
                if (digitalBtn) digitalBtn.style.display = '';
            }
        });
    }

    if (closeBtnBottom && programDetails && toggleBtn) {
        closeBtnBottom.addEventListener('click', (e) => {
            e.preventDefault();
            programDetails.style.display = 'none';
            toggleBtn.style.display = 'inline-block';

            if (educationContainer) educationContainer.classList.remove('expanded');
            if (digitalBtn) digitalBtn.style.display = '';

            // Scroll back to the section
            const section = document.getElementById('education-pro');
            if (section) {
                const headerHeight = document.querySelector('.header').offsetHeight || 0;
                const targetPosition = section.getBoundingClientRect().top + window.scrollY - headerHeight;
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    }

    // General Books Toggle
    const booksToggleBtn = document.getElementById('toggle-books-btn');
    const booksDetails = document.getElementById('books-details');

    if (booksToggleBtn && booksDetails) {
        booksToggleBtn.addEventListener('click', (e) => {
            e.preventDefault();
            if (booksDetails.style.display === 'none') {
                booksDetails.style.display = 'block';
                booksToggleBtn.textContent = '閉じる';
            } else {
                booksDetails.style.display = 'none';
                booksToggleBtn.textContent = '詳しく';

                // Scroll back to the publications section
                const section = document.getElementById('publications');
                if (section) {
                    const headerHeight = document.querySelector('.header').offsetHeight || 0;
                    const targetPosition = section.getBoundingClientRect().top + window.scrollY - headerHeight;
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            }
        });
    }

    // General Books Bottom Close Button
    const booksCloseBtnBottom = document.getElementById('close-books-btn-bottom');

    if (booksCloseBtnBottom && booksDetails && booksToggleBtn) {
        booksCloseBtnBottom.addEventListener('click', (e) => {
            e.preventDefault();
            booksDetails.style.display = 'none';
            booksToggleBtn.textContent = '詳しく';

            // Scroll back to the publications section
            const section = document.getElementById('publications');
            if (section) {
                const headerHeight = document.querySelector('.header').offsetHeight || 0;
                const targetPosition = section.getBoundingClientRect().top + window.scrollY - headerHeight;
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    }

    // Booklet Series Toggle
    const bookletToggleBtn = document.getElementById('toggle-booklet-btn');
    const bookletDetails = document.getElementById('booklet-details');

    if (bookletToggleBtn && bookletDetails) {
        bookletToggleBtn.addEventListener('click', (e) => {
            e.preventDefault();
            if (bookletDetails.style.display === 'none') {
                bookletDetails.style.display = 'block';
                bookletToggleBtn.textContent = '閉じる';
            } else {
                bookletDetails.style.display = 'none';
                bookletToggleBtn.textContent = '詳しく';

                // Scroll back to the publications section
                const section = document.getElementById('publications');
                if (section) {
                    const headerHeight = document.querySelector('.header').offsetHeight || 0;
                    const targetPosition = section.getBoundingClientRect().top + window.scrollY - headerHeight;
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            }
        });
    }

    // Booklet Series Bottom Close Button
    const bookletCloseBtnBottom = document.getElementById('close-booklet-btn-bottom');

    if (bookletCloseBtnBottom && bookletDetails && bookletToggleBtn) {
        bookletCloseBtnBottom.addEventListener('click', (e) => {
            e.preventDefault();
            bookletDetails.style.display = 'none';
            bookletToggleBtn.textContent = '詳しく';

            // Scroll back to the publications section
            const section = document.getElementById('publications');
            if (section) {
                const headerHeight = document.querySelector('.header').offsetHeight || 0;
                const targetPosition = section.getBoundingClientRect().top + window.scrollY - headerHeight;
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    }

    // School Management Toggle
    const schoolToggleBtn = document.getElementById('toggle-school-btn');
    const schoolDetails = document.getElementById('school-details');
    const schoolCloseBtnBottom = document.getElementById('close-school-btn-bottom');

    if (schoolToggleBtn && schoolDetails) {
        schoolToggleBtn.addEventListener('click', (e) => {
            e.preventDefault();
            if (schoolDetails.style.display === 'none') {
                schoolDetails.style.display = 'block';
                // Hide the top button as requested
                schoolToggleBtn.style.display = 'none';
            } else {
                schoolDetails.style.display = 'none';
                schoolToggleBtn.style.display = 'inline-block';

                // Scroll back to the business section
                const section = document.getElementById('business');
                if (section) {
                    const headerHeight = document.querySelector('.header').offsetHeight || 0;
                    const targetPosition = section.getBoundingClientRect().top + window.scrollY - headerHeight;
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            }
        });
    }

    if (schoolCloseBtnBottom && schoolDetails && schoolToggleBtn) {
        schoolCloseBtnBottom.addEventListener('click', (e) => {
            e.preventDefault();
            schoolDetails.style.display = 'none';
            // Show the top button again
            schoolToggleBtn.style.display = 'inline-block';

            // Scroll back
            const section = document.getElementById('business');
            if (section) {
                const headerHeight = document.querySelector('.header').offsetHeight || 0;
                const targetPosition = section.getBoundingClientRect().top + window.scrollY - headerHeight;
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    }

    // Digital Certification Toggle
    const digitalToggleBtn = document.getElementById('toggle-digital-btn');
    const digitalDetails = document.getElementById('digital-details');
    const digitalCloseBtnBottom = document.getElementById('close-digital-btn-bottom');

    if (digitalToggleBtn && digitalDetails) {
        digitalToggleBtn.addEventListener('click', (e) => {
            e.preventDefault();
            if (digitalDetails.style.display === 'none') {
                digitalDetails.style.display = 'block';
                // Hide the top button as requested
                digitalToggleBtn.style.display = 'none';
            } else {
                digitalDetails.style.display = 'none';
                digitalToggleBtn.style.display = 'inline-block';

                // Scroll back
                const section = document.getElementById('business');
                if (section) {
                    const headerHeight = document.querySelector('.header').offsetHeight || 0;
                    const targetPosition = section.getBoundingClientRect().top + window.scrollY - headerHeight;
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            }
        });
    }

    if (digitalCloseBtnBottom && digitalDetails && digitalToggleBtn) {
        digitalCloseBtnBottom.addEventListener('click', (e) => {
            e.preventDefault();
            digitalDetails.style.display = 'none';
            // Show the top button again
            digitalToggleBtn.style.display = 'inline-block';

            // Scroll back
            const section = document.getElementById('business');
            if (section) {
                const headerHeight = document.querySelector('.header').offsetHeight || 0;
                const targetPosition = section.getBoundingClientRect().top + window.scrollY - headerHeight;
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    }

    // Header scroll background change
    const header = document.querySelector('.header');
    const greetingSection = document.getElementById('greeting');
    const educationSection = document.getElementById('education-pro');

    const handleScroll = () => {
        if (!header) return;

        // Is Scrolled (Changes hamburger color etc)
        if (greetingSection) {
            const greetingTop = greetingSection.getBoundingClientRect().top;
            if (greetingTop <= header.offsetHeight) {
                header.classList.add('is-scrolled');
            } else {
                header.classList.remove('is-scrolled');
            }
        }

        // Is Opaque (Shows background color and shadow)
        // On mobile home page, wait until education section
        let triggerSection = greetingSection;
        if (window.innerWidth <= 768 && educationSection) {
            triggerSection = educationSection;
        }

        if (triggerSection) {
            const triggerTop = triggerSection.getBoundingClientRect().top;
            if (triggerTop <= header.offsetHeight) {
                header.classList.add('header--opaque');
            } else {
                header.classList.remove('header--opaque');
            }
        } else if (window.scrollY > 50) {
            // Fallback for pages without these sections
            header.classList.add('is-scrolled');
            header.classList.add('header--opaque');
        } else {
            header.classList.remove('is-scrolled');
            header.classList.remove('header--opaque');
        }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    // Add visible class styling dynamically
    const style = document.createElement('style');
    style.innerHTML = `
        .section.visible {
            opacity: 1 !important;
            transform: translateY(0) !important;
        }
    `;
    document.head.appendChild(style);
});
