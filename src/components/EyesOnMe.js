// Code EyesOnMe Component Here
import React, { Component } from 'react'

class EyesOnMe extends Component {
  render() {
    return (
      <button
        onFocus={(event) => {
          console.log('Good!')
        }}
        onBlur={(event) => {
          console.log('Hey! Eyes on me!')
        }}
      />
    )
  }
}

export default EyesOnMe
