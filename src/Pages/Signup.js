import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';

const Signup = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    let errorDiv;
    const navigate = useNavigate();
    if (error) {
        errorDiv= (
            <div>
                <p>Error: {error.message}</p>
            </div>
        );
    }
    if (loading) {
        return (<div class="spinner-border" role="status">
            <span class="visually-hidden">Loading...</span>
        </div>);
    }
    return (
        <div className='container border p-5 mt-5'>
            <h1>Create New Account</h1>
            <div className="row">
                <div className="col-md-6 mx-auto my-5">
                    <Form className='text-start '>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Enter email" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" />
                        </Form.Group>
                        {errorDiv}
                        <Button onClick={() => { createUserWithEmailAndPassword(email, password); navigate('/')} } variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                    <p className='text-inline'>Already have an account?</p><Link to={'/login'}>Login</Link>
                </div>
            </div>
        </div>
    );
};

export default Signup;