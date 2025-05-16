const slug = new URLSearchParams(window.location.search).get("slug");
const project = projectsData[slug];

if (project) {
    updateSEO(project);
    renderProject(project);
} else {
    document.getElementById("project-container").innerHTML = "<p>❌ Project not found.</p>";
}

function updateSEO(project) {
    const title = `${project.title} | Projects`;
    const description = project.description;

    document.title = title;
    document.getElementById("meta-description").setAttribute("content", description);
    document.getElementById("og-title").setAttribute("content", title);
    document.getElementById("og-description").setAttribute("content", description);
    document.getElementById("og-url").setAttribute("content", window.location.href);
    document.getElementById("twitter-title").setAttribute("content", title);
    document.getElementById("twitter-description").setAttribute("content", description);
}

function renderProject(project) {
    const container = document.getElementById("project-container");

    container.innerHTML = `
        <h1>// ${project.title}</h1>
        <br>
        <p><strong>Description:</strong> ${project.description}</p>
        <section>
            <div class="tags">
                <p>🌐 Languages: ${project.tech.languages ? project.tech.languages.map(item => `<span class="tag">${item}</span>`).join("") : "N/A"}</p>
                <p>☣ Frameworks: ${project.tech.frameworks ? project.tech.frameworks.map(item => `<span class="tag">${item}</span>`).join("") : "N/A"}</p>
                <p>⚙ Tools: ${project.tech.tools ? project.tech.tools.map(item => `<span class="tag">${item}</span>`).join("") : "N/A"}</p>
            </div>
        </section>
        <img src="${project.image}" alt="${project.title}" class="project-banner" />

        <section>
            <h2>Overview</h2>
            <p>${project.details.overview}</p>
        </section>

        <section>
            <h2>Problem</h2>
            <p>${project.details.problem}</p>
        </section>

        <section>
            <h2>Task</h2>
            <p>${project.details.task}</p>
        </section>

        <section>
            <h2>Solutions</h2>
            <ul>
                ${project.details.solutions.map(item => `<li>${item}</li>`).join("")}
            </ul>
        </section>

        <section>
            <h2>Features</h2>
            <ul>
                ${project.details.features.map(item => `<li>${item}</li>`).join("")}
            </ul>
        </section>

        <section>
            <p><strong>Type:</strong> ${project.details.projectType}</p>
            <p><strong>Duration:</strong> ${project.details.duration}</p>
            <br>
            <p><em>${project.details.note ? project.details.note : ""}</em></p>

            ${project.details.github ? `<a href="${project.details.github}" target="_blank">GitHub</a>` : ""}
            ${project.details.live_demo ? `<a href="${project.details.live_demo}" target="_blank">Live Demo</a>` : ""}
        </section>
    `;
}
