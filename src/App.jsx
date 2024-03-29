// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Contact from './components/Contact';
import OpenSource from './components/OpenSource';
import Projects from './components/Projects';
import HomePage from './components/HomePage';
import Skills from './components/Skills';
import GitHubRepos from './github/GitHubRepo';
import Education from './components/Education';
import ContentWriter from './components/ContentWriter';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/opensource" element={<OpenSource />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contentwriter" element={<ContentWriter />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/githubrepos" element={<GitHubRepos />} />
        <Route path="/education" element={<Education />} />
      </Routes>
    </Router>
  );
};

export default App;
