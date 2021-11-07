import React ,{useState} from "react";
import { Card,Row,Col} from "react-bootstrap";
const Searchcard=({users})=>{
  
      return (
          <>
       
  <Row className="justify-content-md-center w-100">
  <Col xs={12} md={8}>
     {users && users.map((cur,id)=>{
 


console.log(cur);


         return(
             <>
  
  <Card key={id} style={{ marginLeft:'22px', marginTop:'100px' }}>
      <Row >
      <Col md={3}>
    <Card.Img  className="mt-4"
              width="100%"
              height="150" src={cur.urlToImage}  />
    </Col>
    <Col md={9}>
    <Card.Body>
      <Card.Title>{cur.title}</Card.Title>
      <Card.Text>
      <p> {cur.content}</p>
       source : {cur.author}
      </Card.Text>
      <Card.Link href={cur.url}>Full Story</Card.Link>
    </Card.Body>
    </Col>
    </Row>
  </Card>
  
             </>
         )
     })} 
  
  </Col>
  
  </Row>
  
  
  </>
  )
           
      
  }
  export default Searchcard
  
