import './App.css'
import NavBar from './components/NavBar'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Works from './pages/Works'
import Footer from './components/Footer'
import PostHogPageviewTracker from './PostHogPageviewTracker'
import ScrollToTop from './components/ScrollToTop'
function App() {
  

  return (
    <>
      <BrowserRouter>
      <ScrollToTop />
      <PostHogPageviewTracker />
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/works' element={<Works />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
        <Footer />        
      </BrowserRouter>
    </>
  )
}

export default App
