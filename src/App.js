import React, { Component } from 'react';
import { Table, } from 'react-bootstrap';
import axios from 'axios';

class App extends Component {
  state = { weather: [], city: {}, forecast: [] }

  componentDidMount() {
    axios.get('http://api.openweathermap.org/data/2.5//forecast?zip=84113')
      .then( res => this.setState({ weather: res.data, city: res.data.city, forecast: res.data.list }))
      .catch( err => { console.log(err)});
  }

  displayPeople = () => {
    return this.state.weather.map( (w, i) => {
      return(
        <tr key={i}>
          <td>{i}</td>
          <td>{w.city}</td>
          <td>{w.temperature}</td>
          <td>{w.wind}</td>
        </tr>
      )
    })
  }

  render() {
    return (
      <Table striped bordered condensed hover>
      <thead>
        <tr>
          <th>#</th>
          <th>City</th>
          <th>Temperature</th>
          <th>Wind</th>
        </tr>
      </thead>
      <tbody>
      </tbody>
    </Table>
    );
  }
}

export default App;
