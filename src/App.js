import logo from './logo.svg';
import './App.css';
import { Grid } from '@mui/material';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Component/Header/Header';
import Sidebar from './Component/Sidebar/Sidebar';
import { BrowserRouter } from 'react-router-dom';
import Customer from './Component/Setting/Customer/Customer';
import Employee from './Component/Setting/Employee/Employee';
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Grid container spacing={0}>
          <Grid item xs={2} className="sidebarBody">
            <Sidebar/>
          </Grid>

          <Grid item xs={10} className="componentBody">
            <Header/>
            {/* <Customer/> */}
            <Employee/>
          </Grid>
        </Grid>
      </div>
    </BrowserRouter>
  );
}

export default App;
