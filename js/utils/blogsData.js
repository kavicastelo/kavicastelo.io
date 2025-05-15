const blogsData = {
    "how-i-built-my-saas": {
        title: "🚀 How I Built My SaaS",
        summary: "From idea to MVP — a behind-the-scenes breakdown.",
        link: "/blogs/how-i-built-my-saas",
        slug: "how-i-built-my-saas",
        content: "" +
            "<p><em>A breakdown of real challenges, ethical decisions, and hard-earned lessons from building a production-ready SaaS.</em></p>" +
            "\n" +
            "<h2>🧩 Understanding the Real Problem</h2>" +
            "<p>Every product begins with a problem — but not every problem is worth solving. I didn’t start with a product idea. I started by listening. What were job seekers struggling with? What did recruiters complain about?</p>" +
            "<p>Only after interviewing users, analyzing market gaps, and testing quick MVPs did I find the <strong>intersection of frustration and willingness to pay</strong>: the resume-job alignment issue.</p>" +
            "\n" +
            "<h2>⚠️ Common Challenges I Faced</h2>" +
            "<ul>" +
            "  <li><strong>Feature Creep:</strong> Trying to do everything from the start made my first version bloated and slow.</li>" +
            "  <li><strong>Technical Debt:</strong> Building fast meant I had to refactor hard later — especially around role-based access and analytics tracking.</li>" +
            "  <li><strong>Cross-platform Auth:</strong> Handling login across multiple subdomains while keeping sessions secure was a beast.</li>" +
            "  <li><strong>Content Fatigue:</strong> Blog, SEO, onboarding docs — building is one thing, explaining it is another.</li>" +
            "</ul>" +
            "\n" +
            "<h2>🎯 Best Practices That Saved Me</h2>" +
            "<ul>" +
            "  <li><strong>Modularization:</strong> I broke the app into smaller services (auth, tracking, content), so I could scale parts independently.</li>" +
            "  <li><strong>Utility Files for Static Data:</strong> Kept things fast and simple instead of spinning up unnecessary databases.</li>" +
            "  <li><strong>JSON-based Configuration:</strong> Made platform updates easier and reusable across clients.</li>" +
            "  <li><strong>User-first UI:</strong> Even devs hate ugly dashboards. Smooth animations and dark theme helped engagement.</li>" +
            "</ul>" +
            "\n" +
            "<h2>🧠 Ethical Considerations</h2>" +
            "<ul>" +
            "  <li><strong>Privacy First:</strong> I avoided storing sensitive resume data without user consent. Tracking is opt-in where possible.</li>" +
            "  <li><strong>No Dark Patterns:</strong> I avoided fake urgency, misleading buttons, or data-selling tactics.</li>" +
            "  <li><strong>Transparent Analytics:</strong> Instead of spying, I designed a console where users see what we track and why.</li>" +
            "</ul>" +
            "\n" +
            "<h2>🔍 Real Use Cases</h2>" +
            "<ul>" +
            "  <li><strong>Job Board Integrations:</strong> Personalized job feeds based on resume skill match.</li>" +
            "  <li><strong>Hiring Console:</strong> Recruiters get insights into who applied, how they match the JD, and what they lack.</li>" +
            "  <li><strong>ATS Scoring:</strong> Real-time resume feedback with keyword suggestions.</li>" +
            "</ul>" +
            "\n" +
            "<h2>💬 Final Thoughts</h2>" +
            "<p>Building SaaS is not about chasing trends. It's about <strong>crafting long-term solutions</strong> that solve consistent pain points — ethically and scalably.</p>" +
            "<p>It's also not a one-person game. Even if you build solo, you're part of a conversation — with users, platforms, and the broader tech ecosystem.</p>" +
            "\n" +
            "<p><strong>My advice?</strong> Start lean, stay focused, respect user trust — and let real feedback guide your roadmap.</p>"
    },
    "100-days-of-leetcode": {
        title: "📘 100 Days of LeetCode",
        summary: "The grind, the glory, and the growth of solving daily DSA challenges.",
        link: "/blogs/100-days-of-leetcode",
        slug: "100-days-of-leetcode",
        content: "" +
            "<p><em>The grind, the glory, and the growth of solving daily DSA challenges.</em></p>" +
            "\n" +
            "<p>They say consistency beats intensity — and 100 days of LeetCode proved that to me.</p>" +
            "<p>Every day for over 3 months, I committed at least an hour to solving data structure and algorithm problems, no matter what. Even during tough days or heavy deadlines — I didn’t skip.</p>" +
            "\n" +
            "<h2>📈 What Improved</h2>" +
            "<ul>" +
            "  <li>💡 Problem-solving speed and pattern recognition</li>" +
            "  <li>⚔️ Mastery of arrays, trees, graphs, dynamic programming</li>" +
            "  <li>🧠 Mental stamina and confidence in interviews</li>" +
            "</ul>" +
            "\n" +
            "<h2>🧪 My Daily Routine</h2>" +
            "<ol>" +
            "  <li>Warm-up: Easy or medium problem from past topics</li>" +
            "  <li>Challenge: A new problem outside my comfort zone</li>" +
            "  <li>Post-analysis: Study alternate solutions and time complexity</li>" +
            "</ol>" +
            "\n" +
            "<p>One thing that helped me the most? Writing brute force first, then optimizing.</p>" +
            "\n" +
            "<h2>🎯 Final Thoughts</h2>" +
            "<p>This challenge taught me more than any course. It’s not about streaks — it’s about <strong>building a problem-solving mindset</strong>.</p>\n" +
            "<p>If you're stuck, just keep pushing. Eventually, your brain catches up with your ambition.</p>"
    },
    "mastering-mongodb": {
        title: "📚 Mastering MongoDB",
        summary: "Lessons from building scalable NoSQL systems in production.",
        link: "/blogs/mastering-mongodb",
        slug: "mastering-mongodb",
        content: "" +
            "<p><em>Lessons from building scalable NoSQL systems in production.</em></p>" +
            "\n" +
            "<p>Relational databases are great — but when I started working on multi-tenant SaaS products with flexible schemas and high write throughput, MongoDB became my go-to.</p>" +
            "\n" +
            "<h2>⚙️ Where MongoDB Shined</h2>" +
            "<ul>" +
            "  <li>💾 Schema flexibility — ideal for evolving product features</li>" +
            "  <li>🚀 Fast writes and indexed reads at scale</li>" +
            "  <li>📡 JSON-style documents that fit naturally with JavaScript/TypeScript APIs</li>" +
            "</ul>" +
            "\n" +
            "<h2>🧩 Production Considerations</h2>" +
            "<ul>" +
            "  <li>📉 Avoiding unbounded array growth (thanks to $push pitfalls)</li>" +
            "  <li>🕵️‍♂️ Indexing strategies for complex queries</li>" +
            "  <li>📊 Aggregation pipelines for reporting without SQL joins</li>" +
            "  <li>🔐 Security: Limiting write permissions, managing data exposure</li>" +
            "</ul>" +
            "\n" +
            "<h2>💡 MongoDB Is Not Magic</h2>" +
            "<p>Many devs jump into Mongo thinking it's just “SQL without tables.” It’s not. You need to understand data modeling, performance tuning, and the operational quirks of distributed systems.</p>" +
            "\n" +
            "<p>But once you do — it’s one of the most powerful tools in your backend arsenal.</p>" +
            "\n" +
            "<p>Whether you're building a SaaS, analytics platform, or real-time dashboard — MongoDB can scale with you. Just remember: <strong>design your collections like you design your APIs — with purpose.</strong></p>"
    }
};
