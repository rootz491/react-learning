import React from "react"
import './App.css';

import { Intro, Outro } from "./components/intro-outro";
import { Header } from "./components/header";
import ContactForm from "./components/contactForm";
import FetchApi from "./components/fetchApi";
import Toggler from "./components/toggler";

//	functional components
import MyButton from "./hookedComponents/button";
import Quote from "./hookedComponents/quote";
import SecretForm from "./hookedComponents/secretForm";

//	main component
class App extends React.Component {

	render() {
		return (
			<div className="App">
				<Header name="Karan Sharma" />
				<Intro name="Karan" />
				<Quote />
				<Toggler />
				<ContactForm />
				<MyButton name="karan" />
				<FetchApi />
				<SecretForm />
				<Outro />
			</div>
		);
	}
}

export default App;