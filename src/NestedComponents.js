import React from 'react';

class NestedComponents extends React.Component {

	render() {

	let who = "I";
	let what = "React";

		return (
			<div>
				<Title text="React App" />
				<Button>{who} <Heart /> {what}</Button>
			</div>
		)
	}
}

//This is astateless Component 
// props.children gets ad the child of the Button component
//const Button = (props) => <button>{props.children}</button>

//The result is the same as using const, except this is no longer stateless
//Note the use of this.props to get to the child of this componenet (the stuff
//inside the button tags), since props is now a memeber of the Button class.
class Button extends React.Component {
	render() {
		return <button>{this.props.children}</button>
	}
}

//This is a nested component (inside Button)
class Heart extends React.Component {
	render() {
		return <span>&hearts;</span>
	}
}

class Title extends React.Component {

	render() {
		return <h1>Title: {this.props.text}</h1>
	}
}

//Now add some validation of the Title
Title.propTypes = {
	text(props, propName, component) {
		if(!(propName in props)) {
			return new Error ('missing ${propName}')
		}

		if(props[propName].length < 6) {
			return new Error('${propName} was too short')
		}
	}
}

export default NestedComponents;	

