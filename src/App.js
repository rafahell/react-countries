import React, { Component } from 'react';
import axios from 'axios';
import {Container,Row,Col} from 'react-bootstrap';
import './App.scss';

class App extends Component {
  state = {
    persons: []
  }

  componentDidMount() {
    axios.get(`https://jsonplaceholder.typicode.com/users`)
      .then(res => {
        const persons = res.data;
        this.setState({ persons });
      })
  }

 
  render() {

    const {persons} = this.state;

    return (
      <Container>

          <Row>
          {persons.map((person,index) =>
            <Col sm={4} key={`persons-${index}`}><p> {person.name} </p></Col>
          )}
          </Row>

      </Container>
    );
  }
}

export default App;
