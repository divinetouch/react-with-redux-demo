import React from 'react';
import { connect } from 'react-redux';
import CartItems from './cart-items';
import CartAPI from '../../cart-api/cartAPI';
import { Col } from 'react-bootstrap';
import { Link } from 'react-router';

let mapStateToProps = (state) => ({ 
    cartItems: state.merchandize.cartItems
});

class ShoppingCart extends React.Component { 
    render() {
        return (
                    <Col sm={ 12 }>
                        <div className="panel panel-default">
                            <div className="panel-heading">
                                Shopping Cart <span className="glyphicon glyphicon-tags"></span>
                            </div>
                            <div className="panel-body">
                                <CartItems />
                                <h4 style={{textAlign: 'right'}}>Total: ${CartAPI.getTotal(this.props.cartItems)}</h4>
                                <Link to="/checkout" className="col-sm-12 btn btn-success">Check Out</Link>
                            </div>
                        </div>
                    </Col>
                );
    }
}

export default connect(mapStateToProps)(ShoppingCart);
