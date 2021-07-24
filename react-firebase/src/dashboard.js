import React, { useState } from 'react';
import { Card, Button, Alert } from 'react-bootstrap'
import { useAuth } from './contexts/AuthContext';
import { Link, useHistory } from 'react-router-dom';

export default function Dashboard() {
    const [error, setError] = useState("");
    const history = useHistory();
    const { currentUser, logout } = useAuth();
    
    const handleLogout = async () => {
        try {
            await logout();
            history.push("/login");
        }
        
        catch (err) {
            setError(err.message);
        }
    }

    return (
        <div className="w-100" style={{maxWidth: "400px"}}>
            <Card>
                <Card.Img variant="top" src={currentUser.photoURL ? currentUser.photoURL : "https://via.placeholder.com/350x200?text=add+your+image+:)"} alt="profile image" />
                <Card.Body>
                    <Card.Title className="text-center">{currentUser.displayName ? currentUser.displayName : "undefined username"}</Card.Title>
                    {error && <Alert variant="danger">{error}</Alert>}
                    <p><strong>Email:</strong> {currentUser.email}</p>
                    <p><strong>verified:</strong> {currentUser.verifiedEmail ? "Yes" : "No"}</p>
                    <Link to="/update-profile" className="btn btn-primary w-100 mt-3">Update Profile</Link>
                </Card.Body>
            </Card>
            <div className="w-100 text-center mt-2">
                <Button onClick={handleLogout} variant="link">Log out</Button>
            </div>
        </div>
    )
}
