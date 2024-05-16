import React, { Component } from 'react'
interface User {
  name: string,
  age: number,
  isMale: boolean,
}

export default class UserComponent extends Component<{}, User> {
  render() {
    return (
      <div>
        <h3>UserName:{this.state.name}</h3>
        <h3>Age:{this.state.age}</h3>
        <h3>Male:{this.state.isMale}</h3>

      </div>
    )
  }
}