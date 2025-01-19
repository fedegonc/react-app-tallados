import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import HomePage from './components/pages/HomePage';
import TestPage from './components/pages/TestPage'; // Importa la nueva página
import Documents from './components/pages/Documents';
import Estructure from './components/templates/Estructure';





function App() {
  return (
    <Router>
      <div className="App">
       
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/test" element={<TestPage />} />
          <Route path="/documentos" element={<Documents />} />
          <Route path="/line-page" element={<Estructure />} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;
