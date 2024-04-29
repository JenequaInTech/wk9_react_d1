import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import './App.css';
import logo from './assets/Name logo.png';
import TaskManager from './componets/TaskManager'
function App() {
  return (
    <div>
      <header className="header">
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>
        <nav className="nav">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/resume">Resume</Link></li>
            <li><Link to="/tasks">Tasks</Link></li> {}
          </ul>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/tasks" element={<TaskManager />} /> {}
      </Routes>
    </div>
  );
}

function Home() {
  return <h1>Home Page</h1>;
}

function About() {
  return <h1>About Page</h1>;
}

function Resume() {
  return <h1>Resume Page</h1>; 
}

export default App;
