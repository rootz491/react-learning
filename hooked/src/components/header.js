import React from "react";
import logo from '../logo.svg';

import ShowOff from "./showoff";

//	shorthand for function as a component
export const Header = props => (
	<header className="App-header">
		<img src={logo} className="App-logo" alt="logo" />
		<div>
			{/* conponent can use other components */}
			<ShowOff
				//	use own prop value as prop for other component
				name={props.name}
				//	number as prop
				age={19}
				// array as prop
				skills={['Javascript', 'Bug Hunter', 'Full-Stack Developer']}
				// normal string as prop
				quote="IDK what am i doing here 🥲"
				// send lanbda function as prop to Component
				quoteFormatter={(quote) => `"${quote}"`}
			/>
		</div>
	</header>
);
