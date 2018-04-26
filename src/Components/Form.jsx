import React, {Component} from 'react';

export default class Form extends Component {
	render(){
		return(
			<form onSubmit={this.props.getWeather}>
				<input type="text" name="city" placeholder="Paris"/>
				<input type="text" name="country" placeholder="FR"/>
				<button>Get Weather</button>
			</form>
		)
	}
}