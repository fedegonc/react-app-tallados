import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import HomePage from './components/pages/HomePage';
import ComponentsPreview from './components/pages/ComponentsPreview';


function App() {
  return (
    <Router>
      <div className="App">
       
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/preview" element={<ComponentsPreview />} />
          
        </Routes>
      </div>
    </Router>
  );
}

export default App;
