import { Route, Switch } from 'wouter'
import Home from './pages/home'
import Clientes from './pages/clientes'
import Sucursales from './pages/sucursales'
import NuestrasEmpanadas from './pages/nuestras-empanadas'
import EmpanadasCongeladas from './pages/empanadas-congeladas'
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
      <Route
        path='/nuestras-empanadas'
        component={NuestrasEmpanadas}
      />
      <Route
        path='/empanadas-congeladas'
        component={EmpanadasCongeladas}
      />
      <Route component={Error} />
    </Switch>
  )
}

export default App
