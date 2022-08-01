import Login from './Login'
import { Route, Routes } from 'react-router-dom'
import HomePage from './HomePage'
import Signup from './Signup'
import AdminPanel from './AdminPanel'
import Nav from './Nav'


const Router = () => {
  return (
  <>
  <Nav/> 
  <Routes>
  <Route path="/" element={<HomePage/>}/>
  <Route path="/login" element={<Login/>}/>
  <Route path="/signup" element={<Signup/>}/>
  <Route path="/adminpanel" element={<AdminPanel/>}/>
  </Routes>
</>
  )
}

export default Router;