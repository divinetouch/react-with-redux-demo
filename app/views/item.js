import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

let mapStateToProps = (state) => ({ 
    allItems: state.merchandize.allItems
});

class Item extends React.Component { 
    render() { 
        let item = this.props.allItems.find(item => item.id === this.props.params.id);
        return (
                    <div className="row">
                        <div className="col-sm-4">
                            <img src="http://placehold.it/250x250" />
                        </div>
                        <div className="col-sm-12" style={{paddingTop:5}}>
                            <ul className="list-group">
                                <li className="list-group-item">ID: { item.id }</li>
                                <li className="list-group-item">Name: { item.name }</li>
                                <li className="list-group-item">Description: { item.description }</li>
                                <li className="list-group-item">Price: { item.cost }</li>
                            </ul>
                        </div>
                        <div className="col-sm-12">
                            <Link to="/" className="btn btn-success">Go back</Link>
                        </div>
                    </div>
                );
    }    
}

export default connect(mapStateToProps)(Item);
