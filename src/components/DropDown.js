import React from 'react'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card, Container, Jumbotron,Dropdown} from 'react-bootstrap';

export default class DropDown extends React.Component{
    constructor(props){
        super(props);
        this.state={
            mobile:{
                "Android":{
                    "one":"Samsung",
                    "two":"HTC"
                }},
            garments:{
                "Tshirts":{
                    "RoundNeck":{
                        "one":"abc"
                    },

                
            
            }    
        }
        }
    }
    render(){
       
        return(
            <div><Jumbotron> <Container className="jombotron">
           <p>Practical 1</p>
            <Dropdown>
  <Dropdown.Toggle variant="success" id="dropdown-basic">
    Select Category
  </Dropdown.Toggle>

  <Dropdown.Menu>
    <Dropdown.Item>Automobile</Dropdown.Item>
    <Dropdown.Item>Mobile<ul><li>Android <ul><li>{this.state.mobile.Android.one}</li><li>{this.state.mobile.Android.two}</li></ul></li><li>IOS</li></ul> </Dropdown.Item>
    <Dropdown.Item>Computer</Dropdown.Item>
        <Dropdown.Item>Garments<ul><li>Tshirt<ul><li>Round Neck<ul><li>{this.state.garments.Tshirts.RoundNeck.one}</li></ul><li>vneck</li></li></ul></li></ul></Dropdown.Item>
    <Dropdown.Item>Astrology</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>

           </Container></Jumbotron> </div>
        )
    }
}
