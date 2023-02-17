import './App.css'
import MainDash from './components/MainDash/MainDash'
import RightSide from './components/Rightside/RightSide'
import Sidebar from './components/SideBar/Sidebar'

function App() {
  return (
    <div className="App">
      <div className="AppGlass">
        <Sidebar></Sidebar>
        <MainDash></MainDash>
        <RightSide></RightSide>
      </div>
    </div>
  )
}

export default App
