import React from 'react';
import { Panel, Col } from 'react-bootstrap';

/**
 * This is called a headless/stateless component.
 * It's the recomended implementation from Facebook because it's small, compact
 * and it's only job is to display what ever the props we give to it
 */
export default() => { 
    return (
                <Col sm={ 12 }>
                    <Panel header="Contact Information">
                        <span className="glyphicon glyphicon-phone"> 888-888-8888</span>
                        <span className="glyphicon glyphicon-phone-alt"> 888-888-8888</span>
                    </Panel>
                </Col>
            );
};
