import { React, axios, config } from "../../Helpers/ImportHelper";

class Auth {
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
	isLoggedIn(logout) {
		if (logout == "true" || !localStorage.getItem("authenticationData")) {
			localStorage.clear();
			sessionStorage.clear();
			return false;
		} else {
			return true;
		}
	}

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

	Unset = () => {
		localStorage.clear();
		sessionStorage.clear();
		window.location.reload();
	};
}
export default new Auth();
