import React from "react";
import { Button, Form } from "react-bootstrap";

const Register = () => {
	return (
		<div>
			<h2 className="text-center text-primary m-3">Register Here!</h2>
			<Form className="w-50 mx-auto">
				<Form.Group className="mb-3" controlId="formBasicName">
					<Form.Label>Your Name</Form.Label>
					<Form.Control type="text" placeholder="Enter your name" />
				</Form.Group>

				<Form.Group className="mb-3" controlId="formBasicEmail">
					<Form.Label>Email address</Form.Label>
					<Form.Control type="email" placeholder="Enter email" />
					<Form.Text className="text-muted">
						We'll never share your email with anyone else.
					</Form.Text>
				</Form.Group>

				<Form.Group className="mb-3" controlId="formBasicPassword">
					<Form.Label>Password</Form.Label>
					<Form.Control type="password" placeholder="Password" />
				</Form.Group>

				<Button variant="primary" type="submit">
					Register
				</Button>
			</Form>
		</div>
	);
};

export default Register;
