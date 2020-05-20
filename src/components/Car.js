import React from 'react'
import cars from '../cars.json'
// import material ui components here //
import { Container, Paper, Chip } from '@material-ui/core'

const Car = (props) => {
    const id = props.match.params.id;
    const carInfo = cars[id - 1];
    return (
        <Paper>
            <Container>
            <h1>A specific car: {id}</h1>
            <h3>{carInfo.Name}</h3>
            <Chip><span>Horsepower: {carInfo.Horsepower}</span></Chip>
        </Container>
        </Paper>
        
        
    )
}

export default Car