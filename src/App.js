import './App.css'
import TeamName from './pages/TeamName'
import PickTeam from './pages/PickTeam'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path='/pick-team' render={() => <PickTeam />} />
          <Route path='/' render={() => <TeamName />} />
        </Switch>
      </BrowserRouter>
    </>
  )
}

export default App
