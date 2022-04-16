import React from "react";
import { getAuth } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import app from "../../firebase.init";

const auth = getAuth(app);

const Home = () => {
	const [user] = useAuthState(auth);
	return (
		<div>
			<h2>Home</h2>
			<p>Current User: {user ? user.displayName : "None"}</p>
		</div>
	);
};

export default Home;
