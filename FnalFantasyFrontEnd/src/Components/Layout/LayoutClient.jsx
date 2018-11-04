import { React } from "../../Helpers/ImportHelper";
import { Icon, Menu, Segment, Sidebar } from "semantic-ui-react";
import { Link } from "react-router-dom";
class Layoutclient extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			visible: true
		};
	}

	render() {
		return (
			<React.Fragment>
				<Sidebar.Pushable as={Segment} style={{ border: "none", margin: "0", borderRadius: "0px" }}>
					<Sidebar as={Menu} animation="push" direction="left" icon="labeled" inverted vertical visible={true} width="thin">
						<Menu.Item as={Link} to="/Dashboard">
							<Icon name="home" />
							Home
						</Menu.Item>
						<Menu.Item as={Link} to="/ff1">
							<Icon name="gamepad" />
							Final Fantasy I
						</Menu.Item>
						<Menu.Item as={Link} to="/ff2">
							<Icon name="gamepad" />
							Final Fantasy II
						</Menu.Item>
						<Menu.Item as={Link} to="/ff8">
							<Icon name="gamepad" />
							Final Fantasy VIII
						</Menu.Item>
						<Menu.Item as={Link} to="/logout">
							<Icon name="sign-out" />
							Logout
						</Menu.Item>
					</Sidebar>

					<Sidebar.Pusher>
						<Segment basic>{this.props.children}</Segment>
					</Sidebar.Pusher>
				</Sidebar.Pushable>
			</React.Fragment>
		);
	}
}

export default Layoutclient;
