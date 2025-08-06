import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Contact from './Pages/Contact';
import About from './Pages/About';
import Cart from './Pages/Cart';
import Signup from './Pages/Signup';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='About' element={<About/>}/>
        <Route path='Contact' element={<Contact/>}/>
        <Route path='Cart' element={<Cart/>}/>
        <Route path='SignUp' element={<Signup/>}/>
      </Routes>
    </BrowserRouter>
  );
}


export default App
