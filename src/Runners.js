import React from 'react';


class Runners extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fname: '',
      lname: '',
      age: '',
      city: '',
      st: '',
      club: ''
    } 

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleBlur(val) {
    this.setState({"fname":  "fuckyou"})
      }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.fname);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          First Name:<input id="fname" type="text" onBlur={this.handleBlur("fname")} />
        </div>
        <div>
          Last Name:<input id="lname" type="text"   />
        </div>
        <div>
          Age:<input id="age" type="text"   />
        </div>
        <div>
          City:<input id="city" type="text"  />
        </div>
        <div>
          State:<input id="state" type="text"  />
        </div>
        <div>
          Club:<input id="club" type="text"   />
        </div>
        <div>
        <input type="submit" value="Submit" />
        </div>
      </form>
    );
  }
}

export default Runners