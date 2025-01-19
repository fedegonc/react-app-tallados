import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import HomePage from './components/pages/HomePage';
import TestPage from './components/pages/TestPage'; // Importa la nueva página



function App() {
  return (
    <Router>
      <div className="App">
       
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/test" element={<TestPage />} />


        </Routes>
      </div>
    </Router>
  );
}

export default App;
