import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button, Card, Form, ListGroup } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';

const HomePage = () => {
    const [user] = useAuthState(auth);
    const [taskName, setTaskName] = useState('');
    const [taskDesc, setTaskDesc] = useState('');
    const [userTasks, setUserTasks] = useState([]);

    
    axios(`http://localhost:5000/allTasks`)
        .then(response => setUserTasks(response.data));

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post('http://localhost:5000/allTasks', {
            email: user.email,
            name: taskName,
            description: taskDesc,
        })
    }
    const DeleteHandler = (id) => {
        axios.delete(`http://localhost:5000/allTasks/${id}`);
    }
    return (
        <div className='container'>
            <div className="row">
                <div className="col-md-6  py-5">
                    <h1 className='text-center'>Add New Tasks Tasks</h1>
                    <Form onSubmit={handleSubmit} className='my-5 py-5 border px-5'>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control onChange={(e) => setTaskName(e.target.value)} type="text" placeholder="Task Name" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Control onChange={(e) => setTaskDesc(e.target.value)} type="textArea" placeholder="Task Description" />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Add task
                        </Button>
                    </Form>
                </div>
                <div className="col-md-6 py-5">
                    <h1 className='text-center'>Your Tasks</h1>
                    <div className='py-5 '>
                        {
                            userTasks.map(task => (
                                <Card key={task._id} className="text-center">
                                    <Card.Body>
                                        <div className="row ">
                                            <div className="col-md-8 align-middle text-start">
                                                <Card.Title>{task.name}</Card.Title>
                                                <Card.Text>
                                                    {task.description}
                                                </Card.Text>
                                            </div>
                                            <div className="col-md-4 text-end align-middle">
                                                <Button className='ms-2' variant="success">Done</Button>
                                                <Button className='ms-2' variant="danger" onClick={()=>DeleteHandler(task._id)}>Delete</Button>
                                            </div>
                                        </div>
                                    </Card.Body>
                                </Card>
                            ))
                        }

                    </div>
                </div>

            </div>
        </div>
    );
};

export default HomePage;