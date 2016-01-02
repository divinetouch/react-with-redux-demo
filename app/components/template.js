import React from 'react';
import {Navbar, Grid, Nav, Jumbotron, NavItem} from 'react-bootstrap';
import BreadCrumb from './breadcrumb/breadcrumb';
import { changeRoute } from '../actions/routeAction';
import { connect } from 'react-redux';

let mapStateToProps = (state) => ({ 
    path: state.routing.path
})

class Template extends React.Component {
    constructor(props) {
        super(props);
    }

    transitionTo(path) {
        console.log('transition to: ' + path);
        this.props.dispatch(changeRoute(path));
    }

    render() {
        return (
                <Grid>
                    <Navbar inverse>
                        <Navbar.Header>
                            <Navbar.Brand>
                                <a href="#" onClick={this.transitionTo.bind(this, '/')}>Brand</a>
                            </Navbar.Brand>
                            <Navbar.Toggle/>
                        </Navbar.Header>
                        <Navbar.Collapse>
                            <Nav pullRight style={{paddingRight:15}}>
                                <NavItem onClick={this.transitionTo.bind(this, '/')}>Home</NavItem>
                                <NavItem onClick={this.transitionTo.bind(this, 'about')}>About</NavItem>
                                <NavItem onClick={this.transitionTo.bind(this, 'contact')}>Contact</NavItem>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                    <div>
                        <Jumbotron style={{textAlign: 'center'}}>
                            <h2>Welcome to React with React-Redux Demo</h2>
                        </Jumbotron>
                        <BreadCrumb />
                        {this.props.children}
                    </div>
                </Grid>
            );
    }

}

export default connect(mapStateToProps)(Template);
