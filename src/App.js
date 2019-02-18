import React, { Component } from 'react';
import Loading from './Loading';
import axios from 'axios';
import {Container,Row,Col} from 'react-bootstrap';
import './App.scss';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      countries: []
    }
    this.handleClick = this.handleClick.bind(this);
  }

  getAllMaps() {
    axios.get(`https://restcountries.eu/rest/v2/all`)
      .then(res => {
        const countries = res.data;
        this.setState({ 
          countries,
          isLoaded: true 
        });
      })

      this.setState ({
        isLoaded: false
      })
  }

  getSingleCountry(id,status) {
    axios.get("https://restcountries.eu/rest/v2/name/" + id)
    
      .then(res => {
        const countryDetails = res.data;
        status === true ?
        this.setState({ 
          countryDetails,
          isLoaded: true 
        }) : this.setState({isLoaded: false}) 
      })
  }

  handleClick(e) {
    this.setState({countryName: e.name })
    console.log(e.name)
  }

  componentDidMount() {
    this.getAllMaps();
  }
  
 
  render() {

    const {isLoaded, countries} = this.state;

    return (
      
      <Container>
        {isLoaded ?

          <Row>
          {countries.map((country,index) =>
            <Col className="countries" sm={3} key={`countries-${index}`} onClick={() => this.handleClick(country) }> 
              <p> {country.name} </p>
              <img className="flag" src={country.flag} alt={country.name} />
            </Col>
          )}
          </Row>


        : <Loading message="Loading..." />}
      </Container> 
    );
  }
}

export default App;
