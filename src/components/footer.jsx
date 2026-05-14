import { NAV_ITEMS } from "./NavBar";

export default function Footer({ activePage, onNavigate }) {
    return (
        <footer className="mt-auto border-t border-white/10 bg-slate-950 px-6 py-6 text-slate-300">
            <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-4 md:flex-row">
                {/* Left Side */}
                <div className="text-center md:text-left">
                    <h2 className="text-lg font-semibold text-white">
                        Aaron Aston
                    </h2>

                    <p className="text-sm text-slate-400">
                        © {new Date().getFullYear()} All Rights Reserved
                    </p>
                </div>

                {/* Navigation Links */}
                <div className="flex flex-wrap items-center justify-center gap-3">
                    {NAV_ITEMS.map((item) => (
                        <button
                            key={item.id}
                            type="button"
                            onClick={() => onNavigate(item.id)}
                            className={`rounded-full px-4 py-2 text-sm transition ${
                                activePage === item.id
                                    ? "bg-cyan-400 text-slate-950"
                                    : "bg-slate-900 hover:bg-white/10 hover:text-white"
                            }`}
                        >
                            {item.label}
                        </button>
                    ))}
                </div>
            </div>
        </footer>
    );
}