
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <>
      <Navbar />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route
            path="*"
            element={
              <section className="section container">
                <h1>404 - Page Not Found</h1>
                <p>The page you requested does not exist.</p>
              </section>
            }
          />
         </Routes>
      </main>

      <footer className="footer">
        <p>
          {new Date().getFullYear()}  PersonalPortfolio. Built with React.
        </p>
      </footer>
    </>
  );
}

