import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Login = () => {
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
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
        return <div class="spinner-border" role="status">
        <span class="visually-hidden">Loading...</span>
    </div>;
      }
    return (
        <div className='container border p-5 mt-5'>
            <h1>Login to your account</h1>
            <div className="row">
                <div className="col-md-6 mx-auto my-5">
                    <Form className='text-start '>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email"  onChange={(e) => setEmail(e.target.value)} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
                        </Form.Group>
                        {errorDiv}
                        <Button variant="primary" type="submit" onClick={() => { signInWithEmailAndPassword(email, password); navigate('/')}}>
                            Submit
                        </Button>
                    </Form>
                    <p className='text-inline'>Dont have an account?</p><Link to={'/signup'}>Register Now</Link>
                </div>
            </div>
        </div>
    );
};

export default Login;