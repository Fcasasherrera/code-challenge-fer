
import React, { useState } from "react";
import '../App.css';
import { Row, Col, Card, Skeleton, Avatar } from 'antd';

const { Meta } = Card;

type Props = {};
type HomeType = React.FC<Props>;


export const HomePage: HomeType = (props) => {
    const [loading,] = useState(false);
    return (
    <Row  gutter={[16, 16]}>
        
        <Col xs={{ span: 24,}} lg={{ span: 12,}}>
            <Row  gutter={[16, 16]}>
                <Col xs={{ span: 24,}} lg={{ span: 12,}}>
                    <Card title="Card">
                        <p>Card content</p>
                        <p>Card content</p>
                    </Card>
                </Col>
                <Col xs={{ span: 24,}} lg={{ span: 12,}}>
                    <Card title="Card">
                        <p>Card content</p>
                        <p>Card content</p>
                    </Card>
                </Col>
            </Row>
            <Row  gutter={[16, 16]}>
                <Col xs={{ span: 24,}} lg={{ span: 24,}}>
                    <Card title="Card">
                        <p>Card content</p>
                        <p>Card content</p>
                    </Card>
                </Col>
            </Row>
        </Col>
        <Col xs={{ span: 24,}} lg={{ span: 12,}}>
            <Card title="NEW CHATS">
                <Row  gutter={[8, 8]}>
                    <Col span={24}>
                        <Card>
                            <Skeleton loading={loading} avatar active>
                                <Meta
                                avatar={
                                    <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                                }
                                title="Tina Garcia"
                                description="10 minutes ago"
                                />
                            </Skeleton>

                            <p className="content-card">Card content</p>
                        </Card>
                    </Col>
                    <Col span={24}>
                        <Card>
                            <Skeleton loading={loading} avatar active>
                                <Meta
                                avatar={
                                    <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                                }
                                title="Tina Garcia"
                                description="10 minutes ago"
                                />
                            </Skeleton>

                            <p className="content-card">Card content</p>
                        </Card>
                    </Col>
                    <Col span={24}>
                        <Card>
                            <Skeleton loading={loading} avatar active>
                                <Meta
                                avatar={
                                    <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                                }
                                title="Tina Garcia"
                                description="10 minutes ago"
                                />
                            </Skeleton>

                            <p className="content-card">Card content</p>
                        </Card>
                    </Col>
                    <Col span={24}>
                        <Card>
                            <Skeleton loading={loading} avatar active>
                                <Meta
                                avatar={
                                    <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                                }
                                title="Tina Garcia"
                                description="10 minutes ago"
                                />
                            </Skeleton>

                            <p className="content-card">Card content</p>
                        </Card>
                    </Col>
                </Row>
            </Card>
        </Col>
    </Row>
    );
};