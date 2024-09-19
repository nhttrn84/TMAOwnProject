import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import { LoginPage } from "./pages";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={ <LoginPage/> }/>
        <Route path="/login" element={ <LoginPage/> }/>
      </Routes>
    </Router>
  );
}