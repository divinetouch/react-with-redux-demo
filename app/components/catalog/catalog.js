import React from 'react';
import { connect } from 'react-redux';
import { Table } from 'react-bootstrap';
import CatalogItem from './catalog-item';

let mapStateToProps = (state) => ({ 
    allItems: state.merchandize.allItems
});

class Catalog extends React.Component { 
    constructor(props) { 
        super(props);
    }
    
    render() { 
        let items = this.props.allItems.map(item => { 
            return <CatalogItem key={item.id} item={ item } />;
        });
        return(
                    <Table striped bordered condesed hover>
                        <thead>
                            <tr>
                                <th> id </th>
                                <th> product Name </th>
                                <th> Price </th>
                                <th> Quantity </th>
                            </tr>
                        </thead>
                        <tbody>
                            { items } 
                        </tbody>
                    </Table>
                );
    }
}

export default connect(mapStateToProps)(Catalog);
