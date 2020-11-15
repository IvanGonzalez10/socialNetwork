import React from "react";
import { GlobalStyle } from "./styles/GlobalStyles";
import { Logo } from "./components/Logo";
import { Home } from "./pages/Home";
import { Favs } from "./pages/Favs";
import { User } from "./pages/User";
import { NotRegisteredUser } from "./pages/NotRegisteredUser";
import { NavBar } from "./components/NavBar";
import { NotFound } from './pages/NotFound';

import { Router } from "@reach/router";
import Context from './Context';

export const App = () => (
  <>
    <GlobalStyle />
    <Logo />
    <Router>
      <NotFound default />
      <Home path="/" />
      <Home path="/pet/:id" />
    </Router>
    <Context.Consumer>
      {({ isAuth }) =>
        isAuth ?
          <Router>
            <Favs path="/favs" />
            <User path="/user" />
          </Router>
         : <Router>
            <NotRegisteredUser path="/favs" />
            <NotRegisteredUser path="/user" />
          </Router>
      }
    </Context.Consumer>
    <NavBar />
  </>
);
