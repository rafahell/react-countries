import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import Loading from './Loading';
import {Container,Row,Col} from 'react-bootstrap';
import './App.scss';


function isSearched(searchTerm) {
    return function(item) {
      return !searchTerm || item.name.toLowerCase().includes(searchTerm.toLowerCase());
    }
  }  

class Countries extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      searchTerm: '',
      countries: [],
    }
    this.searchValue = this.searchValue.bind(this);
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

  searchValue (e) {
    this.setState ({searchTerm: e.target.value})
  }

  componentDidMount() {
    this.getAllcountries();
  }
  
 
  render() {

    const {countries, isLoaded, searchTerm} = this.state;
    const {handleClick} = this.props
    return (


        
      isLoaded ?
        <div>
            <Container fluid>
                <Row>
                    <div className="wrapper-search">
                        <form>
                            <input type="search" placeholder="Search" onChange={this.searchValue}/>
                        </form>
                    </div>
                </Row>
            
            
            
                <Row>
                    {countries.filter(isSearched(searchTerm)).map((country,index) =>
                      <Col className="countries" sm={2} key={`countries-${index}`} onClick={() => handleClick(country) }> 
                        <Link to="/details"><p> {country.name} </p>
                        <img className="flag" src={country.flag} alt={country.name} /></Link>
                      </Col>            
                    )}
                </Row>
            </Container>
        
        </div>
      : <Loading message="Loading..." />
      
    );
  }
}


export default Countries;
