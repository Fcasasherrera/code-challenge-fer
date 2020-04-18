
import React, { useState } from "react";
import '../App.css';
import { Row, Col, Card, Button } from 'antd';
import { CardChat } from "../components/CardChat";
import { ListLinks } from "../components/ListLinks";
import { ListTasks } from "../components/ListTasks";

const { Meta, } = Card;

type Props = {};
type HomeType = React.FC<Props>;

export const HomePage: HomeType = (props) => {
    const [loading,] = useState(false);
    return (
    <Row  gutter={[16, 16]}>
        
        <Col xs={{ span: 24,}} lg={{ span: 12,}}>
            <Row  gutter={[16, 16]}>
                <Col xs={{ span: 24,}} lg={{ span: 12,}}>
                    <Card title="TODAY TASKS">
                        <ListTasks />
                    </Card>
                </Col>
                <Col xs={{ span: 24,}} lg={{ span: 12,}}>
                    <Card title="DAY AT A GLANCE">
                        <ListTasks />
                    </Card>
                </Col>
            </Row>
            <Row  gutter={[16, 16]}>
                <Col xs={{ span: 24,}} lg={{ span: 24,}}>
                    <Card title="MY LINKS" extra={<Button type="link" className="add-link">+ ADD</Button>}>
                        <ListLinks />
                    </Card>
                </Col>
            </Row>
        </Col>
        <Col xs={{ span: 24,}} lg={{ span: 12,}}>
            <Card title="NEW CHATS">
                <Row  gutter={[8, 8]}>
                    <CardChat title="Tina Garcia" 
                              description="description" 
                              loading={loading} 
                              image="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                    <CardChat title="Tina Garcia" 
                              description="description" 
                              loading={loading} 
                              image="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                </Row>
            </Card>
        </Col>
    </Row>
    );
};