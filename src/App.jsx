import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainContent from './components/MainContent';
import Sidebar from './components/Sidebar';
import ProjectsPage from './components/ProjectsPage';
import './styles/components/app.sass';

function App() {
  return (
    <Router>
      <div id="portfolio">
        <h1>Livia Oliveira</h1>
        <Routes>
          <Route path="/" element={<><Sidebar /><MainContent /></>} />
          <Route path="/projects" element={<ProjectsPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

