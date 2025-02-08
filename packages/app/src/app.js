import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Suspense, lazy } from "react"; // Importe lazy
 
// Carregamento dinâmico dos componentes remotos
const HomePage = lazy(() => import("HomeApp/HomePage")); // Importe do HomeApp
const ContactPage = lazy(() => import("ContactApp/ContactPage")); // Importe do ContactApp

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>

        {/* Suspense para carregamento dinâmico */}
        <Suspense fallback={<div>...Loading</div>}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </Suspense>
      </div>
    </Router>
  );
}

export default App;
