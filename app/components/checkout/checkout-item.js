import React from 'react';
import { connect } from 'react-redux';
import { addToCart } from '../../actions/actions';

class CheckoutItem extends React.Component { 

    constructor(props) { 
        super(props);
        this.state = { 
            selectedValue: 0
        };
        this.change = this.change.bind(this);
    }

    componentWillMount() { 
        this.setState({ 
            selectedValue: this.props.item.quantity
        });
    }

    change(e) { 
        console.log(e.target.value);
        this.props.dispatch(addToCart(this.props.item, e.target.value));
        this.setState({ 
            selectedValue: e.target.value
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

        return (
                    <tr key={ this.props.item.id }>
                        <td>{ this.props.item.name }</td>
                        <td>
                            <select onChange={ this.change } value={ this.state.selectedValue }>{ options() }</select>
                        </td>
                        <td>{ this.props.item.cost }</td>
                    </tr>
                );
    }
}

export default connect()(CheckoutItem);
