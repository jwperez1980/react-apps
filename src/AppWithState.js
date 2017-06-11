import React from 'react';

class AppWithState extends React.Component {

	constructor() {
		super();
		this.state = {
			txt: 'this is the state txt',
			cat: 0
		} 
	}

	// Custom method that will update the text value (set it's state)
	// e will be an onchange event
	update( e ) {
		this.setState({txt: e.target.value})
	}


	// Add an onChange the grabs the value in a text box and 
	// and passes it to the update method
	render() {
		return (
			<div>

				<h1>{this.state.txt} :: {this.state.cat}</h1>



				<input type="text"
					onChange={this.update.bind(this)}/>

				{/* Now, instead of hard coding the text box, pass in a component} */}
				<Widget update={this.update.bind(this)} />


			</div>
		)

	}
}

// This will be a child component in the page that can be 
// reused to update it's parent
const Widget = (props) =>
	<input type="text" onChange={props.update} />

export default AppWithState;