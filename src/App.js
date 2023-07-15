import './App.css';
import Blog from './pages/Blog';
import Header from './pages/Header.js'
import { Route,Routes } from 'react-router-dom';
import Profile from './pages/Profile';
import Footer from './pages/Footer';
import BlogList from './pages/BlogList';
import Popular from './pages/Popular'
import SignIn from './pages/SignIn';


function App() {
  
  return (
    <div className="App">
    <Routes>
      <Route path="/" element={<><Header /><Popular/></>}/>
      <Route path="/Blog" element={<BlogList />} />
      <Route path="/Profile" element={<Profile />} />
      <Route path="/Blog/:id" element={<Blog />} />
      <Route path="/SignIn" element={<SignIn/>} />
      </Routes>
    <Footer/>
    </div>
  );
}

export default App;
