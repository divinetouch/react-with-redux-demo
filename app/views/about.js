import React from 'react';
import ContactInfo from '../components/sections/contactInfo';
import ShoppingCart from '../components/cart/shoppingCart.js';
import { Row, Col } from 'react-bootstrap';

//This is what we call a stateless compoenent
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
                            <p>
                                To learn more about react-hot-loader please visit: <a href="//github.com/gaearon/react-hot-loader" target="_blank">React Hot Loader</a>
                            </p>
                        </Col>
                        <h5>Here are some more useful resources that might help you in understanding the concept behind Redux 
                            and functional programing in general
                        </h5>
                        <Col sm={ 12 }>
                            <p>
                                A free course by Dan Abramov, the developer who creates Redux: <a href="//egghead.io/series/getting-started-with-redux" target="_blank">egghead.io course</a>
                            </p>
                            <p>
                                A great and free book about functional programing: <a href="//www.gitbook.com/book/drboolean/mostly-adequate-guide/details" target="_blank">Mostly Adequatee Guide to Functional Programming</a>
                            </p>
                        </Col>
                        <Col sm={ 12 } style={{textAlign: 'center', paddingTop: 15}}>
                            <h5>Watch Dan Abramov, the creator of Redux</h5>
                            <div className="embed-responsive embed-responsive-16by9">
                                <iframe className="embed-resposive-item" src="https://www.youtube.com/embed/xsSnOQynTHs" frameborder="0" allowfullscreen></iframe>
                            </div>
                        </Col>
                        <Col sm={ 12 } style={{textAlign: 'center', paddingTop: 15}}>
                            <h5>Watch Pete Hunt, the lead developer of React where he talked about Virtual DOM</h5>
                            <div className="embed-responsive embed-responsive-16by9">
                                <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/-DX3vJiqxm4" frameborder="0" allowfullscreen></iframe>
                            </div>
                        </Col>
                        <Col sm={ 12 } style={{textAlign: 'center', paddingTop: 15}}>
                            <h5>Thinking About Angular 2? Here is a great demo by Rob McDiarmid</h5>
                            <div className="embed-responsive embed-responsive-16by9">
                                <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/s0xootlbudI" frameborder="0" allowfullscreen></iframe>
                            </div>
                        </Col>
                    </Col>
                    <Col sm={ 3 }>
                        <ShoppingCart />
                        <ContactInfo />
                    </Col>
                </Row>
            );
};
