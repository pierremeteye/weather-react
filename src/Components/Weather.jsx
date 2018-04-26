import React, {Component} from 'react';

export default class Weather extends Component {
	render(){
		return(
			<div className="weather__info">
				{this.props.temperature && <p className="weather__key">Temperature : <span>{this.props.temperature}</span></p>}
				{this.props.city && <p className="weather__key">City : <span>{this.props.city}</span></p>}
				{this.props.country && <p className="weather__key">Country : <span>{this.props.country}</span></p>}
				{this.props.humidity && <p className="weather__key">Humidity : <span>{this.props.humidity}</span></p>}
				{this.props.description && <p className="weather__key">Description : <span>{this.props.description}</span></p>}
				{this.props.error && <p className="weather__key">{this.props.error}</p>}
			</div>
		)
	}
}