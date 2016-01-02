import React from 'react';
import CartItem from './cart-item';
import { connect } from 'react-redux';

let mapStateToProps = (state) => ({ 
    cartItems: state.merchandize.cartItems 
});

class CartItems extends React.Component { 
    render() { 
        let items = this.props.cartItems.map(item => { 
            return <CartItem key = { item.id } item={ item } />;
        });
        return (
                    <ul className="list-group">
                        { items }
                    </ul>
                );
    }
}

export default connect(mapStateToProps)(CartItems);
