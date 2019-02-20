import React, { Component } from 'react';
import axios from 'axios';
import Loading from './Loading';
import {Container,Row,Col} from 'react-bootstrap';
import './App.scss';
import Main from './Main';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      countries: [],
      countryDetails: []
    }
    this.handleClick = this.handleClick.bind(this);
  }

  getAllcountries() {
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

  getSingleCountry(id) {
    axios.get("https://restcountries.eu/rest/v2/name/" + id)
    
      .then(res => {
        const countryDetails = res.data;
       // status === true ?
        this.setState({ 
          countryDetails,
          isLoaded: true 
        })// : this.setState({isLoaded: false}) 
      })
  }

  handleClick(e) {
    const countryName = e.name.replace(/\s/g, '');
    this.setState({countryName: e.name })
    console.log(e.name)
    window.location = '/details/' 
  }

  componentDidMount() {
    this.getAllcountries();
  }
  
 
  render() {

    const {isLoaded, countries} = this.state;

    return (
      
      <Container>
        
        {isLoaded ?

          <Row>
            <Main/>
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
