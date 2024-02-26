// import CardDetails from './components/CardDetails'
// import Edit from './components/Edit'
import Homepage from './components/Homepage'
import Mainpage from './components/Mainpage'
import Navbar from './components/Navbar'
// import NewPost from './components/NewPost'
import { Route, Routes } from 'react-router-dom'
import './App.css'

function App() {
  return (
    <div className="container">
        <Routes>
          <Route path='/' element={<Homepage/>}/>
          <Route path='/Mainpage' element={<Mainpage/>}/>
          {/* <Route path='/Mainpage/new' element= {<NewPost />} />
          <Route path="/Mainpage/details/:id" element={<CardDetails/>} />
          <Route path="/Mainpage/edit/:id" element={<Edit/>} /> */}
        </Routes>
    </div>
    
  )
}

export default App;