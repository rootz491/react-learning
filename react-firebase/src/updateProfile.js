import React, { useRef, useState } from "react";
import { Form, Button, Card, Alert } from "react-bootstrap";
import { useAuth } from "./contexts/AuthContext";
import { Link, useHistory } from "react-router-dom";

export default function UpdateProfile() {
    const emailRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmRef = useRef();
    const displayNameRef = useRef();
    const photoUrlRef = useRef();
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const { updateProfile, updateEmail, updatePassword, currentUser } = useAuth();
    const history = useHistory();


    const handleUpdate = async e => {
        e.preventDefault();
        
        setLoading(true);
        let promises = [];

        if (emailRef.current.value !== currentUser.email)
            promises.push(updateEmail(emailRef.current.value));
        
        if (passwordRef.current.value && passwordConfirmRef.current.value === passwordRef.current.value)
            promises.push(updatePassword(passwordRef.current.value));

        if ((displayNameRef.current.value && displayNameRef.current.value !== currentUser.displayName) || photoUrlRef.current.value)
            promises.push(updateProfile(displayNameRef.current.value, photoUrlRef.current.value));

        Promise.all(promises)
            .then(() => {
                history.push("/");
            })
            .catch(err => {
                setError(err.message);
            })
            .finally(() => {
                setLoading(false);
            })
    }

    return (
        <>
            <div className="w-100" style={{maxWidth: "400px"}}>
                <Card>
                    <Card.Body>
                        <h1 className="text-center mb-4">Update Profile</h1>
                        {error && <Alert variant="danger">{error}</Alert>}
                        <Form onSubmit={handleUpdate}>
                            <Form.Group id="Email">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" ref={emailRef} defaultValue={currentUser.email} required />
                            </Form.Group>
                            <Form.Group id="displayName">
                                <Form.Label>Display Name</Form.Label>
                                <Form.Control type="text" ref={displayNameRef} defaultValue={currentUser.displayName} placeholder="user name" />
                            </Form.Group>
                            <Form.Group id="photoUrl">
                                <Form.Label>Photo URL</Form.Label>
                                <Form.Control type="url" ref={photoUrlRef} defaultValue={currentUser.photoURL} placeholder="image URL for profile" />
                            </Form.Group>
                            <Form.Group id="password">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="text" ref={passwordRef} placeholder="ignore if you don't want to change password" />
                            </Form.Group>
                            <Form.Group id="password-confirm">
                                <Form.Label>Password Confirmation</Form.Label>
                                <Form.Control type="text" ref={passwordConfirmRef} placeholder="ignore if you don't want to change password" />
                            </Form.Group>
                            <div className="d-flex align-items-center justify-content-around mt-4">
                                <Button disabled={loading} className="w-40" type="submit" >update</Button>
                            </div>
                        </Form>
                    </Card.Body>
                </Card>
                <p className="w-100 text-center mt-2">
                    <Link to="/">cancel</Link>
                </p>
            </div>
        </>
    )
}
