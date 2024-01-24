import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Header from '../components/Header';
import { Outlet } from 'react-router-dom';
import RightNav from '../components/RightNav';
import EditorsInsight from '../components/EditorsInsight';

const NewsLayout = () => {
    return (
        <div>
            <Header></Header>
            <Container className='w-75 mt-5 mb-5'>
                <Row>
                    <Col lg={9}>
                        <Outlet></Outlet>
                        <EditorsInsight></EditorsInsight>
                    </Col>
                    <Col lg={3}>
                        <RightNav></RightNav>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default NewsLayout;