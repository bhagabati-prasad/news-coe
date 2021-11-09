import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Navigation from "./Navigation";
import { useState, useEffect, useLayoutEffect } from "react";
import Cardlayout from "./Cardlayout";
import ReactPaginate from "react-paginate";
import Slides from "./Slides";
import Catcard from "./Catcard";
import NewCatcard from "./NewCatcard";
const Home = () => {
  const [pageCount, setpageCount] = useState(0);

  let limit = 10;
  const [users, setUsers] = useState([]);
  const [alldata, setData] = useState([]);
  const [newusers, setNewusers] = useState([]);

  // const getNew = async () => {
  //   try {
  //     let response = await fetch("/allnew");
  //     const result = await response.json();
  //     console.log("hello response", result);
  //     setpageCount(Math.ceil(result.length / 5));
  //     if (result) setData(await result);
  //     console.log("hello alldata", alldata);
  //     if (alldata.length > 1) setNewusers(await alldata.slice(0, 5));

  //     console.log("hello newusers", newusers);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  // const getUsers = async () => {
  //   try {
  //     let response = await fetch(
  //       `https://newsapi.org/v2/top-headlines?country=us&apiKey=825a0c3207b24416b15fe1e1d1e34eb9&pageSize=40`
  //     );

  //     setUsers(response.articles);
  //     setpageCount(Math.ceil(50 / limit));

  //     console.log(response.articles);
  //   } catch (error) {
  //     console.log("my error is " + error);
  //   }
  // };

  useLayoutEffect(() => {
    // getUsers();
    const getNew = fetch("https://newerver.herokuapp.com/allNew");
    getNew
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setData(data);
        console.log(alldata);
        setNewusers(alldata.slice(0, 5));
        setpageCount(5);
        console.log(newusers);
      });
  }, [pageCount]);

  // const fetchComments = async (currentPage) => {
  //   let res = await fetch(
  //     `https://newsapi.org/v2/top-headlines?country=us&apiKey=825a0c3207b24416b15fe1e1d1e34eb9&page=${currentPage}pageSize=${limit}`
  //   );

  //   res = await res.json();
  //   return res;
  // };

  const handlePageClick = async (data) => {
    console.log(data.selected);
    let currentPage = data.selected + 1;
    setNewusers(alldata.slice(5 * currentPage, 5 * currentPage + 5));
    console.log(newusers);

    // const commentsFormServer = await fetchComments(currentPage);

    // setUsers(commentsFormServer.articles);
  };

  return (
    <>
      {newusers.length < 1 ? null : (
        <>
          <Container fluid>
            <Row>
              <Navigation />
            </Row>
            <Row>
              <Slides />
            </Row>
            <Row>
              <NewCatcard users={newusers} />
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
      )}
    </>
  );
};
export default Home;
