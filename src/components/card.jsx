import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {useNavigate} from 'react-router-dom'

const MemeCard=(props)=>{
    const navigate=useNavigate();

    return (
    <Card style={{ width: '18rem', margin:"20px" }}>
      <Card.Img variant="top" src={props.img} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Button 
        onClick={()=>navigate(`/edit?url=${props.img}`)}
        variant="primary">Edit</Button>
      </Card.Body>
    </Card>
    )
}

export default MemeCard;