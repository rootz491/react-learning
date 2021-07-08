import React, { useState, useEffect } from "react"
import getFirebase from "./firebase"; 
import './App.css';

import NavBar from "./hookedComponents/nav";

import { Intro, Outro } from "./components/intro-outro";
import ContactForm from "./components/contactForm";
import FetchApi from "./components/fetchApi";
import Toggler from "./components/toggler";

//	functional components
import MyButton from "./hookedComponents/button";
import Quote from "./hookedComponents/quote";
import SecretForm from "./hookedComponents/secretForm";

const firebase = getFirebase();

//	main component
function App() {
	const [currentUser, setCurrentUser] = useState(null);

	useEffect(() => {
		try {
			firebase && firebase.auth().onAuthStateChanged((authUser) => {
				if (authUser) {
					console.log("user: ", authUser)
					setCurrentUser(authUser);
				} else {
					setCurrentUser(null);
				}
			});
		}
		catch (err) {
			console.log(err)
		}
	}, []);

	return (
		<div className="App">
			<NavBar user={currentUser} />
			{
				currentUser ?
				(
					<div>
						<Intro />
						<Quote />
						<FetchApi />
						<SecretForm />
						<Toggler />
						<ContactForm />
						<MyButton name="karan" />
						<Outro />
					</div>
				) :
				null
			}
		</div>
	);
}

export default App;