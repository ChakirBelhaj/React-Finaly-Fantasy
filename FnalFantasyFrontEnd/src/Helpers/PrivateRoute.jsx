import { React, axios, config, Auth} from "../Helpers/ImportHelper";
import { Route, Redirect } from "react-router-dom";
const PrivateRoute = ({ component: Component, role, logout, parameter, ...rest }) => (
	<Route
		{...rest}
		render={props => {
			if (!Auth.isLoggedIn(logout)) {
				return <Redirect to={{ pathname: "/login", state: { from: props.location } }} />;
			}

			if (JSON.parse(localStorage.getItem("authenticationData")).rol && role != JSON.parse(localStorage.getItem("authenticationData")).rol) {
				return (
					<Redirect
						to={{
							pathname: "/unauthorised",
							state: { from: props.location }
						}}
					/>
				);
			}

			return Auth.isAuthenticated()
				.then(() => {
					return true;
				})
				.catch(() => {
					alert("alert");
					return false;
				}) ? (
				<Component {...props} />
			) : (
				<Redirect to={{ pathname: "/login", state: { from: props.location } }} />
			);
		}}
	/>
);

export default PrivateRoute;
