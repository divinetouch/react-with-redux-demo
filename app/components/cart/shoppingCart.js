import React from 'react';
import { connect } from 'react-redux';
import CartItems from './cart-items';
import CartAPI from '../../cart-api/cartAPI';

let mapStateToProps = (state) => ({ 
    cartItems: state.merchandize.cartItems
});

class ShoppingCart extends React.Component { 
    render() {
        return (
                    <section className="col-sm-12">
                        <div className="panel panel-default">
                            <div className="panel-heading">
                                Shopping Cart <span className="glyphicon glyphicon-tags"></span>
                            </div>
                            <div className="panel-body">
                                <CartItems />
                                <h4 style={{textAlign: 'right'}}>Total: ${CartAPI.getTotal(this.props.cartItems)}</h4>
                            </div>
                        </div>
                    </section>
                );
    }
}

export default connect(mapStateToProps)(ShoppingCart);
