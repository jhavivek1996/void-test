import React from 'react';
import moment from 'moment';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card, Container,Jumbotron} from 'react-bootstrap';

export default class DateTime extends React.Component{
    constructor(props){
        super(props)
        this.state={
            date: new Date().toLocaleString(),
            time : new Date().toLocaleTimeString()
        }
    }
    render(){
        const dateData = this.state.date;
        return(<div><Jumbotron> 
        
        
        <br/>
        <div>
            <Container className="container-fluid jombotron">
            <p>Practical 2</p>
        <Card style={{ width: '20rem' }} >
  <Card.Header className="bg-success text-light">React Date and Time</Card.Header>
  <Card.Body className="bg-danger text-light">
    <Card.Title>Date Time :</Card.Title>
    <Card.Text><strong>
     {moment(this.dateData).format('YYYY-MM-DD')} {this.state.time}</strong>
    </Card.Text>
    
  </Card.Body>
</Card></Container></div></Jumbotron></div>)
    }
}