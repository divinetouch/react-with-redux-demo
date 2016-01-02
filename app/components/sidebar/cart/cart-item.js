import React from 'react';
import { connect } from 'react-redux';
import { removeFromCart } from '../../../actions/cartAction';

export default class CartItem extends React.Component { 
    constructor(props) { 
        super(props);
        this.remove = this.remove.bind(this);
    }
    remove() { 
        this.props.dispatch(removeFromCart(this.props.item)); 
    }
    render() {
        return (
                    <li className="list-group-item" key={ this.props.item.id }>
                        <span className="btn btn-danger btn-xs" onClick={ this.remove }>x</span>
                        &nbsp;{ this.props.item.name } - qty: { this.props.item.quantity }
                    </li>
                );
    }
}

export default connect()(CartItem);
