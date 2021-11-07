import React from "react";
import { Card,Row,Col} from "react-bootstrap";
import { useState } from "react";

const Cardlayout=({users})=>{
 
  const [readMore,setReadMore]=useState(false);
  
  
  const linkName=readMore?'Read Less << ':'Read More >> '
    return (
        <>
     
<Row className="justify-content-md-center w-100">
<Col xs={12} md={8}>
{users && users.map((cur,id)=>{
     const str=cur.content
    
      

       return(
           <>

<Card key={id} style={{ marginLeft:'22px', marginTop:'20px' }}>
    <Row >
    <Col md={3}>
  <Card.Img  className="mt-4"
            width="100%"
            height="150" src={cur.urlToImage}  />
  </Col>
  <Col md={9}>
  <Card.Body>
    <Card.Title >{cur.content}</Card.Title>
    <Card.Text>
    
  <p>{str && str.length>100 ? str && str.substr(0,101) : str && str.substr(0)}....</p>
  {str &&  str.length>100?<>
  <a style={{
  color: "blueviolet",cursor: "pointer",
}} className="read-more-link" onClick={()=>{setReadMore(!readMore)}}><h6>{linkName}</h6></a>
      {readMore && str.substr(101)}</> :<h6>Tap full story for more info</h6>
}
   <p> source :  {cur.source.name}</p>
    </Card.Text>
    <Card.Link className="btn btn-info" href={cur.url}>Full Story</Card.Link>
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

export default Cardlayout
