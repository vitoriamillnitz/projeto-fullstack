import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import { ToastContainer } from 'react-toastify';

import SeasonProvider from './context/SeasonContext';
import LoginProvider from './context/LoginContext';
import DriverProvider from './context/DriverContext';
import TeamProvider from './context/TeamContext';
import RaceProvider from './context/RaceContext';

import Menu from './components/menu/Header'; 
import Driver from './components/driver/Driver';
import Table from './components/table/Table';
import FormCreateDriver from './components/formCreateDriver/FormCreateDriver';
import FormCreateTeam from './components/formCreateTeam/FormCreateTeam';
import FormCreateRace from './components/formCreateRace/FormCreateRace';

import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Races from './pages/races/Races';
import Private from './pages/private/Private';

function App() {
  return (
    <BrowserRouter basename="/projeto-fullstack">
      <div className="screen">
        <SeasonProvider>
          <LoginProvider>
            <Menu />
            <main className="info">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route
                  path="/pilots"
                  element={
                    <DriverProvider>
                      <Driver />
                      <Table type={"drivers"} />
                    </DriverProvider>
                  }
                />
                <Route
                  path="/teams"
                  element={
                    <TeamProvider>
                      <Table type={"teams"} />
                    </TeamProvider>
                  }
                />
                <Route
                  path="/races"
                  element={
                    <RaceProvider>
                      <Races />
                    </RaceProvider>
                  }
                />
                <Route
                  path="/create"
                  element={
                    <Private>
                      <div className="createForms">
                        <FormCreateDriver />
                        <FormCreateTeam />
                        <FormCreateRace />
                      </div>
                    </Private>
                  }
                />
              </Routes>
            </main>
          </LoginProvider>
        </SeasonProvider>
      </div>
      <ToastContainer />
    </BrowserRouter>
  );
}

export default App;
