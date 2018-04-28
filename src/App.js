import React, { Component } from 'react';
import { Card, Image, Container, } from 'semantic-ui-react';
import axios from 'axios';
import { api } from './utils/api'

class App extends Component {
	state = { weather: [] }

	componentDidMount() {
		axios.get(`http://api.openweathermap.org/data/2.5/weather?id=5780993&APPID=${api}`)
			.then( res => this.setState({ weather: res.data }))
			.catch( err => { console.log(err)});
	}

	displayWeather = () => {
		const { weather } = this.state;
		if (weather.main) {
		let temp = (weather.main.temp * (9/5) - 459.67).toFixed(2)
		let icon = weather.weather[0].icon
			return(
				<div>
				<Image centered src={`http://openweathermap.org/img/w/${icon}.png`} />
					<Card.Content>
						<Card.Header textAlign='center'>
							{weather.name}
						</Card.Header>
						<Card.Description textAlign='center'>
							{temp} &deg;F
						</Card.Description>
					</Card.Content>
					<Card.Content extra textAlign='center'>
						Humidity: {weather.main.humidity}
					</Card.Content>
				</div>
			)}
	}

	render() {
		return (
			<Container>
				<Card centered={true}>
					{this.displayWeather()}
				</Card>
			</Container>
			)
	}
}

export default App;
