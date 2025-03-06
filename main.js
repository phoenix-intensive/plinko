document.addEventListener("DOMContentLoaded", () => {
    // Mobile Menu Toggle
    const mobileMenuToggle = document.querySelector(".mobile-menu-toggle")
    const mobileMenu = document.querySelector(".mobile-menu")
    const hamburgerIcon = document.querySelector(".hamburger-icon")

    if (mobileMenuToggle && mobileMenu) {
        mobileMenuToggle.addEventListener("click", () => {
            mobileMenu.classList.toggle("active")

            // Animate hamburger icon
            if (hamburgerIcon) {
                hamburgerIcon.classList.toggle("active")

                if (hamburgerIcon.classList.contains("active")) {
                    hamburgerIcon.style.transform = "rotate(45deg)"
                    hamburgerIcon.style.backgroundColor = "transparent"

                    if (hamburgerIcon.nextElementSibling) {
                        hamburgerIcon.nextElementSibling.style.transform = "rotate(45deg)"
                    }

                    if (hamburgerIcon.previousElementSibling) {
                        hamburgerIcon.previousElementSibling.style.transform = "rotate(-45deg)"
                    }
                } else {
                    hamburgerIcon.style.transform = ""
                    hamburgerIcon.style.backgroundColor = ""

                    if (hamburgerIcon.nextElementSibling) {
                        hamburgerIcon.nextElementSibling.style.transform = ""
                    }

                    if (hamburgerIcon.previousElementSibling) {
                        hamburgerIcon.previousElementSibling.style.transform = ""
                    }
                }
            }
        })
    }

    // Close mobile menu when clicking outside
    document.addEventListener("click", (event) => {
        if (
            mobileMenu &&
            mobileMenu.classList.contains("active") &&
            !mobileMenu.contains(event.target) &&
            !mobileMenuToggle.contains(event.target)
        ) {
            mobileMenu.classList.remove("active")

            if (hamburgerIcon && hamburgerIcon.classList.contains("active")) {
                hamburgerIcon.classList.remove("active")
                hamburgerIcon.style.transform = ""
                hamburgerIcon.style.backgroundColor = ""

                if (hamburgerIcon.nextElementSibling) {
                    hamburgerIcon.nextElementSibling.style.transform = ""
                }

                if (hamburgerIcon.previousElementSibling) {
                    hamburgerIcon.previousElementSibling.style.transform = ""
                }
            }
        }
    })

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault()

            const targetId = this.getAttribute("href")
            if (targetId === "#") return

            const targetElement = document.querySelector(targetId)
            if (targetElement) {
                // Close mobile menu if open
                if (mobileMenu && mobileMenu.classList.contains("active")) {
                    mobileMenu.classList.remove("active")
                }

                window.scrollTo({
                    top: targetElement.offsetTop - 80, // Offset for header
                    behavior: "smooth",
                })
            }
        })
    })

    // FAQ Accordion
    const faqItems = document.querySelectorAll(".faq-item")

    faqItems.forEach((item) => {
        const question = item.querySelector(".faq-question")
        const toggleIcon = item.querySelector(".toggle-icon i")

        question.addEventListener("click", () => {
            // Close all other items
            faqItems.forEach((otherItem) => {
                if (otherItem !== item && otherItem.classList.contains("active")) {
                    otherItem.classList.remove("active")
                    const otherIcon = otherItem.querySelector(".toggle-icon i")
                    if (otherIcon) {
                        otherIcon.className = "fas fa-plus"
                    }
                }
            })

            // Toggle current item
            item.classList.toggle("active")

            if (toggleIcon) {
                toggleIcon.className = item.classList.contains("active") ? "fas fa-minus" : "fas fa-plus"
            }
        })
    })

    // Animate elements on scroll
    const animateOnScroll = () => {
        const elements = document.querySelectorAll(
            ".feature-card, .step-card, .tip-card, .tech-card, .feature-item-horizontal, .download-card",
        )

        elements.forEach((element) => {
            const elementPosition = element.getBoundingClientRect().top
            const windowHeight = window.innerHeight

            if (elementPosition < windowHeight * 0.8) {
                element.classList.add("animated")
                element.style.opacity = "1"
                element.style.transform = "translateY(0)"
            }
        })
    }

    // Set initial styles for animation
    const elementsToAnimate = document.querySelectorAll(
        ".feature-card, .step-card, .tip-card, .tech-card, .feature-item-horizontal, .download-card",
    )

    elementsToAnimate.forEach((element) => {
        element.style.opacity = "0"
        element.style.transform = "translateY(20px)"
        element.style.transition = "opacity 0.5s ease, transform 0.5s ease"
    })

    // Run animation on load and scroll
    window.addEventListener("load", animateOnScroll)
    window.addEventListener("scroll", animateOnScroll)

    // Newsletter form submission
    const newsletterForm = document.querySelector(".newsletter-form")

    if (newsletterForm) {
        newsletterForm.addEventListener("submit", function (e) {
            e.preventDefault()

            const emailInput = this.querySelector('input[type="email"]')
            const email = emailInput.value.trim()

            if (email) {
                // Here you would typically send the email to your server
                // For demo purposes, we'll just show an alert
                alert(`Thank you for subscribing with ${email}! You'll receive our latest Plinko tips and offers.`)
                emailInput.value = ""
            }
        })
    }

    // Add hover effects to buttons
    const buttons = document.querySelectorAll(".btn")

    buttons.forEach((button) => {
        button.addEventListener("mouseenter", () => {
            if (button.classList.contains("btn-primary")) {
                button.style.transform = "translateY(-3px)"
                button.style.boxShadow = "0 10px 20px rgba(30, 86, 160, 0.3)"
            } else if (button.classList.contains("btn-secondary")) {
                button.style.transform = "translateY(-3px)"
                button.style.boxShadow = "0 10px 20px rgba(246, 198, 103, 0.3)"
            } else if (button.classList.contains("btn-outline")) {
                button.style.transform = "translateY(-3px)"
            }
        })

        button.addEventListener("mouseleave", () => {
            button.style.transform = ""
            button.style.boxShadow = ""
        })
    })
})

