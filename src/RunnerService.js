import React from 'react'
import axios from 'axios';

class RunnerService extends React.Component {
	constructor(props) {
		super(props);
		this.state = {posts: []};
	}

		//'https://swapi.co/api/people/?format=json'
		//'https://quiet-refuge-72491.herokuapp.com/runners.json'

	componentDidMount() {
		//fetch( 'https://swapi.co/api/people/?format=json' )
		fetch( 'https://quiet-refuge-72491.herokuapp.com/runners.json')
			.then( response => response.json() )
			.then( (response) => this.setState({response}) )


	    // axios.get(`https://swapi.co/api/people/?format=json`)
	    //   .then(res => {
	    //   	var x = res;
	    //     const posts = res.data.results.map(obj => obj.data);
	    //     this.setState({ posts });
	    //   });
  	}

  render() {


    	if(!this.state.response) {
    		return <div>Waiting on response</div>
    	}
    	if(this.state.response.length === 0) {
    		return <div>No results retruned</div>
    	}


      //Normal case         
      var returnedValues = this.state.response.map(function(index){
        return (
          <div key={index.id} >{index.first_name} {index.last_name}</div>
        )
      });


      return (
        <div>
          {returnedValues}
        </div>
      ) 
  }
}



export default RunnerService