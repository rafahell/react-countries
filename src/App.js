import React, { Component } from 'react';
import {Route} from 'react-router-dom'
import Countries from './Countries';
import CountryDetails from './CountryDetails';
import {Container} from 'react-bootstrap';
import './App.scss';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
    }
    this.handleClick = this.handleClick.bind(this);
  }


  handleClick(e) {
    const name = e.name.replace(/[.*+?^${}()|[\]\\]/g, '\\$&').toLowerCase();
    this.setState({cName: name })
  }

  componentDidMount() {
  }
  
 
  render() {

    return (
      
        <Container>
          <Route exact path="/" render={() => (
              <Countries  
                  cName={this.state.cName} 
                  handleClick={this.handleClick}
              />
            )}
          />

          <Route path="/details/" render={({history}) => (
            <CountryDetails
                cName={this.state.cName}
            />
          )}
        />
      </Container>
    );
  }
}

export default App;
