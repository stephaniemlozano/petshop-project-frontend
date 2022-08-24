import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Adoption from './pages/Adoption';
import Health from './pages/Health';
import Header from './components/Header';


function App() {
  return (
    <BrowserRouter>
     <Header />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/adoption' element={<Adoption />}/>
        <Route path='/health' element={<Health />}/>
        <Route path='*' element={<h1>Error page not found!</h1>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
