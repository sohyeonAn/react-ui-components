import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from '@/pages/Home'
import Test from '@/pages/Test'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/test" Component={Test} />
        <Route path="*" Component={Home} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
