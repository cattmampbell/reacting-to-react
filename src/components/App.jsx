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
      text: 'Welcome to React!' 
    }
  }

  render() {
    return(
      <h1>{ `${this.state.headerText} ${this.state.text}` }</h1>
    )
  }
}

export default App;