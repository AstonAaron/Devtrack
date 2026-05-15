import OrbitingSkills from "./ui/orbiting-skills";
import { Component } from "./ui/gradient-bars-background";
import logo from "../assets/logo.png";
import profile from "../assets/profile.jpg";
import htmlCssCert from "../assets/HTMLCSS_Cert.png";
import javaScriptCert from "../assets/JavaScript_Cert.png";
import reactCert from "../assets/React_Cert.png";
import fiberOpticCert from "../assets/fiber_optic.png";
import clearanceCert from "../assets/clearance.png";

const certifications = [
    {
        title: "HTML5 & CSS3 Certification",
        issuer: "VetBoss COITB",
        image: htmlCssCert,
        status: "Active"
    },
    {
        title: "JavaScript Certification",
        issuer: "VetBoss COITB",
        image: javaScriptCert,
        status: "Active"
    },
    {
        title: "React Certification",
        issuer: "VetBoss COITB",
        image: reactCert,
        status: "Active"
    },
    {
        title: "Fiber Optic Certification",
        issuer: "U.S. Government",
        image: fiberOpticCert,
        status: "Current"
    },
    {
        title: "Top Secret SCI Clearance",
        issuer: "U.S. Government",
        image: clearanceCert,
        status: "Current"
    }
];

export default function Home() {
    return (
        <Component backgroundColor="rgb(2, 6, 23)">
            <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-center gap-10 px-4 py-8">
                <img
                    src={logo}
                    alt="Logo banner"
                    className="mx-auto w-full max-w-105 object-contain sm:h-[24vh] md:h-[28vh] lg:h-[32vh]"
                />

                <style>{`
                    .wavy-text {
                        font-size: 0.75rem;
                        font-weight: 600;
                        color: transparent;
                        background: linear-gradient(90deg, transparent, white, transparent);
                        background-size: 140% 100%;
                        -webkit-background-clip: text;
                        background-clip: text;
                        animation: loading 2s ease-in-out infinite;
                    }
                    @keyframes loading {
                        0% { background-position: -200% 0; }
                        100% { background-position: 200% 0; }
                    }
                    @media (min-width: 640px) {
                        .wavy-text {
                            font-size: 1.75rem;
                        }
                    }
                    @media (min-width: 1024px) {
                        .wavy-text {
                            font-size: 4.75rem;
                        }
                    }
                `}</style>

                <h2 className="wavy-text">Check out the tabs to explore further</h2>

                <section className="w-full rounded-3xl border border-white/10 bg-slate-900/80 p-6 shadow-2xl backdrop-blur-xl">
                    <div className="grid gap-6 lg:grid-cols-[280px_1fr] lg:items-center">
                        <div className="mx-auto w-full max-w-70 overflow-hidden rounded-3xl border border-white/10 shadow-2xl">
                            <img
                                src={profile}
                                alt="Profile"
                                className="h-full w-full object-cover"
                            />
                        </div>

                        <div className="space-y-4 text-slate-100">
                            <h2 className="text-3xl font-semibold text-white">Who I Am</h2>

                            <p className="text-slate-300 leading-7">
                                After 10 years of serving in the United States Navy, I have
                                transferred my mechanical and electrical engineering skills into
                                programming. I build modern, responsive web experiences with both
                                front-end and back-end technologies.
                            </p>

                            <div className="grid gap-3 sm:grid-cols-2">
                                <div className="rounded-3xl bg-slate-950/80 p-4 ring-1 ring-white/10">
                                    <h3 className="text-lg font-semibold text-white">Frontend</h3>
                                    <ul className="mt-3 space-y-2 text-slate-300 text-sm">
                                        <li>React</li>
                                        <li>JavaScript</li>
                                        <li>HTML / CSS</li>
                                        <li>TypeScript</li>
                                        <li>Tailwind CSS</li>
                                        <li>Next.JS</li>
                                    </ul>
                                </div>

                                <div className="rounded-3xl bg-slate-950/80 p-4 ring-1 ring-white/10">
                                    <h3 className="text-lg font-semibold text-white">
                                        Backend / Tools
                                    </h3>
                                    <ul className="mt-3 space-y-2 text-slate-300 text-sm">
                                        <li>Node.js</li>
                                        <li>Vite</li>
                                        <li>Git</li>
                                        <li>shadcn UI</li>
                                        <li>Vercel</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Resume Highlights */}
                <section className="w-full rounded-3xl border border-white/10 bg-slate-900/80 p-6 shadow-2xl backdrop-blur-xl">
                    <h2 className="mb-4 text-3xl font-semibold text-white">Resume Highlights</h2>

                    <p className="mb-6 leading-7 text-slate-300">
                        Detail-oriented and results-driven professional with a strong foundation in
                        mechanical and electrical engineering, full-stack development, system
                        design, and problem-solving. Over 9 years of leadership experience in the
                        U.S. Navy, with a background in operations, training, logistics, technical
                        troubleshooting, and team development.
                    </p>

                    <div className="grid gap-4 md:grid-cols-2">
                        <div className="rounded-3xl bg-slate-950/80 p-5 ring-1 ring-white/10">
                            <h3 className="mb-3 text-xl font-semibold text-cyan-400">
                                Programming & Technical Skills
                            </h3>

                            <ul className="space-y-2 text-sm text-slate-300">
                                <li>Full-stack development foundation</li>
                                <li>React, JavaScript, HTML, CSS, and Tailwind CSS</li>
                                <li>Node.js, Vite, Git, and modern development tools</li>
                                <li>System design and technical problem-solving</li>
                                <li>Microsoft Word, Excel, Access, PowerPoint, and Outlook</li>
                            </ul>
                        </div>

                        <div className="rounded-3xl bg-slate-950/80 p-5 ring-1 ring-white/10">
                            <h3 className="mb-3 text-xl font-semibold text-cyan-400">
                                Leadership Experience
                            </h3>

                            <ul className="space-y-2 text-sm text-slate-300">
                                <li>First Class Petty Officer, United States Navy</li>
                                <li>Led and supervised teams of sailors</li>
                                <li>Mentored junior sailors and supported professional growth</li>
                                <li>Managed training, maintenance, operations, and logistics</li>
                                <li>Coordinated Anti-Terrorism training for two commands</li>
                            </ul>
                        </div>
                    </div>
                </section>

                <div className="w-full rounded-3xl border border-white/10 bg-slate-900/80 p-6 shadow-2xl backdrop-blur-xl">
                    <OrbitingSkills />
                </div>

                {/* Training & Clearance */}
                <section className="w-full rounded-3xl border border-white/10 bg-slate-900/80 p-6 shadow-2xl backdrop-blur-xl">
                    <h2 className="mb-4 text-3xl font-semibold text-white">
                        Training & Clearance
                    </h2>

                    <div className="overflow-x-auto">
                        <div className="flex gap-4 pb-2">
                            {certifications.map((cert, index) => (
                                <div
                                    key={index}
                                    className="group flex flex-col rounded-2xl border border-white/10 bg-slate-950/50 p-3 transition hover:border-cyan-500/50 hover:bg-slate-950/80 min-w-44"
                                >
                                    <div className="mb-3 overflow-hidden rounded-lg border border-white/10">
                                        <img
                                            src={cert.image}
                                            alt={cert.title}
                                            className="h-24 w-full object-contain bg-slate-900/50 transition group-hover:scale-105"
                                        />
                                    </div>

                                    <div className="space-y-1 flex-1 flex flex-col">
                                        <h3 className="text-sm font-semibold text-white leading-tight">
                                            {cert.title}
                                        </h3>
                                        <p className="text-xs text-slate-400 flex-grow">{cert.issuer}</p>
                                        <span className="inline-block rounded-full bg-cyan-500/20 px-2 py-0.5 text-xs font-medium text-cyan-300 mt-1">
                                            {cert.status}
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </div>
        </Component>
    );
}
