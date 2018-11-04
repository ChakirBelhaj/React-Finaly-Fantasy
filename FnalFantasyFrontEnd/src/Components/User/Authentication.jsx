import { React, axios, config } from "../../Helpers/ImportHelper";

class Auth {
	//ajax call to refresh authentication token if expired
	getAuthData = () => {
		const ajax = axios({
			method: "post",
			url: config.apiUrl + "Users/refreshAccessToken",
			data: { refreshToken: JSON.parse(localStorage.getItem("authenticationData")).refreshtoken },
			withCredentials: true,
			headers: {
				"Access-Control-Allow-Origin": "*",
				"Content-Type": "application/json"
			}
		})
			.then(response => {
				localStorage.setItem("authenticationData", JSON.stringify(response.data));
			})
			.catch(error => {
				return error;
				error.response && error.response.data ? alert(error.response.data) : alert("there is an server error, please try again later!");
			});
		return ajax;
	};

	//check if user is logged in, logs user out if logout parameter is true
	isLoggedIn(logout) {
		if (logout == "true" || !localStorage.getItem("authenticationData")) {
			localStorage.clear();
			sessionStorage.clear();
			return false;
		} else {
			return true;
		}
	}

	//check if user is still logged in
	isAuthenticated = () => {
		return new Promise((done, reject) => {
			JSON.parse(!localStorage.getItem("authenticationData")) || Date.now() > Date.parse(JSON.parse(localStorage.getItem("authenticationData")).expiredate)
				? this.getAuthData()
						.then(success => {
							done(true);
						})
						.catch(error => {
							this.Unset();
							reject(false);
						})
				: done(true);
		});
	};

	// clears localstorage and sessionstorage
	Unset = () => {
		localStorage.clear();
		sessionStorage.clear();
		window.location.reload();
	};
}
export default new Auth();
