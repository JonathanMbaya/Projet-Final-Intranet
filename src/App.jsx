import './App.css'
import Header from './components/Header'
import Login from './views/Login'
import Home from './views/Home'
import Error from './views/Error'
import {Route, Routes} from 'react-router-dom'
import ListCollab from './views/ListCollab'

function App() {


  return (
    <div className="App">

      <Header/>

      <Routes>
        <Route index element={<Login/>}/>

        <Route path='/login' element={<Login/>}/>
        <Route path='/accueil' element={<Home/>}/>
        <Route path='/collaborateurs' element={<ListCollab/>}/>


        <Route path='*' element={<Error/>}/>
      </Routes>
    </div>
  )
}

export default App
