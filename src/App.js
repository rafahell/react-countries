import React, { Component } from 'react';
import {Route, Link} from 'react-router-dom'
import axios from 'axios';
//import Loading from './Loading';
import CountryDetails from './CountryDetails';
import {Container,Row,Col} from 'react-bootstrap';
import './App.scss';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      countries: [],
      countryName: " "
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

  handleClick(e) {
    const name = e.name.replace(/[.*+?^${}()|[\]\\]/g, '\\$&').toLowerCase();
    this.setState({cName: name })
  }

  componentDidMount() {
    this.getAllcountries();
  }
  
 
  render() {

    // const {isLoaded, countries} = this.state;
    const {countries} = this.state;

    return (
      //isLoaded ?
      
        <Container>
          <Route exact path="/" render={() => (
              <Container>
                <Row>
                    {countries.map((country,index) =>
                      <Col className="countries" sm={3} key={`countries-${index}`} onClick={() => this.handleClick(country) }> 
                        <Link to="/details"><p> {country.name} </p>
                        <img className="flag" src={country.flag} alt={country.name} /></Link>
                      </Col>            
                    )}
                </Row>
              </Container>
            )}
          />

          <Route exact path="/details" render={({history}) => (
            <CountryDetails
              cName={this.state.cName}
            />
          )}
        />

      {/* : <Loading message="Loading..." /> */}
      </Container>
    );
  }
}

export default App;
