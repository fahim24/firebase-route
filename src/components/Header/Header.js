import { getAuth, signOut } from "firebase/auth";
import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import app from "../../firebase.init";

const auth = getAuth(app);

const Header = () => {
	const [user] = useAuthState(auth);
	return (
		<Navbar variant="light">
			<Container>
				<Nav className="mx-auto">
					<Link className="nav-link fw-bold" to="/">
						Home
					</Link>
					<Link className="nav-link fw-bold" to="/products">
						Products
					</Link>
					<Link className="nav-link fw-bold" to="/Orders">
						Orders
					</Link>
					{user?.uid ? (
						<Link className="nav-link fw-bold" to="/vip">
							VIP
						</Link>
					) : (
						<Link className="nav-link fw-bold" to="/register">
							Register
						</Link>
					)}
					<span>{user?.displayName && user.displayName}</span>
					{user?.uid ? (
						<Button onClick={() => signOut(auth)} variant="danger">
							Log out
						</Button>
					) : (
						<Link className="nav-link fw-bold" to="/login">
							Login
						</Link>
					)}
				</Nav>
			</Container>
		</Navbar>
	);
};

export default Header;
