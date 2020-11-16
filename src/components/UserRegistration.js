import React, { useState, useEffect } from 'react';
import { Button, Form, Container } from 'react-bootstrap';


function UserRegistration() {
    //set states
    const [hasError, setErrors] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    //event handler
    const handleSubmit = (evt) => {
        evt.preventDefault();
        alert(`Submitting Name ${email} and pass ${password}`)
        async function fetchData() {
            fetch('/users/add', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email: email,
                    password: password
                })
                });
          }
      
          fetchData();
    }
  return (
    <div>
        <Container>
      <Form onSubmit={handleSubmit}>
  <Form.Group controlId="userEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" id="email" onChange={e => setEmail(e.target.value)} placeholder="Enter email" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group controlId="password">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" onChange={e => setPassword(e.target.value)} placeholder="Password" />
  </Form.Group>
  <Form.Group controlId="passwordConfirm">
    <Form.Label>Re-Enter Password</Form.Label>
    <Form.Control type="password" placeholder="Re-type Password" />
  </Form.Group>
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
</Container>
    </div>
  );
}


export default UserRegistration;