import { useEffect, useState } from "react";
import { Component } from "./ui/gradient-bars-background";

const carouselHtmlCode = `<div class="carousel">
  <div class="carousel-track">
    <div class="carousel-slide">Slide 1</div>
    <div class="carousel-slide">Slide 2</div>
    <div class="carousel-slide">Slide 3</div>
  </div>
  <button class="carousel-button prev">Prev</button>
  <button class="carousel-button next">Next</button>
</div>`;

const darkModeJsCode = `const toggleDarkMode = () => {
  const root = document.documentElement;
  root.classList.toggle("dark");
};`;

export default function Skills() {
    const [isDark, setIsDark] = useState(false);

    useEffect(() => {
        const root = document.documentElement;
        if (isDark) {
            root.classList.add("dark");
        } else {
            root.classList.remove("dark");
        }
    }, [isDark]);

    return (
        <Component backgroundColor="rgb(2, 6, 23)">
            <main className="min-h-svh text-slate-100 px-6 py-10 relative z-10">
                <div className="mx-auto max-w-5xl space-y-12">
                    <section className="rounded-3xl border border-white/10 bg-slate-900/80 p-8 shadow-2xl backdrop-blur-xl">
                        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                            <div>
                                <h1 className="text-3xl font-semibold text-white">
                                    Dark Mode Showcase
                                </h1>
                                <p className="mt-2 max-w-2xl text-slate-300">
                                    Toggle the dark mode preview using JavaScript. This section
                                    updates the page theme by adding or removing the
                                    <span className="font-semibold text-white"> dark</span> class on
                                    the document root.
                                </p>
                            </div>
                            <button
                                onClick={() => setIsDark((prev) => !prev)}
                                className="rounded-full bg-cyan-500 px-5 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-500/30 transition hover:-translate-y-0.5 hover:bg-cyan-400">
                                {isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
                            </button>
                        </div>

                        <div className="mt-8 grid gap-6 lg:grid-cols-[1.4fr_1fr]">
                            <div
                                className={`rounded-3xl border p-6 shadow-inner transition ${isDark ? "border-slate-700 bg-slate-950" : "border-slate-300 bg-white text-slate-950"}`}>
                                <h2 className="text-xl font-semibold">Live Preview</h2>
                                <p className="mt-3 text-sm leading-6 text-slate-400">
                                    This preview area updates immediately when you toggle dark mode,
                                    demonstrating how JavaScript can control theme state.
                                </p>
                                <div className="mt-6 space-y-3 rounded-2xl border border-current/10 bg-liner-to-br from-cyan-500/10 to-slate-900/20 p-4 text-sm">
                                    <div className="rounded-2xl bg-slate-950/90 p-4 text-slate-100">
                                        <p className="font-semibold">Current theme:</p>
                                        <p>{isDark ? "Dark mode enabled" : "Light mode enabled"}</p>
                                    </div>
                                    <div className="rounded-2xl bg-slate-100/95 p-4 text-slate-950">
                                        <p className="font-semibold">Example content</p>
                                        <p className="mt-2 text-sm leading-6">
                                            This content block shows how text and background colors
                                            change based on the theme state.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="rounded-3xl border border-slate-800/90 bg-slate-950 p-6">
                                <h2 className="text-xl font-semibold text-white">
                                    JavaScript Code
                                </h2>
                                <pre className="mt-4 overflow-x-auto rounded-2xl bg-slate-900 p-2 md:p-4 text-xs md:text-sm text-slate-200 shadow-inner">
                                    <code>{darkModeJsCode}</code>
                                </pre>
                            </div>
                        </div>
                    </section>

                    <section className="rounded-3xl border border-white/10 bg-slate-900/80 p-8 shadow-2xl backdrop-blur-xl">
                        <h2 className="text-3xl font-semibold text-white">HTML Carousel Example</h2>
                        <p className="mt-3 max-w-2xl text-slate-300">
                            This section shows a simple HTML structure for a carousel component. Use
                            this markup as the foundation for a slider or onboarding flow.
                        </p>

                        <div className="mt-6 rounded-3xl border border-slate-800 bg-slate-950 p-6">
                            <pre className="overflow-x-auto rounded-2xl bg-slate-900 p-2 md:p-4 text-xs md:text-sm text-slate-200">
                                <code>{carouselHtmlCode}</code>
                            </pre>
                        </div>
                    </section>
                </div>
            </main>
        </Component>
    );
}
