// Code DigitalClicker Component Here
import React, { Component } from 'react'

class DigitalClicker extends Component {
    constructor() {
      super()
      this.state = {
        timesClicked: 0
      }
    }

    countUp = () => {
      this.setState({
        timesClicked: this.state.timesClicked + 1
      })
    }

    render() {
      return (
        <div>
          <button onClick={this.countUp}>{this.state.timesClicked}</button>
        </div>
      )
    }

}


export default DigitalClicker