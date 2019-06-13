import React from 'react';
import { Container } from 'react-bootstrap';

const Loading = ({ message }) =>

    <Container>
        <div className="flex"></div>
        <div className="loader"></div>

        <div className="load-text">
            {message}
        </div>
    </Container>



export default Loading;