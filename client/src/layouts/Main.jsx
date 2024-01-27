import React from 'react';
import Header from '../components/Header';
import LeftNav from "../components/LeftNav";
import RightNav from "../components/RightNav";
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import useTitle from '../hooks/useTitle';

const Main = () => {
    useTitle('Home');
    return (
        <div>
            <Header></Header>
            <Container className='w-75 mt-5 mb-5'>
                <Row>
                    <Col lg={3} className='ps-0'>
                        <LeftNav></LeftNav>
                    </Col>
                    <Col lg={6}>
                        <Outlet></Outlet>
                    </Col>
                    <Col lg={3}>
                        <RightNav></RightNav>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Main;