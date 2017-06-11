import React from 'react';
  
class App extends React.Component {

  
  render() {
    
    //Can only return one node
    // return <h1>Hello World</h1>

    // this fails
    // return <h1> Hello </h1> <b>World!</b>

    // Wrap in div, and optionally use parens (so white space is ignored)

    // Set a vars to the properties if you want
    let txt = this.props.txt

    return (
      <div>
        {/*<h2>Hello</h2><h1>World</h1>*/}

        {/* return a property */}
        <h1>{this.props.txt}</h1>

        {/* use the var */}
        <br />
        <h1>From the variable {txt}</h1>

      </div>
    )

    // Under the hood all it turned into js kind of like this
    //return React.createElement('h1', null, 'Hello Egghead');
  }
}

// This prints the string to the page but is stateless
// const App = () => <h1>Hello From Stateless Component</h1>

App.propTypes = {
  txt: React.PropTypes.string,
  cat: React.PropTypes.number.isRequired
}

// if txt is not defined, the this value is used
App.defaultProps = {
  txt: "This is the default text value"
}

export default App;