// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

document.addEventListener("DOMContentLoaded", () => {
    const element = document.querySelector(".scramble-text");
    const finalText = element.dataset.text;
    scrambleText(element, finalText, 1);

    // Animate 'About' lines
    document.querySelectorAll(".terminal-box .line").forEach((line, i) => {
        gsap.from(line, {
            scrollTrigger: {
                trigger: line,
                start: "top 80%",
                end: "top 20%",
                scrub: true
            },
            opacity: 0,
            y: 20,
            stagger: 0.2,
            delay: i * 0.05,
            duration: 0.6,
            ease: "power2.out"
        });
    });

    // Animate project cards
    document.querySelectorAll(".projects-grid .project-card").forEach((card, i) => {
        gsap.from(card, {
            scrollTrigger: {
                trigger: card,
                start: "top 80%",
                end: "top 60%",
                scrub: true
            },
            opacity: 0,
            y: 30,
            duration: 0.6,
            ease: "power2.out",
            delay: i * 0.05
        });
    });

    // Animate blog cards
    document.querySelectorAll(".blogs-grid .blog-card").forEach((card, i) => {
        gsap.from(card, {
            scrollTrigger: {
                trigger: card,
                scrub: true,
                start: "top 80%",
                end: "top 60%"
            },
            opacity: 0,
            y: 30,
            ease: "power2.out",
            delay: i * 0.05
        });
    });

    // Animate Contact Section on Scroll
    gsap.from(".contact-container", {
        scrollTrigger: {
            trigger: "#contact",
            start: "top 70%",
            toggleActions: "play none none reverse"
        },
        opacity: 0,
        y: 40,
        duration: 1,
        ease: "power2.out"
    });

// Form Submit Handler
    document.getElementById("contact-form").addEventListener("submit", function (e) {
        e.preventDefault();

        // Gather form data
        const name = this.name.value.trim();
        const email = this.email.value.trim();
        const message = this.message.value.trim();

        // Simulate sending
        writeOutput(`Sending message from ${name} <${email}>...`);
        setTimeout(() => {
            writeOutput("✅ Message sent successfully!");
        }, 1200);

        this.reset();
    });
});

function scrambleText(element, finalText, duration = 2) {
    const chars = "!@#$%^&*()_+=-{}[]|;:<>,.?/";
    let iterations = 0;
    const interval = setInterval(() => {
        element.textContent = finalText
            .split("")
            .map((char, i) => {
                if (i < iterations) return char;
                return chars[Math.floor(Math.random() * chars.length)];
            })
            .join("");

        if (iterations >= finalText.length) clearInterval(interval);
        iterations += 1 / (duration * 60); // 60 fps
    }, 1000 / 60);
}

// Blog click navigation
document.querySelectorAll(".blog-card").forEach(card => {
    card.addEventListener("click", () => {
        const baseURL = window.location.origin || (window.location.protocol + "//" + window.location.host);
        const targetUrl = `${baseURL}/blogs/view.html?slug=${card.getAttribute("data-url")}`;
        if (targetUrl)window.open(targetUrl, "_blank");
    });
});
