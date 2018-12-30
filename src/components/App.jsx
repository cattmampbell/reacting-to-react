import React, { Component } from 'react';
import '../App.css';

// Functional 'App' Component
// const App = (props) => {
//   return(
//     <h1>{props.headerText}</h1>
//   )
// }

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      headerText: props.headerText,
      text: 'Type a Color!',
      color: 'black'
    }
  }

  handleInputChange = (event) => {
    this.setState({ color: event.target.value })
  }

  render() {
    const h1style = {
      color: this.state.color
    }

    return(
      <React.Fragment>
        <h1 style={h1style}>{this.state.headerText + ', ' + this.state.text}</h1>
        <input 
          placeholder={this.state.text}
          // onChange={(event) => this.setState({ text: event.target.value }) }
          onChange={ this.handleInputChange }
        />
      </React.Fragment>
    )
  }
}

export default App;