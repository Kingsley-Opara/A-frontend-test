import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import SidebarComponents from './componets/sidebar'
import Home from './componets/home'
function App() {
 return (
    <>

      <Router>
        <SidebarComponents/>
        <Routes>
          <Route path='/home' element={Home}/>
        </Routes>
      </Router>

    </>
  )
}

export default App
