import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Suspense } from "react";
import HomePage from "./HomePage";
import ContactPage from "./ContactPage";

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

        {/* Suspense envolve todas as rotas */}
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
