import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import first from '../assets/1.png';
import second from '../assets/2.png';
import third from '../assets/3.png';
import { FaRegCalendarAlt } from 'react-icons/fa';

const EditorsInsight = () => {
    return (
        <div className='mt-5'>
            <h5 className='fw-bold'>Editors Insight</h5>
            <Row xs={1} md={2} lg={3} className="g-4">
                <Col>
                    <Card>
                        <Card.Img variant="top" src={first}/>
                        <Card.Body>
                            <Card.Title className='fw-bold fs-6'>21 The Most Stylish Wedding Guest Dresses For Spring</Card.Title>
                            <span className='text-secondary' style={{fontSize: '12px'}}><FaRegCalendarAlt/> Jan 4, 2022</span>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Card.Img variant="top" src={second}/>
                        <Card.Body>
                            <Card.Title className='fw-bold fs-6'>21 The Most Stylish Wedding Guest Dresses For Spring</Card.Title>
                            <span className='text-secondary' style={{fontSize: '12px'}}><FaRegCalendarAlt/> Jan 4, 2022</span>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <Card.Img variant="top" src={third}/>
                        <Card.Body>
                            <Card.Title className='fw-bold fs-6'>21 The Most Stylish Wedding Guest Dresses For Spring</Card.Title>
                            <span className='text-secondary' style={{fontSize: '12px'}}><FaRegCalendarAlt/> Jan 4, 2022</span>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </div>
    );
};

export default EditorsInsight;