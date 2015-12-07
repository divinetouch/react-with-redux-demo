import React from 'react';
import ContactInfo from '../components/sections/contactInfo';
import { Row, Col } from 'react-bootstrap';

export default () => {
    return (
                <Row>
                    <Col sm={ 9 }>
                        <h5>
                            Thank you for checking this demo, this is just a simple demo site that I created to learn React.
                            Hopefully, you find it useful. 
                        </h5>
                        <Col sm={ 12 }>
                            <p>
                                To learn more about React framework please visit: <a href="//facebook.github.io/react/" target="_blank">React</a>
                            </p>
                            <p>
                                To learn more about redux please visit: <a href="//redux.js.org/" target="_blank">Redux</a>
                            </p>
                            <p>
                                To learn more about react-redux please visit: <a href="//github.com/rackt/react-redux" target="_blank">React Redux</a>
                            </p>
                            <p>
                                To learn more about react-router please visit: <a href="//github.com/rackt/react-router" target="_blank">React Router</a>
                            </p>
                        </Col>
                        <h5>Here are some more useful resources that might help you in understanding the concept behind Redux 
                            and functional programing in general
                        </h5>
                        <Col sm={ 12 }>
                            <p>
                                A free course by Dan Abramov, the guy who create Redux: <a href="//egghead.io/series/getting-started-with-redux" target="_blank">egghead.io course</a>
                            </p>
                            <p>
                                A great and free book about functional programing: <a href="//www.gitbook.com/book/drboolean/mostly-adequate-guide/details" target="_blank">Mostly Adequatee Guide to Functional Programming</a>
                            </p>
                        </Col>
                    </Col>
                    <Col sm={ 3 }>
                        <ContactInfo />
                    </Col>
                </Row>
            );
};
