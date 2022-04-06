import react, { Component } from "react";
import "./App.css";
import cors from "cors";
import {} from "@mui/material";

/* function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
} */

class App extends Component {
  // A class component must have its constructor --> allows to receive props (sate)

  constructor(props) {
    super(props);
    // super --> capturates the props of the parent component
    this.state = {
      users: [],
    };
  }

  componentDidMount() {
    fetch("http://localhost:3000/api/users")
      .then((response) => response.json())
      .then((users) => this.setState({ users: users }));
  }

  componentDidUpdate() {}

  render() {
    return (
      <>
        <h1>{this.props.title}</h1>;
      </>
    );
  }
}

export default App;
