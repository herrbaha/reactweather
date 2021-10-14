import React from 'react';
import "./weatherresult.css";
import Button from 'react-bootstrap/Button';
import  'bootstrap/dist/css/bootstrap.min.css' ;

const Weatherresult = ({date, humidity, temp,icon, condition}) => {
    return (
      //  <div className="result">
      //     <h3>{date}</h3>
      //     <h4>{temp} C</h4>
      //     <img src={icon} alt=""/>
      //     <h5>{condition}</h5>
      //     <h3>{humidity}%</h3> 
      //  </div>
       <Container>
       <Row>
         <Col>{date}</Col>
         <Col>{temp} C</Col>
         <Col><img src={icon} alt=""/></Col>
         <Col>{condition}</Col>
         <Col>{humidity}%</Col>
       </Row>
     </Container>
    )
}

export default Weatherresult;
