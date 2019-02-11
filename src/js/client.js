import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, hashHistory } from "react-router";

import Uploaddata from "./pages/Uploaddata";
import Dashboard from "./pages/Dashboard";
import PatientLayout from "./pages/PatientLayout";
import Response from "./pages/Response";
import Homepage from "./pages/Homepage";
import Login from "./pages/Login";
import Register from "./pages/Register"


const app = document.getElementById('app');

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={PatientLayout}>
      <IndexRoute component={Dashboard}></IndexRoute>
      <Route path="uploaddata" name="uploaddata" component={Uploaddata}></Route>
      <Route path="response" name="response" component={Response}></Route>
    </Route>
  </Router>,
app);
