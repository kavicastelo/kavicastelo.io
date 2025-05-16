const projectGrid = document.querySelector(".projects-grid");
const blogsGrid = document.querySelector(".blogs-grid");

Object.keys(projectsData).forEach(key => {
    const project = projectsData[key];
    projectGrid.innerHTML += `
    <div class="project-card" data-project="${project.slug}">
        <h3>${project.title}</h3>
        <p>${project.description}</p>
    </div>`
});

Object.keys(blogsData).forEach(key => {
    const blog = blogsData[key];
    blogsGrid.innerHTML += `
    <div class="blog-card" data-url="${blog.slug}">
        <h3>${blog.title}</h3>
        <p>${blog.summary}</p>
    </div>`
});

function getBasePath() {
    const pathParts = window.location.pathname.split("/");
    if (pathParts.length > 1) {
        return window.location.origin + "/" + pathParts[1]; // e.g., kavicastelo.io
    }
    return window.location.origin;
}

// Blog click navigation
document.querySelectorAll(".blog-card").forEach(card => {
    card.addEventListener("click", () => {
        const basePath = getBasePath();
        const targetUrl = `${basePath}/blogs/view.html?slug=${card.getAttribute("data-url")}`;
        if (targetUrl) window.open(targetUrl, "_blank");
    });
});

// Project click navigation
document.querySelectorAll(".project-card").forEach(card => {
    card.addEventListener("click", () => {
        const basePath = getBasePath();
        const targetUrl = `${basePath}/projects/view.html?slug=${card.getAttribute("data-project")}`;
        if (targetUrl) window.open(targetUrl, "_blank");
    });
});
