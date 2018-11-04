import { React, axios, config, NotificationManager } from "../../Helpers/ImportHelper";
import { Button, Checkbox, Grid, Header, Icon, Image, Menu, Segment, Sidebar } from "semantic-ui-react";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import Auth from "../../Auth/";

class CompanyDetails extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            companyDetails: ""
        };
    }

    componentWillMount() {
        // if (Auth.isAuthenticated() !== false) {
            this.getComanyDetails();
        // }
    }
    getComanyDetails() {
        axios({
            method: "get",
            url: config.apiUrl + "companies/GetCompanyDetails",
            params: {
                token: JSON.parse(localStorage.getItem("authenticationData")).token
            }
        })
            .then(response => {
                if (response.status === 200) {
                    this.setState({ companyDetails: response.data });
                    console.log(this.state.companyDetails);
                }
                return true;
            })
            .catch(error => {
                error.response && error.response.data ? NotificationManager.error(error.response.data, "Error") : alert("there is an server error, please try again later!");
                error.response && error.response.data && error.response.status == 440 ? Auth.isAuthenticated() : console.log();
                return false;
            });
    }

    render() {
        if (this.state.companyDetails) {
            return <React.Fragment>
                <h1>{this.state.companyDetails.name}</h1>
                <h1>{this.state.companyDetails.description}</h1>
                <h1>{this.state.companyDetails.createdBy}</h1>
                <h1>{this.state.companyDetails.createdAt}</h1>
            </React.Fragment>;
        } else {
            return <React.Fragment />;
        }
    }
}

export default CompanyDetails;
