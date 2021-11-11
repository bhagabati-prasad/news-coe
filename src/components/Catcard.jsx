import React, { useState } from 'react';
import { Card, Row, Col, Container } from 'react-bootstrap';

const Catcard = ({ users }) => {
  console.log('hello', users);
  const [readMore, setReadMore] = useState(false);

  const linkName = readMore ? 'Read Less << ' : 'Read More >> ';
  return (
    <>
      <Row className='justify-content-md-center w-100'>
        <Col xs={12} md={8}>
          {users &&
            users.map((cur, id) => {
              const str = cur?.news_article;

              return (
                <React.Fragment key={id}>
                  <Card style={{ marginLeft: '22px', marginTop: '65px' }}>
                    <Container fluid>
                      <Row>
                        <Col md={3}>
                          {cur?.news_image && (
                            <Card.Img
                              className='mt-4'
                              width='100%'
                              height='150'
                              style={{
                                objectFit: 'cover',
                              }}
                              src={cur?.news_image}
                            />
                          )}
                        </Col>
                        <Col md={9}>
                          <Card.Body>
                            <Card.Title>{cur?.news_headline}</Card.Title>
                            <Card.Text>
                              <p>
                                {str && str.length > 100
                                  ? str.substr(0, 101)
                                  : str.substr(0)}
                                ...
                              </p>
                              {str && !!str.length && (
                                <>
                                  <a
                                    style={{
                                      color: 'blueviolet',
                                      cursor: 'pointer',
                                    }}
                                    className='read-more-link'
                                    onClick={() => {
                                      setReadMore(!readMore);
                                    }}
                                    href={cur?.news_link}
                                    target='_blank'
                                    rel='noopener'
                                  >
                                    {/* <h6>{linkName}</h6> */}
                                    <h6>Read More &gt;&gt;</h6>
                                  </a>
                                  {/* {readMore && str.substr(101)} */}
                                </>
                              )}
                              {/* <h6>Tap full story for more info</h6> */}
                              <p> Source : {cur?.news_type}</p>
                              <p> Sentiment : {cur?.sentiment}</p>
                              <div>
                                {Object.entries(cur?.entity[0]).map(
                                  ([key, value]) => {
                                    return (
                                      <>
                                        <p>
                                          {key}:{value}
                                        </p>
                                      </>
                                    );
                                  }
                                )}
                              </div>
                            </Card.Text>
                            {/* <Card.Link className="btn btn-info" href={cur?.url}>Full Story</Card.Link> */}
                          </Card.Body>
                        </Col>
                      </Row>
                    </Container>
                  </Card>
                </React.Fragment>
              );
            })}
        </Col>
      </Row>
    </>
  );
};
export default Catcard;
