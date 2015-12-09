import React from 'react';
import { Link } from 'react-router';

class BreadCrumb extends React.Component { 
    constructor(props) { 
        super(props);
    }

    render() { 
        return (
                    <ol className="breadcrumb">
                        <li><Link to="/">Catalog</Link></li>
                        <li><Link to="/about">More Information</Link></li>
                        <li><Link to="/checkout">Payment</Link></li>
                    </ol>
                );
    }
}

export default BreadCrumb;
