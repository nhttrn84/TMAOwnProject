import { Dashboard, LoginPage, RegisterPage } from "./pages";
import {
  Route,
  BrowserRouter as Router,
  Routes
} from "react-router-dom";
import { ThemeProvider, createTheme } from '@mui/material/styles';

import { Provider } from 'react-redux';
import React from "react";
import { store } from "./stores/store";

export default function App() {
  return (
    <Provider store={store}>
      <ThemeProvider
        theme={createTheme({
          breakpoints: {
            values: {
              mobile: 0,
              tablet: 768,
              laptop: 1024,
              desktop: 1200,
            },
          },
        })}
      >
      <Router>
        <Routes>
          <Route path="/" element={ <LoginPage/> }/>
          <Route path="/dashboard" element={ <Dashboard/> } />
          <Route path="/login" element={ <LoginPage/> }/>
          <Route path="/register" element={ <RegisterPage/> }/>
        </Routes>
      </Router>
      </ThemeProvider>
    </Provider>
  );
}