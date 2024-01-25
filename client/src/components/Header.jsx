import React, { useContext } from 'react';
import logo from '../assets/logo.png';
import moment from 'moment';
import Button from 'react-bootstrap/Button';
import Marquee from 'react-fast-marquee';
import { Link } from 'react-router-dom';
import userIcon from '../assets/user.png'
import { AuthContext } from '../providers/AuthProvider';

const Header = () => {
    const { user } = useContext(AuthContext);
    return (
        <div>
            <div className='text-center'>
                <img className='mt-5 mb-3' src={logo} alt="" />
                <p className='text-secondary'>Journalism Without Fear or Favour</p>
                <p className='text-secondary fw-semibold'>{moment().format('dddd, MMMM D, YYYY')}</p>
            </div>
            <div className='bg-secondary-subtle p-3 w-75 mx-auto d-flex'>
                <Button variant="danger" className='rounded-0 px-4'>Latest</Button>
                <Marquee className='ms-3' pauseOnHover speed={'50'}>
                    Match Highlights: Germany vs Spain — as it happened!   Match Highlights: Germany vs Spain.
                </Marquee>
            </div>
            <nav className='mt-5 d-flex align-items-center row w-75 mx-auto'>
                <div className='col'></div>
                <div className='mx-auto col text-center'>
                    <Link to={'/'} className='text-decoration-none me-3 text-secondary'>Home</Link>
                    <Link to={'/'} className='text-decoration-none me-3 text-secondary'>About</Link>
                    <Link to={'/'} className='text-decoration-none me-3 text-secondary'>Career</Link>
                </div>
                <div className='text-end col pe-0'>
                    {user ?
                        <>
                            <img src={userIcon} style={{ width: '37px' }} alt="" />
                            <Button className="btn btn-secondary ms-2 me-0 rounded-0 px-5">Logout</Button>
                        </> :
                        <Link to={'/login'}>
                            <Button className="btn btn-secondary ms-2 me-0 rounded-0 px-5">Login</Button>
                        </Link>
                    }
                </div>
            </nav>
        </div>
    );
};

export default Header;