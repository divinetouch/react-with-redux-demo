import React from 'react';
import {Navbar, Grid, Nav, NavItem} from 'react-bootstrap';


class Template extends React.Component {
    constructor(props) {
        super(props);
    }

    transitionTo(path) {
        console.log('transition to: ' + path);
        this.context.history.pushState(null, path);
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
                        {this.props.children}
                    </div>
                </Grid>
            );
    }

}

Template.contextTypes = {
    history: React.PropTypes.object.isRequired
};

export default Template;
