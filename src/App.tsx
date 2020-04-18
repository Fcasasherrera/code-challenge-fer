import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import 'antd/dist/antd.css';
import Layout from "./components/Layout";
import { HomePage } from "./pages/Home";
import { TasksPage } from "./pages/Task";

function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route exact path="/Tasks">
            <TasksPage />
          </Route>
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
