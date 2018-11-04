import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import PrivateRoute from "./Helpers/PrivateRoute";
import "semantic-ui-css/semantic.min.css";
import { NotificationContainer } from "react-notifications";
import "react-notifications/lib/notifications.css";
import loginBackground from "./Images/loginn.jpg";

import Login from "./Pages/Login";
import Dashboard from "./Pages/Dashboard";

import FinalFantasy1 from "./Pages/FinalFantasy1";
import FinalFantasy2 from "./Pages/FinalFantasy2";
import FinalFantasy8 from "./Pages/FinalFantasy8";

class App extends Component {
    state = {};

    render() {
        return (
            <div
            style={{
                backgroundImage: "url(" + loginBackground + ")",
                width: "100%",
                height: "100%"
            }}
        >
            <React.Fragment>
                <BrowserRouter>
                    <Switch>
                        <Route exact path="/" component={Login} />
                        <Route exact path="/login" component={Login} />
                        <PrivateRoute logout="true" path="/logout" component={Login} />

                        <PrivateRoute role="3" path="/ff1" component={FinalFantasy1} />
                        <PrivateRoute role="3" path="/ff2" component={FinalFantasy2} />
                        <PrivateRoute role="3" path="/ff8" component={FinalFantasy8} />

                        <PrivateRoute role="3" path="/Dashboard" component={Dashboard} />
                        <Route render={props => <h1>Not Found</h1>} />
                    </Switch>
                </BrowserRouter>
                <NotificationContainer />
            </React.Fragment>
            </div>
        );
    }
}

export default App;
