import OrbitingSkills from "./ui/orbiting-skills";
import logo from "../assets/logo.png";

export default function Home() {
    return (
        <div className="min-h-svh bg-slate-950 text-white px-4 py-8">
            <div className="mx-auto mb-12 flex w-full max-w-4xl flex-col items-center justify-center gap-8">
                <img
                    src={logo}
                    alt="Logo banner"
                    className="mx-auto h-[30vh] w-[30%] min-w-60 max-w-105 object-contain"
                />

                <div className="w-full rounded-3xl border border-white/10 bg-slate-900/80 p-6 shadow-2xl backdrop-blur-xl">
                    <OrbitingSkills />
                </div>
            </div>
        </div>
    );
}
