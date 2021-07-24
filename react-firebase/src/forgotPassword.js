import React, { useRef, useState } from "react";
import { Form, Button, Card, Alert } from "react-bootstrap";
import { useAuth } from "./contexts/AuthContext";
import { Link } from "react-router-dom";

export const ForgotPassword = () => {
    const emailRef = useRef();
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
    const [loading, setLoading] = useState(false);
    const { passwordReset } = useAuth();


    async function handleReset(e) {
        e.preventDefault();
        try {
            setLoading(true);
            await passwordReset(emailRef.current.value);
            setError("");
            setSuccess("Password reset instructions has been sent to you inbox!");
            setLoading(false);
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
                        <h1 className="text-center mb-4">Log in</h1>
                        {error && <Alert variant="danger">{error}</Alert>}
                        {success && <Alert variant="success">{success}</Alert>}
                        <Form onSubmit={handleReset}>
                            <Form.Group id="Email">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" ref={emailRef} required />
                            </Form.Group>
                            <div className="d-flex align-items-center justify-content-around mt-4">
                                <Button disabled={loading} className="w-40" type="submit" >Password Reset</Button>
                                <Link to="/login">login</Link>
                            </div>
                        </Form>
                    </Card.Body>
                </Card>
                <p className="w-100 text-center mt-2">
                    New here? 
                    <Link to="/signup">Sign up</Link>
                </p>
            </div>
        </>
    )
}