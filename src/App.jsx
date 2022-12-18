import {Route, Routes} from 'react-router-dom'
import './App.css'

import AuthGuard from './services/AuthGuard'
import Login from './views/Login'
import Home from './views/Home'
import Error from './views/Error'
import ListCollab from './views/ListCollab'
import CollabEdit from './views/CollabEdit'
import CollabAdd from './views/CollabAdd'



function App() {

  return (

    <div className="App">

      <Routes>
        <Route index element={<Login/>}/>

        <Route path='/login' element={<Login/>}/>

          <Route path='/accueil' element={
            <AuthGuard>
              <Home/>
            </AuthGuard>
          }/>

        <Route path='/ajouter' element={<CollabAdd/>}/>
        <Route path='collaborateurs' element={<ListCollab/>}/>
        <Route path='collaborateurs/edit/:id' element={<CollabEdit/>}/>


        <Route path='*' element={<Error/>}/>
        
      </Routes>
    </div>


  )
}

export default App
