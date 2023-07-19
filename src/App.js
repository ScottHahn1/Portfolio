import './styles/App.css';
import Home from './pages/Home';
import NoPage from './pages/No-Page';
import {  BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import './fonts/Poppins-Black.ttf';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={ <Home /> } />
        <Route path='*' element={ <NoPage /> } />
      </Routes>
    </Router>
  )
}

export default App;