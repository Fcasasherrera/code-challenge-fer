
import React, { useState } from "react";
import '../App.css';
import { Row, Col, Card, Button } from 'antd';
import { CardChat } from "../components/CardChat";
import { ListLinks } from "../components/ListLinks";
import { ListTasks } from "../components/ListTasks";
import { ListPendings } from "../components/ListPendings";

type Props = {};
type TasksType = React.FC<Props>;

export const TasksPage: TasksType = (props) => {
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
                        <ListPendings />
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
                              className="fade-in" 
                              description="description" 
                              loading={loading} 
                              image="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                    <CardChat title="Tina Garcia"
                              className="fade-in" 
                              description="description" 
                              loading={loading} 
                              image="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                </Row>
            </Card>
        </Col>
    </Row>
    );
};