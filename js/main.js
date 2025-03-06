// Mobile Menu Toggle
document.addEventListener("DOMContentLoaded", () => {
    const mobileMenuToggle = document.querySelector(".mobile-menu-toggle")
    const mobileMenu = document.querySelector(".mobile-menu")

    if (mobileMenuToggle && mobileMenu) {
        mobileMenuToggle.addEventListener("click", function () {
            mobileMenu.classList.toggle("active")

            // Toggle hamburger icon animation
            const hamburgerIcon = this.querySelector(".hamburger-icon")
            if (hamburgerIcon) {
                hamburgerIcon.classList.toggle("active")
            }
        })
    }

    // FAQ Accordion
    const faqItems = document.querySelectorAll(".faq-item")

    if (faqItems.length > 0) {
        faqItems.forEach((item) => {
            const question = item.querySelector(".faq-question")

            if (question) {
                question.addEventListener("click", () => {
                    // Close all other items
                    faqItems.forEach((otherItem) => {
                        if (otherItem !== item) {
                            otherItem.classList.remove("active")
                        }
                    })

                    // Toggle current item
                    item.classList.toggle("active")

                    // Update icon
                    const icon = question.querySelector(".toggle-icon i")
                    if (icon) {
                        if (item.classList.contains("active")) {
                            icon.className = "fas fa-minus"
                        } else {
                            icon.className = "fas fa-plus"
                        }
                    }
                })
            }
        })
    }

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

                // Scroll to target
                window.scrollTo({
                    top: targetElement.offsetTop - 80, // Offset for header
                    behavior: "smooth",
                })
            }
        })
    })

    // Add ripple effect to buttons
    const buttons = document.querySelectorAll(".btn")

    buttons.forEach((button) => {
        button.addEventListener("click", function (e) {
            const x = e.clientX - e.target.getBoundingClientRect().left
            const y = e.clientY - e.target.getBoundingClientRect().top

            const ripple = document.createElement("span")
            ripple.classList.add("ripple-effect")
            ripple.style.left = `${x}px`
            ripple.style.top = `${y}px`

            this.appendChild(ripple)

            setTimeout(() => {
                ripple.remove()
            }, 600)
        })
    })
})

