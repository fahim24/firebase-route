import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import useFirebase from "../../hooks/useFirebase";

const Header = () => {
	const { user, userSignOut } = useFirebase();
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
					<Link className="nav-link fw-bold" to="/register">
						Register
					</Link>
					<span>{user?.displayName && user.displayName}</span>
					{user?.uid ? (
						<Button onClick={userSignOut} variant="danger">
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
