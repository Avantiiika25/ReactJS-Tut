import './App.css'
import { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from './Home';
import About from './About';

const Contact = lazy(() => import('./Contact'));
const Dashboard = lazy(() => import('./Dashboard'));


function App() {

  return (
    <Router>
      <div style={{ textAlign: 'center', margin: '20px' }}>
        <h1>Fun React App with Routes and Code Splitting</h1>

        <nav style={{marginBottom: '20px'}}>
          <Link to='/'>Home</Link> |
          <Link to='/about'>About</Link> |
          <Link to='/contact'>Contact</Link> |
          <Link to='/dashboard'>Dashboard</Link> |
        </nav>

        <hr style={{margin: '20px'}} />

        <Suspense fallback={<div>Loading page...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </Suspense>

        <footer style={{ marginTop: '20px' }}>
          <p>ENjoy the dynamic routing and lazy loading magic!</p>
        </footer>
      </div>
    </Router>
  )
}

export default App
