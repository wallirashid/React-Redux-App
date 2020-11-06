import React from "react";
import Header from "../components/Header";
import ContactList from "./ContactList";
import AddContact from "./AddContact";
import "./main.css";
import { Route, Switch } from "react-router-dom";
import EditContact from "./EditContact";
import Error from "./Error";
function App() {
  return (
    <div className="App">
      <Route component={Header} />
      <Switch>
        <Route exact path="/" component={ContactList} />
        <Route path="/add-contact" component={AddContact} />
        <Route path="/edit-contact:id" component={EditContact} />
        <Route component={Error} />
      </Switch>
    </div>
  );
}

export default App;
