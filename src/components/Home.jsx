import React from "react";
import { Container,Row,Col } from "react-bootstrap";
import Navigation from "./Navigation";
import { useState,useEffect } from "react";
import Cardlayout from "./Cardlayout";
import ReactPaginate from "react-paginate";
import Slides from "./Slides";
const Home=()=>{
  const [pageCount, setpageCount] = useState(0);

  let limit = 10;
  const [users, setUsers] = useState([]);
  const getUsers = async () => {
      try {
          let response = await fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=825a0c3207b24416b15fe1e1d1e34eb9&page=1&pageSize=${limit}`)
        response = await response.json()
        setUsers(response.articles);
        setpageCount(Math.ceil(50 / limit));
          console.log(response.articles)
         
      }
       catch (error) {
          
          console.log("my error is "+ error);
      }
  }

  useEffect(() => {
      getUsers();
  },[pageCount]);


  const fetchComments = async (currentPage) => {
    let res = await fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=825a0c3207b24416b15fe1e1d1e34eb9&page=${currentPage}pageSize=${limit}`)
  
    
      res = await res.json();
     return res;
   };

  const handlePageClick = async (data) => {
    console.log(data.selected);

    let currentPage = data.selected + 1;

    const commentsFormServer = await fetchComments(currentPage);

    setUsers(commentsFormServer.articles);
   
  };

  

    return(
        <>
      <Container fluid>
   <Row >       
   <Navigation/>     
  </Row>
  <Row><Slides/></Row>
    <Row>
     <Cardlayout users={users}/>
    </Row>
    <Row>
      
    <ReactPaginate
        previousLabel={"previous"}
        nextLabel={"next"}
        breakLabel={"..."}
        pageCount={pageCount}
        marginPagesDisplayed={2}
        pageRangeDisplayed={3}
        onPageChange={handlePageClick}
        containerClassName={"pagination justify-content-center"}
        pageClassName={"page-item"}
        pageLinkClassName={"page-link"}
        previousClassName={"page-item"}
        previousLinkClassName={"page-link"}
        nextClassName={"page-item"}
        nextLinkClassName={"page-link"}
        breakClassName={"page-item"}
        breakLinkClassName={"page-link"}
        activeClassName={"active"}
      />
    </Row>
      </Container>
        </>
    )
}
export default Home