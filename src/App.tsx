import './App.css'
import logo from './assets/welbi_logo.png'
import ListContainer from './components/attendee-list-container'

export function App() {
  return (
    <div className="appContainer">
      <img src={logo} alt="Logo" className="appLogo" />
      <ListContainer />
    </div>
  )
}
