import './App.css'
import NavBar from './components/NavBar'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'

function App() {
  

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </BrowserRouter>
      <NavBar />

    </>
  )
}

export default App
