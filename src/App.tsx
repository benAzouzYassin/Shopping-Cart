import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Store from "./pages/Store"
import About from "./pages/About"
import Cart from "./pages/cart"


function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/store" element={<Store />} />
        <Route path="/about" element={<About />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<h1>Page not found</h1>} />
      </Routes></>
  )
}

export default App
