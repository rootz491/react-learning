import React, { Component } from "react";


export default class ShowOff extends Component {
	render() {
		return (
			/* use props inside class */
			<section>
				<p>name: {this.props.name}</p>
				<p>Age: {this.props.age}</p>
				<p><b>Skills</b> {this.props.skills[0]} - {this.props.skills[1]} - {this.props.skills[2]}</p>
				<h3>{this.props.quoteFormatter(this.props.quote)}</h3>
			</section>
		);
	}
}