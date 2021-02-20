import './App.css'
import TeamName from './pages/TeamName'
import PickTeam from './pages/PickTeam'
import ViewOpponent from './pages/ViewOpponent'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Matchup from './pages/Matchup'

// TODO: need to restructure state logic

function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path='/matchup' render={() => <Matchup />} />
          <Route path='/pick-team' render={() => <PickTeam />} />
          <Route path='/view-opponent' render={() => <ViewOpponent />} />
          <Route path='/' render={() => <TeamName />} />
        </Switch>
      </BrowserRouter>
    </>
  )
}

export default App
