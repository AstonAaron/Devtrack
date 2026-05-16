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
  const [time, setTime] = useState(new Date());
  const [currentDate] = useState(new Date());

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
  }, [isDark]);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const daysInMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth() + 1,
    0
  ).getDate();

  const firstDay = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth(),
    1
  ).getDay();

  const days = [
    ...Array(firstDay).fill(null),
    ...Array.from({ length: daysInMonth }, (_, i) => i + 1),
  ];

  const formattedTime = time.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  });

  return (
    <Component backgroundColor="rgb(2, 6, 23)">
      <main className="relative z-10 min-h-svh px-2 py-3 text-slate-100 sm:px-4 md:px-8 md:py-10">
        <div className="mx-auto w-full max-w-5xl space-y-3 sm:space-y-5 md:space-y-8">

          {/* DARK MODE */}
          <section className="rounded-xl border border-white/10 bg-slate-900/80 p-3 shadow-lg backdrop-blur-xl sm:p-5 md:rounded-3xl md:p-8">
            <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <h1 className="text-lg font-semibold text-white sm:text-2xl md:text-3xl">
                  Dark Mode Showcase
                </h1>

                <p className="mt-1 max-w-2xl text-xs leading-5 text-slate-300 sm:text-sm md:text-base">
                  Toggle dark mode using JavaScript and update the page theme.
                </p>
              </div>

              <button
                onClick={() => setIsDark((prev) => !prev)}
                className="w-full rounded-full bg-cyan-500 px-3 py-2 text-xs font-semibold text-slate-950 transition hover:bg-cyan-400 sm:w-fit sm:px-4 sm:py-3 sm:text-sm"
              >
                {isDark ? "Light Mode" : "Dark Mode"}
              </button>
            </div>

            <div className="mt-4 grid gap-3 lg:grid-cols-[1.2fr_1fr]">
              {/* PREVIEW */}
              <div
                className={`rounded-xl border p-3 shadow-inner transition sm:p-5 ${
                  isDark
                    ? "border-slate-700 bg-slate-950"
                    : "border-slate-300 bg-white text-slate-950"
                }`}
              >
                <h2 className="text-base font-semibold">Live Preview</h2>

                <p className="mt-1 text-xs leading-5 text-slate-400 sm:text-sm">
                  Example of a responsive dark mode section.
                </p>

                <div className="mt-3 space-y-2 rounded-xl border border-current/10 bg-gradient-to-br from-cyan-500/10 to-slate-900/20 p-2 text-xs sm:p-3 sm:text-sm">
                  <div className="rounded-lg bg-slate-950/90 p-3 text-slate-100">
                    <p className="font-semibold">Current theme:</p>
                    <p>{isDark ? "Dark enabled" : "Light enabled"}</p>
                  </div>

                  <div className="rounded-lg bg-slate-100/95 p-3 text-slate-950">
                    <p className="font-semibold">Example content</p>

                    <p className="mt-1 leading-5">
                      Text and background colors update automatically.
                    </p>
                  </div>
                </div>
              </div>

              {/* CODE */}
              <CodeCard title="JavaScript Code" code={darkModeJsCode} />
            </div>
          </section>

          {/* CLOCK + CALENDAR */}
          <section className="rounded-xl border border-white/10 bg-slate-900/80 p-3 shadow-lg backdrop-blur-xl sm:p-5 md:rounded-3xl md:p-8">
            <h2 className="mb-3 text-lg font-semibold text-white sm:text-2xl md:text-3xl">
              Clock & Calendar
            </h2>

            <div className="grid gap-3 md:grid-cols-2">

              {/* CLOCK */}
              <div className="flex min-h-28 items-center justify-center rounded-xl border border-slate-800 bg-slate-950 p-3 sm:min-h-44 sm:p-6">
                <div className="text-center">
                  <p className="mb-1 text-[10px] text-slate-400 sm:text-sm">
                    Current Time
                  </p>

                  <div className="font-mono text-xl font-bold text-cyan-400 sm:text-4xl md:text-5xl">
                    {formattedTime}
                  </div>

                  <p className="mt-2 text-[10px] leading-tight text-slate-400 sm:text-sm">
                    {time.toLocaleDateString("en-US", {
                      weekday: "short",
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                    })}
                  </p>
                </div>
              </div>

              {/* CALENDAR */}
              <div className="rounded-xl border border-slate-800 bg-slate-950 p-3 sm:p-5">
                <h3 className="mb-2 text-center text-sm font-semibold text-white sm:text-lg">
                  {currentDate.toLocaleString("default", {
                    month: "long",
                  })}{" "}
                  {currentDate.getFullYear()}
                </h3>

                <div className="grid grid-cols-7 gap-1 text-center">
                  {["S", "M", "T", "W", "T", "F", "S"].map((day, index) => (
                    <div
                      key={`${day}-${index}`}
                      className="py-1 text-[10px] font-semibold text-cyan-400 sm:text-xs"
                    >
                      {day}
                    </div>
                  ))}

                  {days.map((day, index) => (
                    <div
                      key={index}
                      className={`rounded py-1 text-[10px] sm:text-xs ${
                        day === null
                          ? ""
                          : day === currentDate.getDate()
                          ? "bg-cyan-500/30 font-semibold text-cyan-300"
                          : "text-slate-300 hover:bg-slate-800/50"
                      }`}
                    >
                      {day}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* CAROUSEL */}
          <section className="rounded-xl border border-white/10 bg-slate-900/80 p-3 shadow-lg backdrop-blur-xl sm:p-5 md:rounded-3xl md:p-8">
            <h2 className="text-lg font-semibold text-white sm:text-2xl md:text-3xl">
              HTML Carousel Example
            </h2>

            <p className="mt-1 max-w-2xl text-xs leading-5 text-slate-300 sm:text-sm md:text-base">
              Simple responsive carousel HTML structure.
            </p>

            <div className="mt-3">
              <CodeCard code={carouselHtmlCode} />
            </div>
          </section>
        </div>
      </main>
    </Component>
  );
}

function CodeCard({ title, code }) {
  return (
    <div className="rounded-xl border border-slate-800 bg-slate-950 p-3 sm:p-5">
      {title && (
        <h2 className="text-base font-semibold text-white sm:text-xl">
          {title}
        </h2>
      )}

      <pre className="mt-2 max-h-48 max-w-full overflow-auto rounded-lg bg-slate-900 p-2 text-[10px] leading-5 text-slate-200 sm:max-h-none sm:p-4 sm:text-sm">
        <code>{code}</code>
      </pre>
    </div>
  );
}