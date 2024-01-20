import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import { FaFacebook, FaGithub, FaGoogle, FaInstagram, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import qZone1 from '../assets/qZone1.png'
import qZone2 from '../assets/qZone2.png'
import qZone3 from '../assets/qZone3.png'
import bg from '../assets/bg.png'


const RightNav = () => {
    return (
        <div>
            <h6 className='fw-bold'>Login With</h6>
            <Button variant="outline-primary" className='my-1 w-100 py-0' style={{ height: '30px', fontSize: '13px' }}><FaGoogle /> Login With Google</Button>
            <Button variant="outline-dark" className='my-1 w-100 py-0' style={{ height: '30px', fontSize: '13px' }}><FaGithub /> Login With Github</Button>

            <h6 className='fw-bold mt-5'>Find Us On</h6>
            <ListGroup>
                <ListGroup.Item><Link className='text-decoration-none'>
                    <FaFacebook />
                    <span className='text-secondary'> Facebook</span></Link>
                </ListGroup.Item>
                <ListGroup.Item><Link className='text-decoration-none'>
                    <FaTwitter />
                    <span className='text-secondary'> Twitter</span></Link>
                </ListGroup.Item>
                <ListGroup.Item>
                    <FaInstagram className='text-danger' />
                    <Link className='text-decoration-none text-secondary'> Instagram</Link>
                </ListGroup.Item>
                <div className='mt-5 p-2' style={{ background: '#f0f0f0' }}>
                    <h6 className='fw-bold'>Q-Zone</h6>
                    <Link>
                        <img className='img-fluid my-2' src={qZone1} alt="" />
                    </Link>
                    <Link>
                        <img className='img-fluid my-2' src={qZone2} alt="" />
                    </Link>
                    <Link>
                        <img className='img-fluid my-2' src={qZone3} alt="" />
                    </Link>
                </div>
            </ListGroup>
            <div className='text-white d-flex justify-content-center align-items-center flex-column text-center p-4' style={{ backgroundImage: `url(${bg})`, backgroundSize: 'cover', height: '50vh' }}>
                <h4 className='fw-bold'>Create an amazing newspaper</h4>
                <p className='my-3' style={{fontSize: '13px'}}>
                    Discover thousands of options, easy to customize layouts, one-click to import demo and much more.
                </p>
                <Button variant="danger" className='rounded-0'>Learn More</Button>
            </div>
        </div>
    );
};

export default RightNav;    