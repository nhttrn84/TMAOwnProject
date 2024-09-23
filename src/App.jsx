import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import { Provider } from 'react-redux';
import { store } from "./stores/store";
import { LoginPage, RegisterPage, Dashboard } from "./pages";

export default function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={ <LoginPage/> }/>
          <Route path="/dashboard" element={ <Dashboard/> } />
          <Route path="/login" element={ <LoginPage/> }/>
          <Route path="/register" element={ <RegisterPage/> }/>
        </Routes>
      </Router>
    </Provider>
  );
}