import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import WarehouseIndex from './pages/WarehouseIndex'
import WarehouseDetail from './pages/WarehouseDetail'
import Sidebar from './components/Sidebar'
import './App.css';

const NoMatchRoute = () => <div>404 Page</div>

function App() {
  return (
    <Router>
      <div className="App">
        <Sidebar />
        <div className="w-full">
          <Switch>
            <Route path ="/" exact component={WarehouseIndex} />
            <Route path ="/:WarehouseID" render={(props) => <WarehouseDetail {...props} />} />
            <Route component={NoMatchRoute} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
