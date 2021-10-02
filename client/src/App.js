import React from 'react'

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      welcome:"Halou"
    }
  }
  render() {
    return (
      <div>{this.state.welcome}</div>
    )
  }
}
