import "./App.css";
import Home from "./pages/Home";
import { Suspense, lazy } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Layout from "./Layout";

const AboutPage = lazy(() => import("./pages/About"));
const Projects = lazy(() => import("./pages/Projects"));
const SkillsPage = lazy(() => import("./pages/Skills"));
const Contact = lazy(() => import("./pages/Contact"));

function RouteFallback() {
  return (
    <div className="container py-12">
      <p className="text-muted-foreground">Loading…</p>
    </div>
  );
}

function App() {
  return (
    <>
      <Router>
        <Suspense fallback={<RouteFallback />}>
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/skills" element={<SkillsPage />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/contact" element={<Contact />} />
            </Route>
          </Routes>
        </Suspense>
      </Router>
    </>
  );
}

export default App;
