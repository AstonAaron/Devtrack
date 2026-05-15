import { useEffect, useMemo, useState } from "react";
import "./App.css";

import Navbar from "./components/NavBar";
import Footer from "./components/footer";
import Projects from "./components/Projects";
import Home from "./components/Home";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import { Component } from "./components/ui/gradient-bars-background";

export default function App() {
    const [loading, setLoading] = useState(true);
    const [activePage, setActivePage] = useState("home");

    const matrixSymbols = "アイウエオカキクケコサシスセソ0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ@$#%&";

    const rainColumns = useMemo(() => {
        return Array.from({ length: 35 }, (_, index) => ({
            id: index,
            text: Array.from(
                { length: 40 },
                () => matrixSymbols[Math.floor(Math.random() * matrixSymbols.length)]
            ).join("")
        }));
    }, []);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 2500);

        return () => clearTimeout(timer);
    }, []);

    function renderPage() {
        switch (activePage) {
            case "home":
                return <Home />;
            case "projects":
                return <Projects />;
            case "code":
                return <Skills />;
            case "python":
                return (
                    <Component backgroundColor="rgb(2, 6, 23)">
                        <div className="relative z-10 flex items-center justify-center min-h-screen px-4">
                            <p
                                style={{
                                    padding: 24,
                                    fontSize: "1.25rem",
                                    color: "white",
                                    textAlign: "center"
                                }}>
                                Python — skill set coming soon
                            </p>
                        </div>
                    </Component>
                );
            case "contact":
                return <Contact />;
            default:
                return (
                    <Component backgroundColor="rgb(2, 6, 23)">
                        <div className="relative z-10 flex items-center justify-center min-h-screen px-4">
                            <p style={{ padding: 24, fontSize: "1.25rem", color: "white" }}>
                                Page not found
                            </p>
                        </div>
                    </Component>
                );
        }
    }

    if (loading) {
        return (
            <div className="matrix-loader">
                <div className="matrix-rain">
                    {rainColumns.map((column) => (
                        <span key={column.id} style={{ "--i": column.id }}>
                            {column.text}
                        </span>
                    ))}
                </div>

                <h1 className="matrix-title">DEVELOPER LOADING...</h1>
            </div>
        );
    }

    return (
        <div className="min-h-screen flex flex-col">
            <Navbar activePage={activePage} onNavigate={setActivePage} />

            <main className="flex-1">{renderPage()}</main>

            <Footer activePage={activePage} onNavigate={setActivePage} />
        </div>
    );
}
