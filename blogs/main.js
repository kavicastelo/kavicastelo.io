const params = new URLSearchParams(window.location.search);
const slug = params.get("slug");

const blog = blogsData[slug];
if (blog) {
    updateSEO(blog);
    renderBlog(blog);
} else {
    document.getElementById("blog-title").textContent = "// 404 - Not Found";
    document.getElementById("blog-content").textContent = `No blog found with slug: ${slug}`;
}

function updateSEO(blog) {
    const title = blog.title + " | Kavi Castelo";
    const description = blog.summary;

    document.title = title;

    document.getElementById("meta-description").setAttribute("content", description);
    document.getElementById("og-title").setAttribute("content", title);
    document.getElementById("og-description").setAttribute("content", description);
    document.getElementById("og-url").setAttribute("content", window.location.href);
    document.getElementById("twitter-title").setAttribute("content", title);
    document.getElementById("twitter-description").setAttribute("content", description);
}

function renderBlog(blog) {
    document.getElementById("blog-title").textContent = `// ${blog.title}`;
    document.getElementById("blog-content").innerHTML = blog.content;
}