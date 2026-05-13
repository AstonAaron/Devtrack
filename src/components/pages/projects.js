// ─────────────────────────────────────────────
//  projects.js  —  your project data lives here
//  Add, remove, or edit entries as you build.
// ─────────────────────────────────────────────

const projects = [
  {
    id: 1,
    title: "DevTrack Portfolio",
    description:
      "(This is what you are currently on) A dynamic developer portfolio and skill-tracking app built with React. Features animated skill bars, filterable project cards, and a live code viewer.",
    tags: ["React", "JavaScript", "CSS"],
    githubUrl: "https://github.com/YOUR_USERNAME/devtrack",
    liveUrl: "",   // leave "" if no live demo
    featured: false,                           // featured cards get a highlight treatment
  },
  {
    id: 2,
    title: "Survival-Inventory",
    description: "A Stunning remake of a beloved mechanic from one of gamings most influential horror games",
    tags: ["React", "JavaScript", "CSS"],
    githubUrl: "https://github.com/AstonAaron/Survival-inventory-demo",
    liveUrl: "",
    featured: true,
  },
  
  {
    id: 3,
    title: "Barbershop website",
    description:
      "A responsive website for a local barbershop, featuring a modern design and easy navigation.",
    tags: ["JavaScript", "HTML", "CSS"],
    githubUrl: "https://github.com/AstonAaron/Rae-s-Barber-",
    liveUrl: "",
    featured: false,
  },
  {
    id: 4,
    title: "Authors website",
    description:
      "A stylized website showcasing a collection of works from my sister who is an author. This site is built with HTML and CSS, featuring a style inspired by her book covers.",
    tags: ["CSS", "HTML", "JavaScript"],
    githubUrl: "https://github.com/AstonAaron/VioletVixen-",
    liveUrl: "",
    featured: false,
  },
  {
    id: 5,
    title: "Coffee Shop",
    description:
      "A simple website for a coffee shop, built with React. It features a clean design and showcases the shop's menu and location.",
    tags: ["React", "JavaScript"],
    githubUrl: "https://github.com/AstonAaron/the-beans-place---Aston-",
    liveUrl: "",
    featured: false,
  },
  // ── Add more projects below this line ──
  // {
  //   id: 5,
  //   title: "My Next Project",
  //   description: "A short description of what it does.",
  //   tags: ["Python", "React"],
  //   githubUrl: "https://github.com/YOUR_USERNAME/repo-name",
  //   liveUrl: "",
  //   featured: false,
  // },
];

// All unique tags — auto-generated from the data above, no need to edit
export const ALL_TAGS = ["All", ...new Set(projects.flatMap((p) => p.tags))];

export default projects;
