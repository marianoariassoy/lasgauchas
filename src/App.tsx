import { Route, Switch } from 'wouter'
import Home from './pages/home'
import Clientes from './pages/clientes'
import Sucursales from './pages/sucursales'
import Error from './pages/error'

function App() {
  return (
    <Switch>
      <Route
        path='/'
        component={Home}
      />
      <Route
        path='/clientes'
        component={Clientes}
      />
      <Route
        path='/sucursales'
        component={Sucursales}
      />

      <Route component={Error} />
    </Switch>
  )
}

export default App
