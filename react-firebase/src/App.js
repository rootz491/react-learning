import React from "react";
import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import PrivateRoute from "./privateRoute";
import Dashboard from "./dashboard";
import UpdateProfile from "./updateProfile";
import { Signup } from "./signup"
import { Login } from "./login";
import { ForgotPassword } from "./forgotPassword";

function App() {

  return (
    <Container 
      className="d-flex align-items-center justify-content-center" 
      style={{ minHeight: "100vh" }}
    >
      <BrowserRouter>
        <AuthProvider>
          <Switch>
            <PrivateRoute exact path="/" component={Dashboard} />
            <PrivateRoute path="/update-profile" component={UpdateProfile} />
            <Route path="/signup" component={Signup} />
            <Route path="/login" component={Login} />
            <Route path="/forgot-password" component={ForgotPassword} />
          </Switch>
        </AuthProvider>
      </BrowserRouter>

    </Container>
  );
}

export default App;