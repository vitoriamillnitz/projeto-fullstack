import { HashRouter, Routes, Route } from "react-router-dom"; 
import './App.css';
import { ToastContainer } from 'react-toastify';

import DriverProvider from './context/DriverContext';
import SeasonProvider from "./context/SeasonContext";
import TeamProvider from "./context/TeamContext";

import Menu from "./components/menu/Menu";
import Driver from './components/driver/Driver';
import Table from "./components/table/Table";
import Races from "./components/races/Races";
import Home from "./components/home/Home";
import Login from "./components/login/Login";
import LoginProvider from "./context/LoginContext";
import Private from "./components/private/Private";
import TableEdit from "./components/tableEdit/TableEdit";
import EditProvider from "./context/EditContext";
import FormCreateDriver from "./components/formCreateDriver/FormCreateDriver";
import FormCreateTeam from "./components/formCreateTeam/FormCreateTeam";
import FormCreateRace from "./components/formCreateRace/FormCreateRace";

function App() {
  return (
    <HashRouter> 
    <div className="screen">
      <SeasonProvider>
        <LoginProvider >
        <Menu />
        <main className="info">
          <Routes>
            <Route path="/" element={ 
              <Home></Home>
            } />
            <Route path="/login" element={
              <Login></Login>
            } />
            <Route path="/pilots" element={
              <DriverProvider>  
                <Driver></Driver>
                <Table type={"drivers"}></Table>
              </DriverProvider>
            } />
          </Routes>
        </main>
        </LoginProvider>
      </SeasonProvider>
    </div>
    <ToastContainer />
    </HashRouter>
  );
}

export default App;