import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Alertcss from "./Alerts.module.css"

function Alerts() {
  return (
    <div className={Alertcss.main}>
      <Form >
        Where are you Sending from ?
        <Form.Group controlId="formGridState">
          <Form.Label>Cities</Form.Label>
          <Form.Control as="select" defaultValue="Choose...">
            <option>Choose...</option>
            <option>Ahodwo</option>
            <option>Asokwa</option>
            <option>Tech</option>
          </Form.Control>
        </Form.Group>
      <Form.Row>
        What is the size of your parcel
        <Form.Group controlId="formGridEmail">
          <Form.Label>Weight</Form.Label>
          <Form.Control type="text" placeholder="Enter size in KG" />
        </Form.Group>

        <Form.Group controlId="formGridPassword">
          <Form.Label>Description</Form.Label>
          <Form.Control type="text" placeholder="Enter here" />
        </Form.Group>
        </Form.Row>
        Where are you Sending To ?
        <Form.Group controlId="formGridState">
          <Form.Label>Cities</Form.Label>
          <Form.Control as="select" defaultValue="Choose...">
            <option>Choose...</option>
            <option>Ahodwo</option>
            <option>Asokwa</option>
            <option>Tech</option>
          </Form.Control>
        </Form.Group>
          Who are you sending to?
          <Form.Group controlId="formGridEmail">
          <Form.Label>Contact Name</Form.Label>
          <Form.Control type="text" placeholder="" />
        </Form.Group>
        
        <Form.Group controlId="formGridEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="" />
        </Form.Group>
        <Form.Group controlId="formGridEmail">
          <Form.Label>Phone</Form.Label>
          <Form.Control type="text" placeholder="" />
        </Form.Group>

        
      <Form.Group controlId="formGridAddress1">
        <Form.Label>Address</Form.Label>
        <Form.Control placeholder="1234 Main St" />
      </Form.Group>

      

      <Form.Row>
        <Form.Group controlId="formGridCity">
          <Form.Label>City</Form.Label>
          <Form.Control />
        </Form.Group>

      

        
        </Form.Row>
        
        <textarea value="Pick up my Parcel"></textarea>
        <textarea value="Will drop it off at your Office"></textarea>

      
        <Button variant="primary" type="submit">
        Submit
      </Button>

      </Form>
      
     

    </div>
    
  );
}

export default Alerts;
