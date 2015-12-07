import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ShoppingCart from '../components/cart/shoppingCart';
import ContactInfo from '../components/sections/contactInfo';
import Catalog from '../components/catalog/cartalog';
import { Jumbotron, Row, Col } from 'react-bootstrap';

/**
 * we want to get the whole state tree just for testing purposes. 
 * This is not recomended as it can be big.
 * So try to get only the part where the component needs. Please see CartItems as an example.
 */
// paranthesize the body to return an object literal expression
let mapStateToProps = (state) => ({ 
    reduxState: state.merchandize
});

/**
 * Instead of using the new ES6 syntax above, this is also correct
 */
// function mapStateToProps(state){ 
//     return {reduxState: state};
// };

class Home extends React.Component {
    constructor(props) { 
        super(props);
    }
    render() {
        console.log('redux state: ' + JSON.stringify(this.props.reduxState));
        return (
                    <Row>
                        <Col sm={ 12 }>
                            <Jumbotron style={{textAlign: 'center'}}>
                                <h2>Welcome to React with React-Redux Demo</h2>
                            </Jumbotron>
                        </Col>
                        <Col sm={ 9 }>
                            <Catalog />
                        </Col>
                        <Col sm={ 3 }>
                            <ShoppingCart />
                            <ContactInfo />
                        </Col>
                    </Row>
                );
    }
}

Home.PropTypes = { 
    reduxState: React.PropTypes.object.isRequired
};

export default connect(mapStateToProps)(Home);
