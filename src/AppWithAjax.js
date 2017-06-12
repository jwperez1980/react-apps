import React from 'react'


class AppWithAjax extends React.Component {
	constructor() {
		super();
		this.state = {items: []};
	}
	componentWillMount(){
		var a = {"items": [{"last_name": "john"}]}
		this.setState(a)

		//AJAX
		fetch( 'https://swapi.co/api/people/?format=json' )
		//fetch( 'https://quiet-refuge-72491.herokuapp.com/runners.json')
			.then( response => response.json() )
			.then( (response) => this.setState({response}) )
	}
	filter(e) {
		this.setState({filter: e.target.value})
	}
	render() {

		let items = this.state.items
		if(this.state.filter) {
			items = items.filter( item =>
				item.last_name.toLowerCase()
				.includes(this.state.filter.toLowerCase()))
		}
		return (
			<div>
				<div>
					<input type="text" onChange={this.filter.bind(this)} />
					{items.map(item =>
						<Person key={item.last_name} person={item} />)}
				</div>
				<div>
                {/* <ul>
                    <li><Link to="/runners">Runners</Link></li>
                </ul> */}
				</div>	
			</div>
		)
	}
}

const Person = (props) => <h4>{props.person.last_name}</h4>


export default AppWithAjax