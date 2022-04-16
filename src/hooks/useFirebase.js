import { GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import { getAuth } from "firebase/auth";
import app from "../firebase.init";

const auth = getAuth(app);

const useFirebase = () => {
	const [user, setUser] = useState({});

	const googleProvider = new GoogleAuthProvider();

	const signInUsingGoogle = () => {
		signInWithPopup(auth, googleProvider)
			.then((result) => {
				const user = result.user;
				setUser(user);
				console.log(user);
			})
			.catch((error) => {
				console.error(error);
			});
	};

	const userSignOut = () => {
		signOut(auth)
			.then(() => {})
			.catch((error) => {
				console.error(error);
			});
	};

	useEffect(() => {
		onAuthStateChanged(auth, (user) => {
			setUser(user);
		});
	}, []);
	return { user, setUser, signInUsingGoogle, userSignOut };
};

export default useFirebase;
