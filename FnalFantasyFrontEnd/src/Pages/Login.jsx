import { React, axios, config, NotificationManager } from "../Helpers/ImportHelper";
import { Redirect } from "react-router";
import { Button, Form, Grid, Header, Image, Message, Segment } from "semantic-ui-react";
import Register from "../Components/User/Register";
import CocoboImage from "../Images/Cocobo.png"; // relative path to image

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            redirect: false
        };
    }

    handleInputChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    handleSubmit = event => {
        event.preventDefault();
        this.Login(this.state);
    };

    //login function
    Login(State) {
        axios({
            method: "post",
            url: config.apiUrl + "Users/login",
            data: {
                email: State.email,
                password: State.password
            },
            withCredentials: true,
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Content-Type": "application/json"
            }
        })
            .then(response => {
                console.log(response);
                // setter
                if (response.status === 200) {
                    localStorage.setItem("authenticationData", JSON.stringify(response.data));
                    this.setState({ redirect: true });
                }
            })
            .catch(error => {
                if (error.response && error.response.data) {
                    NotificationManager.error(error.response.data, "Error");
                } else {
                    NotificationManager.error("there is an server error, please try again later!", "Title here");
                }
                this.setState({ redirect: false });
            });
    }

    render() {
        //check if user is logged in, if so redirect to dashboard
        if (localStorage.getItem("authenticationData") !== null) {
            return <Redirect to="/Dashboard" />;
        }
        const { redirect } = this.state;
        if (redirect) {
            return <Redirect to="/Dashboard" />;
        }
        return (
            <React.Fragment>
                <div className="login-form">
                    <style>{`
          body > div,
          body > div > div,
          body > div > div > div.login-form {
            height: 100%;
          }
        `}</style>
                    <Grid textAlign="center" style={{ height: "100%" }} verticalAlign="middle">
                        <Grid.Column style={{ maxWidth: 450 }}>
                            <Header as="h2" color="red" textAlign="center">
                                <Image src={CocoboImage} /> Welcome to Final Fantasy info
                            </Header>
                            <Form onSubmit={this.handleSubmit} size="large">
                                <Segment stacked>
                                    <Form.Input
                                        fluid
                                        required
                                        icon="user"
                                        type="email"
                                        name="email"
                                        iconPosition="left"
                                        placeholder="E-mail address"
                                        defaultValue={this.state.email}
                                        onChange={this.handleInputChange}
                                    />
                                    <Form.Input
                                        fluid
                                        required
                                        icon="lock"
                                        type="password"
                                        name="password"
                                        iconPosition="left"
                                        placeholder="Password"
                                        pe="password"
                                        defaultValue={this.state.password}
                                        onChange={this.handleInputChange}
                                    />
                                    <Button type="submit" color="red" fluid size="small">
                                        Login
                                    </Button>
                                    <br />
                                </Segment>
                            </Form>
                            <Register />
                        </Grid.Column>
                    </Grid>
                </div>
            </React.Fragment>
        );
    }
}
export default Login;
