import { Button, Grid, Form, Modal, Header, Icon, Image, Menu, Segment, Sidebar } from "semantic-ui-react";
import { React, Layoutclient } from "../Helpers/ImportHelper";


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
					{/* <CompanyDetails></CompanyDetails> */}
                </Layoutclient>
            </React.Fragment>
        );
    };
}

export default Dashboard;
