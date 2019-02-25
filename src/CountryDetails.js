import React from 'react';
import axios from 'axios';
import {Container, Col} from 'react-bootstrap';
import MapGL, {Marker, NavigationControl} from 'react-map-gl';
import Pin from './pin';
import 'mapbox-gl/dist/mapbox-gl.css'

const TOKEN = 'pk.eyJ1IjoicmFmYWhlbGwiLCJhIjoiY2pzMzJ1MnZ2MjQxYjQ0bHh4amQyczJyMSJ9.-iEWBE9bMBsJvf5uUtFiAw';
const navStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    padding: '10px',
  };

class CountryDetails extends React.Component {
    // constructor(props) {
    //     super(props);

        state = {
            details: [],
            viewport: {
                latitude: -10,
                longitude: -35,
                zoom: 2,
                bearing: 0,
                pitch: 0
            },
            markers: [],
        };
    // }
  

    getSingleCountry(name) {
        axios.get("https://restcountries.eu/rest/v2/name/" + name)
        .then(res => {
            const details = res.data;
            this.setState({ 
                details
            }) 
        }).catch((response) => {
           if (response.status === undefined) {
               window.location = '/' 
           }
        })
    }

    _updateViewport = (viewport) => {
        this.setState({viewport});
    }

    componentDidMount () {
        const {cName} = this.props;
        this.getSingleCountry(cName);
    }
    
    render(){

        const { details, viewport} = this.state;
        // const { cName} = this.props
        
        return(
            <Container>
                {details.map((d,index) =>
                    <Col key={`details-${index}`}>
                        <p>Name: {d.name}</p>
                        <p>Capital: {d.capital}</p>
                        <p>Population: {parseInt(d.population).toLocaleString()}</p>
                        <p>Region: {d.region}</p>
                        
                        <MapGL 
                          {...viewport}
                            width="100%"
                            height="400px"
                            mapStyle="mapbox://styles/mapbox/streets-v10"
                            onViewportChange={this._updateViewport}
                            longitude={d.latlng[1]}
                            latitude={d.latlng[0]}
                            mapboxApiAccessToken={TOKEN} >
                          
                          <Marker
                            longitude={d.latlng[1]}
                            latitude={d.latlng[0]}
                            // offsetTop={-20}
                            //  offsetLeft={-10}
                            >
                            <Pin size={20} />
                          </Marker>
                          
                          <div className="nav" style={navStyle}>
                            <NavigationControl  onViewportChange={(viewport) => this.setState({viewport})} /> 
                          </div>

                        </MapGL>
                    </Col> 
                )}
            </Container>
            
        )
    }
}
export default CountryDetails;