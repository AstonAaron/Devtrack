import { useState } from "react";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";

// Import your page components as you build them:
// import Home     from "./pages/Home";
// import Skills   from "./pages/Skills";
// import Projects from "./pages/Projects";
// import Code     from "./pages/Code";
// import Python   from "./pages/Python";

export default function App() {
  // This single piece of state drives which page is shown
  const [activePage, setActivePage] = useState("home");

  // Renders the correct page component based on activePage
  function renderPage() {
    switch (activePage) {
      case "home":     return <p style={{ padding: 24 }}>Home page — coming soon</p>;
      case "skills":   return <p style={{ padding: 24 }}>Skills page — coming soon</p>;
      case "projects": return <Projects />; 
      case "code":     return <p style={{ padding: 24 }}>Code Samples — coming soon</p>;
      case "python":   return <p style={{ padding: 24 }}>Python — coming soon</p>;
      default:         return <p style={{ padding: 24 }}>Page not found</p>;
    }
  }

  return (
    <div>
      {/* Navbar receives the active page and a setter function as props */}
      <Navbar activePage={activePage} onNavigate={setActivePage} />

      {/* Main content area — swap placeholders for real components */}
      <main>
        {renderPage()}
      </main>
        
    </div>
    
    
  );
}
