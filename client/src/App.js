import React, { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AppContext from "./AppContext";
import MainWindow from "./App/MainWindow/MainWindow";
import LocalStorageHandler from "./LocalStorageHandler";
function App() {
  return (
    <AppContext.Provider value={{}}>
      <main className="App">
        <header className="App-header">Create Drunk Template!🍻🍻</header>
        <Router>
          <Switch>
            <Route path="/">
              <MainWindow />
            </Route>
          </Switch>
        </Router>
      </main>{" "}
    </AppContext.Provider>
  );
}

export default App;
