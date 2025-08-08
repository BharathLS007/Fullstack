import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Contact from './Pages/Contact';
import About from './Pages/About';
import Cart from './Pages/Cart';
import Signup from './Pages/Signup';
import Womensdress from './Components/Womensdress'
import Mensdress from './Components/Mensdress'
import Toys from './Components/Toys';
import Electronics from './Components/Electronics'
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='About' element={<About/>}/>
        <Route path='Contact' element={<Contact/>}/>
        <Route path='Cart' element={<Cart/>}/>
        <Route path='SignUp' element={<Signup/>}/>
        <Route path='Womensdress' element={<Womensdress/>}/>
        <Route path='Mensdress' element={<Mensdress/>}/>
        <Route path='Toys' element={<Toys/>}/>
        <Route path='Electronics' element={<Electronics/>}/>
      </Routes>
    </BrowserRouter>
  );
}


export default App
