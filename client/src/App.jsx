import { Routes, Route  } from 'react-router-dom'
import Home from "./views/home/Home"
import Create from "./views/create/Create"
import Detail from "./views/detail/Detail"
import MainPage from "./views/mainPage/MainPage"
import Activities from './views/activities/Activities'
import './App.css'
import CreateActivities from './views/createActivities/CreateActivities'

function App() {
 

  return (
    <div>
        
      <Routes>
        <Route path="/" element={ <MainPage/> }/>
        <Route path="/" element={ <MainPage/> }/>
        <Route exact path="/home" element={ <Home/> }/>
        <Route path="/home/:id" element={ <Detail/> }/>
        <Route path="/createActivities" element={ <CreateActivities/> }/>
        <Route path="/activities" element={ <Activities/> }/>
      </Routes>
     
    </div>

  )
}

export default App
