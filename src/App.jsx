import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/homePage';
// import ProjectsPage from './pages/projectsPage';
import ContactPage from './pages/contactPage';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<HomePage />} />
        {/* <Route path='/projects' element={<ProjectsPage />} /> */}
        <Route path='/contact' element={<ContactPage />} />
      </Routes>
    </Router>
  );
}

export default App;
