import { useState } from "react";
import Navbar from "./components/NavBar";
import Footer from "./components/footer";
import Projects from "./components/Projects";
import Home from "./components/Home";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

// Import your page components as you build them:
// import Home     from "./pages/Home";
// import Projects from "./pages/Projects";
// import Code     from "./pages/Code";
// import Python   from "./pages/Python";

export default function App() {
    // This single piece of state drives which page is shown
    const [activePage, setActivePage] = useState("home");

    // Renders the correct page component based on activePage
    function renderPage() {
        switch (activePage) {
            case "home":
                return <Home />;
            case "projects":
                return <Projects />;
            case "code":
                return <Skills />;
            case "python":
                return <p style={{ padding: 24 }}>Python — skill set coming soon</p>;
            case "contact":
                return <Contact />;
            default:
                return <p style={{ padding: 24 }}>Page not found</p>;
        }
    }

    return (
        <div className="min-h-screen flex flex-col">
            {/* Navbar receives the active page and a setter function as props */}
            <Navbar activePage={activePage} onNavigate={setActivePage} />

            {/* Main content area — swap placeholders for real components */}
            <main className="flex-1">{renderPage()}</main>
            <Footer activePage={activePage} onNavigate={setActivePage} />
        </div>
    );
}
