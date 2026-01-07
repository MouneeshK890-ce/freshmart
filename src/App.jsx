import React,{useEffect} from 'react'
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Home from './pages/Home'
import Shop from './pages/Shop'
import About from './pages/About'
import Contact from './pages/Contact'
import Footer from './components/Footer'
import { useDispatch, useSelector } from 'react-redux'
import { setCart } from './Redux/CartSlice'

const App = () => {

  const {cart} = useSelector((state) => state.cart)

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart])

  return (
    <>
     <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/shop' element={<Shop/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
      </Routes>
      <Footer/>
     </Router>
    </>
  )
}

export default App