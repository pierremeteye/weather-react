import React, {Component} from "react";

import Titles from "./Components/Titles";
import Form from "./Components/Form";
import Weather from "./Components/Weather";

const API_KEY = "e08e9dec470345fa1ce3200ec377b311";

export default class App extends Component {

	state = {
		temperature: undefined,
		city: undefined,
		country: undefined,
		humidity: undefined,
		description: undefined,
		error: undefined
	}

	getWeather = async (e) => {
		e.preventDefault();
		const CITY = e.target.elements.city.value;
		const COUNTRY = e.target.elements.country.value;
		const API_CALL = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${CITY},${COUNTRY}&units=metric&appid=${API_KEY}`);
		const data = await API_CALL.json();
		console.log(data);

		if (CITY && COUNTRY) {
			this.setState({
				temperature : data.main.temp,
				city: data.name,
				country: data.sys.country,
				humidity: data.main.humidity,
				description: data.weather[0].description,
				error: ''
			})
		} else if (data.cod === '404') {
			this.setState({
				temperature : undefined,
				city: undefined,
				country: undefined,
				humidity: undefined,
				description: undefined,
				error: 'City or country not found'
			})
		} else {
			this.setState({
				temperature : undefined,
				city: undefined,
				country: undefined,
				humidity: undefined,
				description: undefined,
				error: 'Please enter a value'
			})
		}
	}

	render(){
		return(
			<div>
				<div className="wrapper">
					<div className="main">
						<div className="container custom">
							<div className="row">
								<div className="col-xs-5 title-container">
									<Titles />
								</div>
								<div className="col-xs-7 form-container">
									<Form getWeather={this.getWeather} />
									<Weather 
										temperature={this.state.temperature}
										city={this.state.city}
										country={this.state.country}
										humidity={this.state.humidity}
										description={this.state.description}
										error={this.state.error}
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}


				
				