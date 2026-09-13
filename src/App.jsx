import './App.css'
import { Route,Routes } from 'react-router-dom'

import Home from './pages/Home'
import Auth from './pages/Auth'

import Books from './User/pages/Books'
import BookDetail from './User/pages/BookDetail'
import Contact from './User/pages/Contact'
import Profile from './User/pages/Profile'

import Dashboard from './Admin/pages/Dashboard'
import Resources from './Admin/pages/Resources'
import Settings from './Admin/pages/Settings'

import Pnf from './pages/Pnf'

function App() {

  return (
    <>
      <Routes>
        <Route path='' element={<Home/>} />
        <Route path='auth' element={<Auth/>} />
        <Route path='/*' element={<Pnf/>} />

        <Route path='books' element={<Books/>} />
        <Route path='booksdetail/:bid' element={<BookDetail/>} />
        <Route path='contact' element={<Contact/>} />
        <Route path='profile' element={<Profile/>} />

        <Route path='admin' element={<Dashboard/>} />
        <Route path='admin/resource' element={<Resources/>} />
        <Route path='admin/sett' element={<Settings/>} />
      </Routes>
    </>
  )
}

export default App
