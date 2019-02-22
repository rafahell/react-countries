import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import axios from 'axios';
import Loading from './Loading';
import {Container,Row,Col} from 'react-bootstrap';
import './App.scss';


class Countries extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      countries: [],
    }
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

  componentDidMount() {
    this.getAllcountries();
  }
  
 
  render() {

    const {countries, isLoaded} = this.state;
    const {handleClick} = this.props
    return (
      isLoaded ?
        
              <Container>
                <Row>
                    {countries.map((country,index) =>
                      <Col className="countries" sm={3} key={`countries-${index}`} onClick={() => handleClick(country) }> 
                        <Link to="/details"><p> {country.name} </p>
                        <img className="flag" src={country.flag} alt={country.name} /></Link>
                      </Col>            
                    )}
                </Row>
              </Container>
          
      : <Loading message="Loading..." />
      
    );
  }
}


export default Countries;
