import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { combineForms } from 'react-redux-form';
import { Form, Control } from 'react-redux-form';
import PropTypes from 'prop-types';

const initialRunner = {
      fname: '',
      lname: '',
      age: '',
      city: '',
      st: '',
      club: ''
}

const store = createStore(combineForms({
  user: initialRunner,
})); 

class Runners extends React.Component {
  handleSubmit(val) {
    // Do anything you want with the form value 
    console.log(val);
  }

  render() {
    return (
      <Provider store={ store }>

      <Form model="user" onSubmit={(val) => this.handleSubmit(val)}>
        <div>First Name <Control.text model=".fname" /></div>
        <div>Last Name <Control.text model=".lname" /></div>
        <div>Age <Control.text model=".age" /></div>
        <div>City <Control.text model=".city" /></div>
        <div>State <Control.text model=".st" /></div>
        <div>Club <Control.text model=".club" /></div>
        <div><button>Submit!</button></div>
      </Form>
      </Provider>
    );
  }
}

initialRunner.propTypes = {
  fname: PropTypes.string,
  lname: PropTypes.string,
  age: PropTypes.number,
  city: PropTypes.string,
  st: PropTypes.string,
  club: PropTypes.string
}

export default Runners