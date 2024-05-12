import { Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './layout/Header'
import Home from './pages/home/Home'
import Category from './pages/category/Category'
import Men from './pages/men/Men'
import Women from './pages/women/Women'
import Latest from './pages/latest/Latest'
import Pages from './pages/Pages'

function App() {

  return (
    <>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='category' element={<Category/>}/>
      <Route path='men' element={<Men/>}/>
      <Route path='women' element={<Women/>}/>
      <Route path='latest' element={<Latest/>}/>
      <Route path='pages' element={<Pages/>}/>




    </Routes>
    </>
  )
}

export default App
