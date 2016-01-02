import React from 'react';
import { Link } from 'react-router';
import { changeRoute } from '../../actions/routeAction';
import { connect } from 'react-redux';

class BreadCrumb extends React.Component { 
    constructor(props) { 
        super(props);
    }

    transitionTo(path) { 
        this.props.dispatch(changeRoute(path));
    }

    render() { 
        return (
                    <ol className="breadcrumb">
                        <li><a href="#" onClick={ this.transitionTo.bind(this, '/') }>Catalog</a></li>
                        <li><a href="#" onClick={ this.transitionTo.bind(this, 'about') }>More Information</a></li>
                        <li><a href="#" onClick={ this.transitionTo.bind(this, 'checkout') }>Payment</a></li>
                    </ol>
                );
    }
}

export default connect()(BreadCrumb);
