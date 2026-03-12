import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import Tasks from "./components/Tasks";
import UsersList from "./components/UsersList";



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignUp />} /> 
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/tasks" element={<Tasks />} />
         <Route path="/users" element={<UsersList />} />
      </Routes>
    </Router>
  );
}

export default App;