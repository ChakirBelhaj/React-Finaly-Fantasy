import { React, Layoutclient } from "../Helpers/ImportHelper";
import { Button, Grid, Form, Modal, Header, Icon, Image, Menu, Segment, Sidebar } from "semantic-ui-react";
import ChatBot from "react-simple-chatbot";
// import ChatBot from "react-simple-chasdstbot";

const steps = [
    {
        id: "0",
        message: "Welcome to react chatbot!",
        trigger: "1"
    },
    {
        id: "1",
        message: "Bye!",
        end: true
    }
];

class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            companyInfo: ""
        };
    }

    render = () => {
        return (
            <React.Fragment>
                <Layoutclient>
                    <Grid columns="two">
                        <Grid.Row>
                            <Grid.Column>
                                
                            </Grid.Column>
                            <Grid.Column>
                            <ChatBot
                            steps={[
                                {
                                    id: "1",
                                    message: "FFI: What is the first place you start in the very first game?",
                                    trigger: "2"
                                },
                                {
                                    id: "2",
                                    options: [{ value: 1, label: "Cornelia", trigger: "4" }, { value: 2, label: "Midgar", trigger: "3" }, { value: 3, label: "Forest of All Beginnings", trigger: "3" }]
                                },
                                {
                                    id: "3",
                                    message: "I CAST DOOM UPON YOU, TRY AGAIN!",
                                    trigger: "2"
                                },
                                {
                                    id: "4",
                                    message: "Awesome! You are a true MASTER of the fantasy arts!",
                                    end: true
                                }
                            ]}
                        />
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Layoutclient>
            </React.Fragment>
        );
    };
}

export default Dashboard;
