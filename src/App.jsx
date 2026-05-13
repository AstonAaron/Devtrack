import { useState } from "react";
import Navbar from "./components/NavBar";
import Projects from "./components/Projects";
import Home from "./components/Home";
import Skills from "./components/Skills"



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
                return <Skills/>;
            case "python":
                return <p style={{ padding: 24 }}>Python — coming soon</p>;
            default:
                return <p style={{ padding: 24 }}>Page not found</p>;
        }
    }

    return (
        <div>
            
            {/* Navbar receives the active page and a setter function as props */}
            <Navbar activePage={activePage} onNavigate={setActivePage} />

            {/* Main content area — swap placeholders for real components */}
            <main>{renderPage()}</main>
        </div>
    );
}

