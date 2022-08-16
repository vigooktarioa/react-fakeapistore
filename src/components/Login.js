import React, { useState } from "react";
import '../App.css'
import { Form, Button } from "react-bootstrap";
import axios from "axios";

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    // const {error, setError} = useState("");

    const loginHandler = ({token, setToken}) => {
        axios({
        url: "https://fakestoreapi.com/auth/login",
        method: "POST",
        data: {
            username: username,
            password: password,
        },
    })
    .then((res) => {
        console.log(res.data.token);
        setToken(res.data.token);
    })
    .catch((err) => {
        console.log(err);;
    });
    };

  return (
    <div className="login">
        <div className="login-form">
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                            value={username} 
                            onChange={(e)=>setUsername(e.target.value)} 
                            type="text"
                            placeholder="Username"
                    />
                    <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                            value={password} 
                            onChange={(e)=>setPassword(e.target.value)}
                            type="password"
                            placeholder="Password"
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit" onClick={loginHandler}>
                    Submit
                </Button>
                </Form>
    </div>
    </div>
  );
};

export default Login;