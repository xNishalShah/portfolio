import './App.css'
import { AboutMePage } from './pages/AboutMe';
import { MainPage } from './pages/MainPage'
import { Routes, Route, BrowserRouter } from 'react-router-dom';
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<MainPage />} />
          <Route path='/aboutme' element={<AboutMePage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
