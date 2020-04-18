
import React from "react";
import '../App.css';
import { Row, Col, Card } from 'antd';
import { CarouselComponent } from "../components/Carousel";

type Props = {};
type HomeType = React.FC<Props>;

export const HomePage: HomeType = (props) => {
    return (
    <>
        <Row gutter={[16, 16]}>
            <Col xs={{ span: 24,}} lg={{ span: 12,}}>
                <CarouselComponent outline />
            </Col>
            <Col xs={{ span: 24,}} lg={{ span: 12,}}>
                <Card title="ANOUNCEMENTS & SHOWS">
                    <CarouselComponent />
                </Card>
            </Col>
        </Row>
        <Row gutter={[16, 16]}>
            <Col xs={{ span: 24,}} lg={{ span: 18,}}>
                <Card title="ANOUNCEMENTS & SHOWS">
                    
                </Card>
            </Col>
            <Col xs={{ span: 24,}} lg={{ span: 6,}}>
                <Card title="RESOURCES">
                    <div className="resource-card">
                        <span className="text-bold">The Academy</span><br/>
                        <span className="note">Take Training Courses</span>
                    </div>
                    <div className="resource-card accent">
                        <span className="text-bold">The Playbook</span><br/>
                        <span className="note">Our Corporate Guides</span>
                    </div>
                    <div className="resource-card secondary">
                        <span className="text-bold">Quickbook Tutorials</span><br/>
                        <span className="note">Show off those ninja skills</span>
                    </div>
                </Card>
            </Col>
        </Row>
    </>
    );
};