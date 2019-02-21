import React from 'react';
import axios from 'axios';
import {Container} from 'react-bootstrap';

class CountryDetails extends React.Component {
    state = {
        details: [],
    }

    getSingleCountry(name) {
        axios.get("https://restcountries.eu/rest/v2/name/" + name)
        .then(res => {
            const details = res.data;
            console.log(details)
            this.setState({ 
                details
            }) 
        })

    }
    
    componentDidMount () {
        const {cName} = this.props;
        this.getSingleCountry(cName);
        console.log(cName)
    }

    render(){

        const { details } = this.state;
        
        return(
            <Container>
                {details.map((d,index) =>
                    <p key={`details-${index}`}>{d.name}</p>
                )}
            </Container>
            
        )
    }
}
export default CountryDetails;