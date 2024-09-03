import { Route, Routes } from "react-router-dom"

import Home from './pages/Home'
import About from "./pages/About"
import Navbar from "./components/Navbar"
import MobileNav from "./components/MobileNavbar"
import Search from "./pages/Search"
import BookDetails from "./components/BookDetails"
function App() {

  return (
    <>
      <MobileNav />
      <Navbar />

      <Routes>
      <Route path="/books/:id" element={<BookDetails />} />
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/search" element={<Search />} />
         </Routes>
      
    </>
  )
}

export default App
