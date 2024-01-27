import React, { useContext, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';
import useTitle from '../hooks/useTitle';

const Login = () => {
    useTitle('Login');
    const { signIn } = useContext(AuthContext);
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const location = useLocation();
    const from = location?.state?.from || '/';

    const handleOnSubmit = (event) => {
        event.preventDefault();
        setError('');

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log(user);
                navigate(from);
            })
            .catch((error) => {
                setError(error.message);
            });
    }

    return (
        <div style={{ height: '100vh' }} className='d-flex justify-content-center align-items-center bg-secondary bg-opacity-25 flex-column'>
            <div className='bg-white w-25 py-5 px-3 border border-1 rounded rounded-3'>
                <h3 className='text-center fw-bolder'>Login</h3>
                <Form className='mx-auto' onSubmit={handleOnSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label style={{ fontSize: '13px' }}>Email address</Form.Label>
                        <Form.Control name='email' type="email" placeholder="Enter email" required />
                    </Form.Group>

                    <Form.Group className="mb-1" controlId="formBasicPassword">
                        <Form.Label style={{ fontSize: '13px' }}>Password</Form.Label>
                        <Form.Control name='password' type={showPassword ? 'text' : 'password'} placeholder="Password" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check onClick={() => setShowPassword(!showPassword)} type="checkbox" style={{ fontSize: '13px' }} label="show password" />
                    </Form.Group>
                    <div className='text-center'>
                        <Button variant="primary" type="submit" className='px-5'>Login</Button>
                    </div>
                </Form>
                <p className='text-center mt-3' style={{ fontSize: '11px' }}>Dont’t Have An Account ?
                    <Link to={'/register'} className='text-decoration-none text-danger'>Register</Link>
                </p>

                {error &&
                    <div className='text-center text-danger' style={{ fontSize: '11px' }}>{error}</div>
                }
            </div>
        </div>
    );
};

export default Login;