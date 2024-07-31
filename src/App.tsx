import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from '@/pages/Home'
import Test from '@/pages/Test'
import Navbar from '@/components/Navbar'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/test" Component={Test} />
        <Route path="*" Component={Home} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
