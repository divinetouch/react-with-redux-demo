import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

export default class LoadingModal extends React.Component {

    componentDidMount() { 
        $(ReactDOM.findDOMNode(this.refs['loadingModalView'])).modal('show');
    }

    componentWillUnmount() { 
        $(ReactDOM.findDOMNode(this.refs['loadingModalView'])).modal('hide');
    }

    render() { 
        return (
                    <div style={{marginTop: '20%'}} className="modal fade" tabIndex="-1" role="dialog" ref="loadingModalView">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h4 className="modal-title">{ this.props.title }</h4>
                                </div>
                                <div className="modal-body">
                                    <div className="row">
                                        <div className="progress">
                                            <div className="progress-bar progress-bar-success progress-bar-striped active" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style={{width: '100%'}}></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                );
    }
}
