import { getAuth } from "firebase/auth";
import React from "react";
import { Button, Form } from "react-bootstrap";
import app from "../../firebase.init";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useLocation, useNavigate } from "react-router-dom";

const auth = getAuth(app);

const Login = () => {
	const [signInWithGoogle] = useSignInWithGoogle(auth);
	const location = useLocation();
	const navigate = useNavigate();
	const from = location?.state?.from?.pathname || "/";

	const signInUsingGoogle = () => {
		signInWithGoogle().then(() => {
			navigate(from, { replace: true });
		});
	};
	return (
		<div>
			<h2 className="text-center text-primary m-3">Login Here!</h2>
			<div className="text-center my-3">
				<Button onClick={signInUsingGoogle} variant="success">
					Google
				</Button>
			</div>
			<Form className="w-50 mx-auto">
				<Form.Group className="mb-3" controlId="formBasicEmail">
					<Form.Label>Email address</Form.Label>
					<Form.Control type="email" placeholder="Enter email" />
				</Form.Group>

				<Form.Group className="mb-3" controlId="formBasicPassword">
					<Form.Label>Password</Form.Label>
					<Form.Control type="password" placeholder="Password" />
				</Form.Group>

				<Form.Group className="mb-3" controlId="formBasicCheckbox">
					<Form.Check type="checkbox" label="Remember Me" />
				</Form.Group>

				<Button variant="primary" type="submit">
					Login
				</Button>
			</Form>
		</div>
	);
};

export default Login;
