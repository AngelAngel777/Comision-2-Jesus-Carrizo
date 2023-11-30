import { Route, Routes } from "react-router-dom";

import { HomePage } from "./pages/HomePage";
import { News } from "./pages/news";
import { ProfilePage } from "./pages/ProfilePage";
import { TasksPage } from "./pages/TasksPage";
import { TaskByIdPage } from "./pages/TaskByIdPage";
import { Login } from "./components/02-hooks/login";
import { Register } from "./components/02-hooks/register";

export function Router () {

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/news" element={<News />} />
      <Route path="/tareas" element={<TasksPage />} />
      <Route path="/tareas/:taskId" element={<TaskByIdPage />} />
      <Route path="/perfil" element={<ProfilePage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  )
}