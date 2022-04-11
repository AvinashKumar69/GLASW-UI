import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import AboutUs from './pages/AboutUs';
import GreenLoans from './pages/GreenLoans';
import Home from './pages/Home';
import StartUps from './pages/StartUps';


function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/aboutus' element={<AboutUs />} />
        <Route exact path='/startups' element={<StartUps />} />
        <Route exact path='/greenloans' element={<GreenLoans />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App;
