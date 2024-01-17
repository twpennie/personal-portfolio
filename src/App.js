import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Experience from './pages/Experience';
import Navbar from './components/Navbar';
import Footer from "./components/Footer";
import ProjectDisplay from"./pages/ProjectDisplay";
import ExpressionAnalysis from "./pages/ExpressionAnalysis";
import DrawingApplication from "./pages/DrawingApplication";
import PortfolioWebsite from './pages/PortfolioWebsite';
import BasicGPS from "./pages/BasicGPS";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/projects/expressionanalysis" element={<ExpressionAnalysis />} />
          <Route path="/projects/drawingapplication" element={<DrawingApplication />}/>
          <Route path="/projects/basicgpsalgorithm" element={<BasicGPS />}/>
          <Route path="/projects/portfoliowebsite" element={<PortfolioWebsite />}/>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
