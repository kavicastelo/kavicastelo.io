gsap.registerPlugin(TextPlugin);

// Command history
const terminalInput = document.getElementById("terminal-command");
const terminalOutput = document.getElementById("terminal-output");

const commandHistory = [];
let historyIndex = -1;

// Utility function with GSAP typing effect
function writeOutput(text, delay = 0) {
    const p = document.createElement("p");
    terminalOutput.appendChild(p);

    gsap.fromTo(p, { text: "" }, {
        duration: text.length * 0.02,
        text: text,
        delay,
        ease: "none",
        onUpdate: () => {
            terminalOutput.scrollTop = terminalOutput.scrollHeight;
        }
    });
}

// Command actions
const commands = {
    help: () => {
        writeOutput("Available commands:");
        writeOutput("- about");
        writeOutput("- projects");
        writeOutput("- view project [slug]");
        writeOutput("- read blog [slug]");
        writeOutput("- ls projects");
        writeOutput("- ls blogs");
        writeOutput("- contact");
        writeOutput("- whoami");
        writeOutput("- sudo");
        writeOutput("- fortune");
        writeOutput("- clear");
    },

    clear: () => (terminalOutput.innerHTML = ""),

    about: () => {
        writeOutput("Scrolling to about...");
        document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" });
    },

    projects: () => {
        writeOutput("Scrolling to projects...");
        document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
    },

    "ls projects": () => {
        writeOutput("Available projects:");
        Object.keys(projectsData).forEach(key => writeOutput(`- ${key}`));
    },

    "ls blogs": () => {
        writeOutput("Available blogs:");
        Object.keys(blogsData).forEach(key => writeOutput(`- ${key}`));
    },

    "view project": (slug) => {
        writeOutput(`Fetching project: ${slug}...`);
        setTimeout(() => {
            console.log(slug)
            const project = projectsData[slug];
            console.log(project)
            if (project) {
                writeOutput(`${project.title}`);
                writeOutput(`${project.description}`);
                // writeOutput(`🛠 Stack: ${project.stack.join(", ")}`);
                if (project.link) writeOutput(`🔗 Link: ${project.link}`);
                if (project.slug) {
                    writeOutput(`🔗 Opening...`);
                    const baseURL = window.location.origin || (window.location.protocol + "//" + window.location.host);
                    const targetUrl = `${baseURL}/projects/view.html?slug=${project.slug}`;
                    window.open(targetUrl, "_blank");
                }
            } else {
                writeOutput("❌ Project not found.");
            }
        }, 800);
    },

    "read blog": (slug) => {
        writeOutput(`Opening blog: ${slug}...`);
        setTimeout(() => {
            const blog = blogsData[slug];
            if (blog) {
                writeOutput(`${blog.title}`);
                writeOutput(`${blog.summary}`);
                if (blog.slug) {
                    writeOutput(`🔗 Opening...`);
                    const baseURL = window.location.origin || (window.location.protocol + "//" + window.location.host);
                    const targetUrl = `${baseURL}/blogs/view.html?slug=${blog.slug}`;
                    window.open(targetUrl, "_blank");
                }
            } else {
                writeOutput("❌ Blog not found.");
            }
        }, 700);
    },

    contact: () => {
        writeOutput("Scrolling to contact...");
        document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
    },

    whoami: () => writeOutput("👨‍💻 Kavi Castelo — Software Engineer, SaaS Creator, UI Craftsman"),
    sudo: () => writeOutput("🔒 Permission denied. This incident will be reported."),
    fortune: () => {
        const fortunes = [
            "👁️ 'Code is poetry — but yours has a semicolon problem.'",
            "🎯 'Discipline beats talent when talent doesn’t show up.'",
            "🧠 'You’re not stuck — you’re just one thought away from a breakthrough.'",
            "🔥 'Bug? No. Feature with unexpected attitude.'"
        ];
        const pick = fortunes[Math.floor(Math.random() * fortunes.length)];
        writeOutput(pick);
    }
};

const commandAliases = {
    a: "about",
    p: "projects",
    c: "contact",
    ls: "help", // fallback for beginners
    "ls projects": "ls projects", // avoid ls override
    "ls blogs": "ls blogs",
    "ls p": "ls projects",
    "ls b": "ls blogs",
    "vp": "view project",
    "rb": "read blog",
    who: "whoami",
    f: "fortune",
    cls: "clear"
};

// Terminal input event handler
terminalInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        const input = terminalInput.value.trim();
        if (!input) return;

        writeOutput("> " + input);
        commandHistory.push(input);
        historyIndex = commandHistory.length;
        terminalInput.value = "";

        const rawInput = input.toLowerCase();
        const parts = rawInput.split(" ");
        let cmd = parts[0];
        let second = parts[1];
        let fullCommand = cmd + (second ? ` ${second}` : "");
        let param = parts.slice(2).join(" ") || second;

        // if (commands[fullCommand]) {
        //     commands[fullCommand](param);
        // } else if (commands[cmd]) {
        //     commands[cmd](parts.slice(1).join(" "));
        // } else {
        //     writeOutput("❌ Command not recognized. Type 'help' to see available commands.");
        // }

// Check aliases
        if (commandAliases[fullCommand]) {
            fullCommand = commandAliases[fullCommand];
            const newParts = fullCommand.split(" ");
            cmd = newParts[0];
            second = newParts[1];
            fullCommand = cmd + (second ? ` ${second}` : "");
            param = parts.slice(commandAliases[fullCommand]?.split(" ").length).join(" ") || "";
        } else if (commandAliases[cmd]) {
            fullCommand = commandAliases[cmd];
            param = parts.slice(1).join(" ");
        }

// Execute command
        if (commands[fullCommand]) {
            commands[fullCommand](param);
        } else if (commands[cmd]) {
            commands[cmd](param);
        } else {
            writeOutput("❌ Command not recognized. Type 'help' to see available commands.");
        }
    }

    // Command history (⬆️ / ⬇️)
    if (e.key === "ArrowUp") {
        if (historyIndex > 0) {
            historyIndex--;
            terminalInput.value = commandHistory[historyIndex];
        }
        e.preventDefault();
    } else if (e.key === "ArrowDown") {
        if (historyIndex < commandHistory.length - 1) {
            historyIndex++;
            terminalInput.value = commandHistory[historyIndex];
        } else {
            terminalInput.value = "";
            historyIndex = commandHistory.length;
        }
        e.preventDefault();
    }
});

// Focus input on page click
document.addEventListener("click", () => {
    const isInputElement = document.activeElement.tagName === "INPUT" || document.activeElement.tagName === "TEXTAREA";
    if (isInputElement) return;
    terminalInput.focus();
});
