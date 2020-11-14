import React from "react";
import { GlobalStyle } from "./styles/GlobalStyles";
import { Logo } from "./components/Logo";
import { Home } from "./pages/Home";

import { Router } from "@reach/router";

export const App = () => (
  <>
    <GlobalStyle />
    <Logo />
    <Router>
      <Home path="/" />
      <Home path='/pet/:id' />
    </Router>
  </>
);
