import React from 'react';
import { Row, Col } from 'antd';
import Head from './components/header';
import Side from './components/navLeft';

export default class Home extends React.Component {
    render() {
        return (
            <Row>
                <Row>
                    <Col span={24}>
                        <Head/>
                    </Col>
                </Row>
                <Col span={3}>
                    <Side/>
                </Col>
                <Col span={21}>
                    <Row>
                        <div style={{float: 'left'}}>left</div>
                        <div style={{float: 'right'}}>right</div>
                    </Row>
                    <Row>
                        主体部分
                    </Row>
                </Col>
            </Row>
        )
    }
}