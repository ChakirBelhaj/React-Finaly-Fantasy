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

        // this.handleInputChange = this.handleInputChange.bind(this);
    }

    // componentDidMount = () => {
    //   console.log("message")
    //   NotificationManager.success('Success message', 'Title here');
    // }

    handleInputChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    handleSubmit = event => {
        event.preventDefault();
        this.Login(this.state);
    };

    Login(dataFromState) {
        axios({
            method: "post",
            url: config.apiUrl + "Users/login",
            data: {
                email: dataFromState.email,
                password: dataFromState.password
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
                    {/*
          Heads up! The styles below are necessary for the correct render of this example.
          You can do same with CSS, the main idea is that all the elements up to the `Grid`
          below must have a height of 100%.
        */}
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
