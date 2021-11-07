import React, { useState, useEffect } from "react";

import { Container, Row, Col } from "react-bootstrap";
import Navigation from "./Navigation";
import Searchcard from "./Searchcard";
const Allnews = () => {
  const [word, setWord] = useState();
  const [users, setUsers] = useState([]);

  useEffect(() => {
    console.log("hello");
    const urlParams = new URLSearchParams(window.location.search);
    const myParam = urlParams.get("q");
    setWord(myParam);
    getUsers();
  }, [word]);
  const getUsers = async () => {
    console.log("hello");
    try {
      let response = await fetch(
        `https://newsapi.org/v2/everything?q=${word}&sortBy=popularity&apiKey=825a0c3207b24416b15fe1e1d1e34eb9&pageSize=5&page=1&language=en`
      );
      response = await response.json();
      setUsers(response.articles);

      console.log(response.articles);
    } catch (error) {
      console.log("my error is " + error);
    }
  };
  return (
    <>
      <Container fluid>
        <Row>
          <Navigation />
        </Row>
        <Row>
          <Searchcard users={users} />
        </Row>
      </Container>
    </>
  );
};
export default Allnews;
