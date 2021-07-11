// Code Keypad Component Here
import React, { Component } from 'react'

class Keypad extends Component {
  render() {
    return (
      <input
        type='password'
        onKeyUp={(event) => {
          console.log('Entering password...')
        }}
      />
    )
  }
}

export default Keypad
