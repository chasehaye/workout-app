import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import './App.css';
import AuthPage from '../AuthPage/AuthPage';
import HomePage from '../HomePage/HomePage';
import NavBar from '../../components/NavBar/NavBar';



import NewRoutinePage from '../NewRoutinePage/NewRoutinePage';
import RoutineIndexPage from '../RoutineIndexPage/RoutineIndexPage';
import RoutineDetailPage from '../RoutineDetailPage/RoutineDetailPage';

import NewFoodPage from '../NewFoodPage/NewFoodPage';
import FoodIndexPage from '../FoodIndexPage/FoodIndexPage';
import FoodDetailPage from '../FoodDetailPage/FoodDetailPage';





export default function App() {
  const [user, setUser] = useState(getUser());


  return (
    <main className="App">
    { user ?
      <>
      <NavBar setUser ={setUser} user = {user}></NavBar>
      <Routes>
        <Route path="/" element={<HomePage/>} />

        <Route path="/routines" element={<RoutineIndexPage />} />
        <Route path="/routines/new" element={<NewRoutinePage />} />
        <Route path="/routines/:routineId" element={<RoutineDetailPage />} />

        <Route path="/foods" element={<FoodIndexPage />} />
        <Route path="/foods/new" element={<NewFoodPage />} />
        <Route path="/foods/:foodId" element={<FoodDetailPage />} />

      </Routes>
      </>
      :
      <AuthPage setUser={setUser}/>
    }
  </main>
  );
}


