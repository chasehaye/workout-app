import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import './App.css';
import AuthPage from '../AuthPage/AuthPage';
import HomePage from '../HomePage/HomePage';
import NavBar from '../../components/NavBar/NavBar';


import NewRoutineCyclePage from '../NewRoutineCyclePage/NewRoutineCyclePage';
import RoutineCycleIndexPage from '../RoutineCycleIndexPage/RoutineCycleIndexPage';
import RoutineCycleDetailPage from '../RoutineCycleDetailPage/RoutineCycleDetailPage';

import NewRoutinePage from '../NewRoutinePage/NewRoutinePage';
import RoutineIndexPage from '../RoutineIndexPage/RoutineIndexPage';
import RoutineDetailPage from '../RoutineDetailPage/RoutineDetailPage';

export default function App() {
  const [user, setUser] = useState(getUser());


  return (
    <main className="App">
    { user ?
      <>
      <NavBar setUser ={setUser} user = {user}></NavBar>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/routineCycles/new" element={<NewRoutineCyclePage />} />
        <Route path="/routineCycles" element={<RoutineCycleIndexPage />} />
        <Route path="/routineCycles/:routineCycleId" element={<RoutineCycleDetailPage />} />

        <Route path="/routines" element={<RoutineIndexPage/>} />
        <Route path="/routines/new" element={<NewRoutinePage />} />
        <Route path="/routines/:routineId" element={<RoutineDetailPage />} />

      </Routes>
      </>
      :
      <AuthPage setUser={setUser}/>
    }
  </main>
  );
}


