import React from "react";


//	function as a component & named export
export const Intro = props => {
	return (
		<h1>{props.name} is learning react.</h1>
	);
}

export const Outro = () => (
    <h1>Sayoñara 👋🏻</h1>
);