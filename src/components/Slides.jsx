import React from "react";
import { Carousel, Container } from "react-bootstrap";
const Slides=()=>{
return(
    <>
   
      <Carousel  style={{marginTop:'55px',width:"100%"}}>
      
  
  <Carousel.Item>
    <img
      
      src="/image002.png"
      height="200px"
      width="100%"
      alt="Second slide"
    />
   
  </Carousel.Item>
  
</Carousel>

    </>
)
}
export default Slides