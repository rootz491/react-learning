import React, { useRef, useState } from "react";
import { Form, Button, Card, Alert } from "react-bootstrap";
import { useAuth } from "./contexts/AuthContext";
import { Link, useHistory } from "react-router-dom";

export const Signup = () => {
    const emailRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmRef = useRef();
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
    const [loading, setLoading] = useState(false);
    const { signup } = useAuth();
    const history = useHistory();

    async function handleSubmit(e) {
        e.preventDefault();
        
        if(passwordRef.current.value !== passwordConfirmRef.current.value) {
            setSuccess("");
            return setError("Password do not match");
        }

        try {
            setLoading(true);
            await signup(
                emailRef.current.value,
                passwordRef.current.value
            );
            setError("");
            setSuccess("account created successfully!");
            setLoading(false);
            history.push("/");
        }
        catch (err) {
            setLoading(false);
            setSuccess("");
            return setError(err.message);
        }
    }

    return (
        <>
            <div className="w-100" style={{maxWidth: "400px"}}>
                <Card>
                    <Card.Body>
                        <h1 className="text-center mb-4">Sign Up</h1>
                        {error && <Alert variant="danger">{error}</Alert>}
                        {success && <Alert variant="success">{success}</Alert>}
                        <Form onSubmit={handleSubmit}>
                            <Form.Group id="Email">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" ref={emailRef} required />
                            </Form.Group>
                            <Form.Group id="password">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" ref={passwordRef} required />
                            </Form.Group>
                            <Form.Group id="password-confirm">
                                <Form.Label>Password Confirmation</Form.Label>
                                <Form.Control type="password" ref={passwordConfirmRef} required />
                            </Form.Group>
                            <div className="d-flex justify-content-center">
                                <Button disabled={loading} className="w-20 m-auto mt-2" type="submit" >sign up</Button>
                            </div>
                        </Form>
                    </Card.Body>
                </Card>
                <p className="w-100 text-center mt-2">
                    Already have an account? 
                    <Link to="/login">Log in</Link>
                </p>
            </div>
        </>
    )
}