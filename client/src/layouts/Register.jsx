import React, { useContext, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';

const Register = () => {
    const { createUser } = useContext(AuthContext);
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState('');

    const handleOnSubmit = (event) => {
        event.preventDefault();
        setError('');

        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        const retypePassword = event.target.retypePassword.value;

        if (password !== retypePassword) {
            setError('password did not match');
            return;
        }
        else if (password < 6) {
            setError('password must be atleast six character');
            return;
        }

        createUser(email, password)
            .then((userCredential) => {
                const loggedUser = userCredential.user;
                console.log(loggedUser);
            })
            .catch((error) => {
                setError(error.message);
            });
    }

    return (
        <div style={{ height: '100vh' }} className='d-flex justify-content-center align-items-center bg-secondary bg-opacity-25'>
            <div style={{ width: '30%' }} className='bg-white py-5 px-3 border border-1 rounded rounded-3'>
                <h3 className='text-center fw-bolder'>Register</h3>
                <Form className='mx-auto' onSubmit={handleOnSubmit}>
                    {/* Name */}
                    <Form.Group className="mb-3">
                        <Form.Label style={{ fontSize: '13px' }}>Name</Form.Label>
                        <Form.Control type="text" name='name' placeholder="Enter name" required />
                    </Form.Group>

                    {/* Email */}
                    <Form.Group className="mb-3">
                        <Form.Label style={{ fontSize: '13px' }}>Email</Form.Label>
                        <Form.Control type="email" name='email' placeholder="Enter email" required />
                    </Form.Group>

                    {/* Password */}
                    <Form.Group className="mb-1">
                        <Form.Label style={{ fontSize: '13px' }}>Password</Form.Label>
                        <Form.Control name='password' type={showPassword ? 'text' : 'password'} placeholder="Password" required />
                    </Form.Group>
                    <Form.Group className="mb-1">
                        <Form.Label style={{ fontSize: '13px' }}>Retype Password</Form.Label>
                        <Form.Control name='retypePassword' type={showPassword ? 'text' : 'password'} placeholder="Retype Password" required />
                    </Form.Group>

                    {/* Show password checkbox */}
                    <Form.Group className="mb-3">
                        <Form.Check onClick={() => setShowPassword(!showPassword)} type="checkbox" style={{ fontSize: '13px' }} label="show password" />
                    </Form.Group>

                    {/* Button */}
                    <div className='text-center'>
                        <Button variant="primary" type="submit" className='px-5'>Register</Button>
                    </div>
                </Form>
                <p className='text-center mt-3' style={{ fontSize: '11px' }}>Already Have An Account ?
                    <Link to={'/login'} className='text-decoration-none text-danger'>Login</Link>
                </p>
            </div>
        </div>
    );
};

export default Register;