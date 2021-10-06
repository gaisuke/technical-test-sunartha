import { Breadcrumbs, Link, Typography } from "@mui/material";
import './App.css';
import WarehouseTable from "./components/WarehouseTable";

function App() {
  return (
    <div className="App">
      <Breadcrumbs aria-label="breadcrumb">
        <Link underline="hover" color="inherit" href="/">
        MUI
        </Link>
        <Link
        underline="hover"
        color="inherit"
        href="/getting-started/installation/"
        >
        Core
        </Link>
        <Typography color="text.primary">Breadcrumbs</Typography>
      </Breadcrumbs>
      <WarehouseTable />
    </div>
  );
}

export default App;
