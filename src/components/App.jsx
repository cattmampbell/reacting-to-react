import React, { Component } from 'react';
import '../App.css';

// Functional 'App' Component
// const App = (props) => {
//   return(
//     <h1>{props.header}</h1>
//   )
// }

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      header: props.header,
      text: 'Type a Color!',
      color: ' ',
      hasLoaded: false
    }
  }

  handleInputChange = (event) => {
    this.setState({ color: event.target.value })
  }

  handleButtonClick = () => {
    this.setState({ hasLoaded: !this.state.hasLoaded })
  }

  render() {
    return(
      <React.Fragment>
        <h1 style={{color: this.state.color}}>{this.state.header + ', ' + this.state.text}</h1>
        <input 
          placeholder={this.state.text}
          onChange={ this.handleInputChange }
        />
        <button onClick={this.handleButtonClick}>Click Me</button>
        <h2>{this.state.hasLoaded.toString().toUpperCase()}</h2>
      </React.Fragment>
    )
  }
}

export default App;