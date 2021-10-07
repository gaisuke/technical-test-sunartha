import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Box } from '@mui/material'
import WarehouseIndex from './pages/WarehouseIndex'
import WarehouseDetail from './pages/WarehouseDetail'
import Sidebar from './components/Sidebar'
import './App.css';

const NoMatchRoute = () => <div>404 Page</div>

function App() {
  return (
    <Router>
      {/* <Box className="App"> */}
        <Sidebar />
        <Switch>
          <Route path ="/" exact component={WarehouseIndex} />
          <Route path ="/:WarehouseID" render={(props) => <WarehouseDetail {...props} />} />
          <Route component={NoMatchRoute} />
        </Switch>
      {/* </Box> */}
    </Router>
  );
}

export default App;
