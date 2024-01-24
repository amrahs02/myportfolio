// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Contact from './components/Contact';
import OpenSource from './components/OpenSource';
import Articles from './components/Articles';
import Projects from './components/Projects';
import HomePage from './components/HomePage';
import Skills from './components/Skills';
import GitHubRepos from './github/GitHubRepo';
import Education from './components/Education';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/opensource" element={<OpenSource />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/skills" element={<Skills/>} />
        <Route path="/githubrepos" element={<GitHubRepos/>} />
        <Route path="/education" element={<Education/>} />
      </Routes>
    </Router>
  );
};

export default App;
