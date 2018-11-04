import { React, Auth} from "../Helpers/ImportHelper";
import { Route, Redirect } from "react-router-dom";

// declaring private route
const PrivateRoute = ({ component: Component, role, logout, parameter, ...rest }) => (
	<Route
		{...rest}
		render={props => {
			//logs user out
			if (!Auth.isLoggedIn(logout)) {
				return <Redirect to={{ pathname: "/login", state: { from: props.location } }} />;
			}

			// check rif loggedin user is permitted to check the page
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

			//calling auth function
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
