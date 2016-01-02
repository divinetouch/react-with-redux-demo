import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { addToCart, removeFromCart } from '../../actions/cartAction';
import { Link } from 'react-router';

let mapStateToProps = (state) => ({ 
    shouldResetItem: state.merchandize.shouldResetItem,
    cartItems: state.merchandize.cartItems
});

class CatalogItem extends React.Component { 

    constructor(props) { 
        super(props);
        this.state = { 
            selectedValue: 0
        };

        this.change = this.change.bind(this);
    }

    change(e) { 
        this.props.dispatch(addToCart(this.props.item, e.target.value));
        this.setState({ selectedValue: e.target.value });
        if(e.target.value === '0') { 
            this.props.dispatch(removeFromCart(this.props.item));
        }
    }

    /**
     * when we remove the item from cart we need to reset the quanity value
     */
    componentWillReceiveProps(nextProps) { 
        if(ReactDOM.findDOMNode(this.refs[nextProps.shouldResetItem.id]) && nextProps.shouldResetItem.id) { 
            this.setState({ selectedValue: 0 });
        }
    }

    /**
     * When we move to another page such as item detail page we need to properly show the quantity again when we return
     * to this page.
     * Moving away from this page will cause React to unmount the component.
     * Moving back to this page will caause React to mount the compoent again
     */
    componentDidMount() { 
        this.props.cartItems.forEach(item => { 
            if(ReactDOM.findDOMNode(this.refs[item.id])) { 
                this.setState({ selectedValue: item.quantity });
            }
        });
    }

    render() { 
        let options = () => { 
            let optionTags = [];
            for (let i = 0; i < 20; i++) { 
                optionTags.push(<option key={ i } value={ i }>{ i }</option>);
            }
            return optionTags;
        };
        return  (
                    <tr key={ this.props.item.id }>
                        <td>{ this.props.item.id }</td>
                        <td>{ this.props.item.name } <span><Link to={ `item/${this.props.item.id}` }>Detail</Link></span></td>
                        <td>{ this.props.item.cost }</td>
                        <td>
                            <select value={ this.state.selectedValue } ref={ this.props.item.id } onChange={ this.change }>
                                { options() }
                            </select>
                        </td>
                    </tr>
                );
    }
}

export default connect(mapStateToProps)(CatalogItem);
