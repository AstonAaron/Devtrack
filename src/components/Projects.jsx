import { useState } from "react";
import { Component } from "./ui/gradient-bars-background";
import projects, { ALL_TAGS } from "./pages/projects"; // Import project data and tag list
import "./pages/Projects.css"; // Import styles for the Projects page

// ── Tag color map — add new tags here as your stack grows
const TAG_COLORS = {
    React: "tag-react",
    JavaScript: "tag-js",
    CSS: "tag-css",
    HTML: "tag-html",
    Python: "tag-python"
};

// ── Single project card
function ProjectCard({ project }) {
    return (
        <article className={`proj-card ${project.featured ? "proj-card--featured" : ""}`}>
            {project.featured && <span className="featured-badge">Featured</span>}

            <h3 className="proj-title">{project.title}</h3>
            <p className="proj-desc">{project.description}</p>

            {/* Tech tags */}
            <div className="proj-tags">
                {project.tags.map((tag) => (
                    <span key={tag} className={`proj-tag ${TAG_COLORS[tag] || "tag-default"}`}>
                        {tag}
                    </span>
                ))}
            </div>

            {/* Action links */}
            <div className="proj-links">
                <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="proj-link proj-link--github"
                    aria-label={`View ${project.title} on GitHub`}>
                    {/* GitHub icon (inline SVG — no dependency needed) */}
                    <svg
                        width="15"
                        height="15"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        aria-hidden="true">
                        <path
                            d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303
              3.438 9.8 8.205 11.385.6.113.82-.258.82-.577
              0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61
              C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729
              1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305
              3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93
              0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176
              0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405
              1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23
              3.285-1.23.645 1.653.24 2.873.12 3.176.765.84
              1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475
              5.92.42.36.81 1.096.81 2.22 0 1.606-.015
              2.896-.015 3.286 0 .315.21.69.825.57C20.565
              22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
                        />
                    </svg>
                    GitHub
                </a>

                {project.liveUrl && (
                    <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="proj-link proj-link--live"
                        aria-label={`View live demo of ${project.title}`}>
                        {/* External link icon */}
                        <svg
                            width="13"
                            height="13"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2.5"
                            aria-hidden="true">
                            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                            <polyline points="15 3 21 3 21 9" />
                            <line x1="10" y1="14" x2="21" y2="3" />
                        </svg>
                        Live Demo
                    </a>
                )}
            </div>
        </article>
    );
}

// ── Main Projects page
export default function Projects() {
    const [activeTag, setActiveTag] = useState("All");

    const filtered =
        activeTag === "All" ? projects : projects.filter((p) => p.tags.includes(activeTag));

    return (
        <Component backgroundColor="rgb(2, 6, 23)">
            <section className="projects-page relative z-10">
                {/* Page header */}
                <header className="projects-header">
                    <p className="projects-eyebrow">Work</p>
                    <h1 className="projects-title">Projects</h1>
                    <p className="projects-sub">
                        A selection of things I've built. Each links directly to the GitHub repo.
                    </p>
                </header>

                {/* Filter bar */}
                <div className="filter-bar" role="group" aria-label="Filter projects by technology">
                    {ALL_TAGS.map((tag) => (
                        <button
                            key={tag}
                            className={`filter-btn ${activeTag === tag ? "filter-btn--active" : ""}`}
                            onClick={() => setActiveTag(tag)}
                            aria-pressed={activeTag === tag}>
                            {tag}
                        </button>
                    ))}
                </div>

                {/* Project count */}
                <p className="projects-count">
                    {filtered.length} project{filtered.length !== 1 ? "s" : ""}
                    {activeTag !== "All" && ` tagged "${activeTag}"`}
                </p>

                {/* Card grid */}
                {filtered.length > 0 ? (
                    <div className="proj-grid">
                        {filtered.map((project) => (
                            <ProjectCard key={project.id} project={project} />
                        ))}
                    </div>
                ) : (
                    <p className="proj-empty">No projects match this filter yet.</p>
                )}

                {/* GitHub profile link */}
                <div className="github-cta">
                    <p>Want to see everything?</p>
                    <a
                        href="https://github.com/AstonAaron"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="github-profile-link">
                        <svg
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            aria-hidden="true">
                            <path
                                d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303
              3.438 9.8 8.205 11.385.6.113.82-.258.82-.577
              0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61
              C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729
              1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305
              3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93
              0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176
              0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405
              1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23
              3.285-1.23.645 1.653.24 2.873.12 3.176.765.84
              1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475
              5.92.42.36.81 1.096.81 2.22 0 1.606-.015
              2.896-.015 3.286 0 .315.21.69.825.57C20.565
              22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
                            />
                        </svg>
                        View my GitHub profile →
                    </a>
                </div>
            </section>
        </Component>
    );
}
