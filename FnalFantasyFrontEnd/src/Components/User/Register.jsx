import { Button, Grid, Form, Modal, Header, Icon, Image, Menu, Segment, Sidebar } from "semantic-ui-react";
import { React, axios, config, Auth, NotificationManager } from "../../Helpers/ImportHelper";
import { Router } from "react-router-dom";

class Register extends React.Component {
    constructor() {
        super();
        this.state = {
            open: false,
            Email: "",
            Password1: "",
            Password2: ""
        };
    }

    show = size => () => this.setState({ size, open: true });
    close = () => this.setState({ open: false });

    handleInputChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    handleSubmit = event => {
		event.preventDefault();
		if(this.state.Password1 === this.state.Password2){
			this.RegisterNewUser(this.state);
		}else{
			NotificationManager.error("Passwords dont match!", "");
		}
    };

    RegisterNewUser(state) {
        axios({
            method: "post",
            url: config.apiUrl + "Users/register",
            data: {
                email: state.Email,
                pass: state.Password1
            },
            withCredentials: true,
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Content-Type": "application/json"
            }
        })
            .then(response => {
                NotificationManager.success("Register success!", "");
                this.setState({ open: false });
                return true;
            })
            .catch(error => {
                error.response && error.response.data && error.response.status == 440 ? console.log() : console.log();
                error.response && error.response.data ? NotificationManager.error(error.response.data, "Error") : alert("there is an server error, please try again later!");
                return false;
            });
	}
	
    render() {
        const { open, size } = this.state;

        return (
            <React.Fragment>
                <Button color="red" positive onClick={this.show("small")}>
                    Register
                </Button>

                <Modal size="small" open={open} onClose={this.close}>
                    <Modal.Header>Register</Modal.Header>
                    <Modal.Content>
                        <Modal.Description>
                            <Form onSubmit={this.handleSubmit}>
                                <Form.Field>
                                    <Form.Input label="Email:" required name="Email" type="email" defaultValue={this.state.Email} onChange={this.handleInputChange} />
                                    <Form.Input label="Password:" required name="Password1" type="password" defaultValue={this.state.Password1} onChange={this.handleInputChange} />
                                    <Form.Input label="Repeat Password:" required name="Password2" type="password" defaultValue={this.state.Password2} onChange={this.handleInputChange} />
                                </Form.Field>
                                <Button color="red" positive type="submit">
                                    Register
                                </Button>
                            </Form>
                        </Modal.Description>
                    </Modal.Content>
                </Modal>
            </React.Fragment>
        );
    }
}
export default Register;
