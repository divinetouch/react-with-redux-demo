/**
 * I'm not using redux-router at the moment but planing to use it later
 * One of the benefit of using redux-router instead is it allows us to have all the routing history, params, etc as part
 * of the state tree.
 */
import React from 'react';
import Home from '../views/home';
import About from '../views/about';
import Contact from '../views/Contact';
import Item from '../views/item';
import Checkout from '../views/checkout';
import Template from './template';
import {Router, Route, IndexRoute} from 'react-router';

class App extends React.Component {
    render() {
        return (
                    <Router history={ this.props.reouteHistory }>  
                        <Route path="/" component={Template}>
                            <IndexRoute component={Home} />
                            <Route path="about" component={About} />
                            <Route path="contact" component={Contact} />
                            <Route path="item/:id" component={Item} />
                            <Route path="checkout" component={Checkout} />
                        </Route>
                    </Router>
                );
    }
}

export default App;
