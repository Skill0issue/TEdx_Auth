import './App.css';
import Blog from './pages/Blog';
import Header from './pages/Header.js'
import { Route,Routes } from 'react-router-dom';
import Profile from './pages/Profile';
import Footer from './pages/Footer';
import BlogList from './pages/BlogList';
import Popular from './pages/Popular'
import SignIn from './pages/SignIn';
import Navbar from './pages/Navbar';


function App() {
  
  return (
    <div className="App">
    <Routes>
      <Route path="/" element={<><Header /><Popular/></>}/>
      <Route path="/Blog" element={<><Navbar/><BlogList /></>} />
      <Route path="/Profile" element={<><Navbar/><Profile /></>} />
      <Route path="/Blog/:id" element={<><Navbar/><Blog /></>} />
      <Route path="/SignIn" element={<><Navbar/><SignIn/></>} />
      </Routes>
    <Footer/>
    </div>
  );
}

export default App;
