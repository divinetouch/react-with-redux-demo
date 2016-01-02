import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { incrementCounter, decrementCounter } from '../actions/countActions';
import { Row, Col, Panel } from 'react-bootstrap';

let mapStateToProps = (state) => ({ 
    counter: state.counter
});

let mapDispatchToProps = (dispatch) => ({ 
    actionInc: bindActionCreators(incrementCounter, dispatch),
    actionDec: bindActionCreators(decrementCounter, dispatch)
});

class Contact extends React.Component {
    constructor(props) { 
        super(props);
    }

    render() {
        console.log(this.props.counter.count);
        return (
                    <div style={{textAlign: 'center'}}>
                        <h2>Instead of cotacting me, why don't we test counting instead</h2>
                        <Row>
                            <Col sm={ 4 } smOffset={ 4 } style={{textAlign:'center'}}>
                                <button className="btn btn-success" onClick={ this.props.actionInc }>Increment</button>
                                &nbsp;
                                <button className="btn btn-success" onClick={ this.props.actionDec }>Decrement</button>
                            </Col>
                        </Row>
                        <Row style={{paddingTop:10}}>
                            <Col sm={ 4 } smOffset={ 4 }>
                                <Panel header="Counter Value">
                                    <div style={{textAlign:'center'}}>
                                        <h1>{ this.props.counter.count }</h1>
                                    </div>
                                </Panel>
                            </Col>
                        </Row>
                    </div>
                    
                );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Contact);
