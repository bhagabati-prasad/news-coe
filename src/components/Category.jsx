import React, { useEffect, useState } from 'react';
import Navigation from './Navigation';
import Catcard from './Catcard';
import { Row, Col, Container } from 'react-bootstrap';
const Category = () => {
  console.log('hello category');
  const [users, setUsers] = useState([]);
  const [word, setWord] = useState('');
  let urlParams = new URLSearchParams(window.location.search);
  let myParam = urlParams.get('q');
  console.log(myParam);
  useEffect(() => {
    setWord(myParam);
    console.log('hello from use', word);
    fetch('https://newerver.herokuapp.com/all', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({
        myParam,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.length > 0) {
          console.log(data);
          setUsers(data);
        } else {
          console.log(data);
          console.log('somethng went wrong with server , check once  !');
        }
      })
      .catch((err) =>
        console.log('something went wrong with server', err.response)
      );
  }, [word]);

  return (
    <div>
      <>
        <Container fluid>
          <Row>
            <Navigation />
          </Row>
          <Row>{users && !!users.length && <Catcard users={users} />}</Row>
        </Container>
      </>
    </div>
  );
};
export default Category;
