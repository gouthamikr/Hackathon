import React from "react";
import "./App.css";
import HomePage from "./Components/Home";
import Navbar from "./Components/Navbar";

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      show: false
    }
  }

  handleToggle = () => {
    this.setState({
      show: !this.state.show
    })
  }

  render() {
    return (
      <div>
        <Navbar show={this.state.show} handleToggle={this.handleToggle} />
        <HomePage show={this.state.show} handleToggle={this.handleToggle} />
      </div>
    );
  }
}

export default App;