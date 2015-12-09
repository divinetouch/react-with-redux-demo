import React from 'react';
import { connect } from 'react-redux';
import { Panel, Table, Col } from 'react-bootstrap';
import CheckoutItem from '../components/checkout/checkout-item';
import CartAPI from '../cart-api/cartAPI';
import { Link } from 'react-router';

let mapStateToProps = (state) => ({ 
    cartItems: state.merchandize.cartItems
});

class Checkout extends React.Component { 
    constructor(props) { 
        super(props);
    }

    render() { 
        let items = this.props.cartItems.map(item => { 
            return <CheckoutItem item={ item } key={ item.id } />;
        });
        return (
                    <Col sm={ 12 }>
                        <Panel header="Cart Items">
                            <Table responsive striped bordered condensed>
                                <thead>
                                    <tr>
                                        <th> Item Name </th>
                                        <th> Quantity </th>
                                        <th> Cost </th> 
                                    </tr>
                                </thead>
                                <tbody>
                                    { items } 
                                </tbody>
                            </Table>
                            <div>
                                <h4 style={{textAlign: 'right'}}>Total: ${CartAPI.getTotal(this.props.cartItems)}</h4>
                            </div>
                        </Panel> 
                        <div>
                            <Link to="/" className="btn btn-success">Continue Shopping</Link>
                        </div>
                    </Col>
                );
    }
}

export default connect(mapStateToProps)(Checkout);
