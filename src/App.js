import React from "react";

// curlyBraces || curlybrackets = {}
// brackets = []
// parenthesis = ()
// semi colon = ;
// colon = :
// backticks = ``

// single quotations = ''
// double quotations = ""

class App extends React.Component {
  state = {
    email: "",
    password: "",
  };

  handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    this.setState({ [name]: value });

    // console.log("element where event is occurring", event.target);
    // console.log("element name", event.target.name);
    // console.log("element value", event.target.value);
  };

  handleSubmit = (event) => {
    event.preventDefault();
    alert(this.state.email);
    alert(this.state.password);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input onChange={this.handleChange} name="email" type="email" />
        <input onChange={this.handleChange} name="password" type="password" />
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default App;
