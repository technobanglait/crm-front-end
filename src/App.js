import logo from './logo.svg';
import './App.css';
import { Grid } from '@mui/material';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Component/Header/Header';
import Sidebar from './Component/Sidebar/Sidebar';
import { BrowserRouter } from 'react-router-dom';

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
          </Grid>
        </Grid>
      </div>
    </BrowserRouter>
  );
}

export default App;
