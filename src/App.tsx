import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import Home from './components/Home'
import Illustration from './components/Illustration'
import Printmaking from './components/Printmaking'
import About from './components/About'

function App() {
  return (
    <BrowserRouter>
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Navigation />
        <main style={{ paddingTop: '6.5rem', flex: 1 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/illustration" element={<Illustration />} />
            <Route path="/printmaking" element={<Printmaking />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
