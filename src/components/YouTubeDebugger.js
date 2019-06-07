// Code YouTubeDebugger Component Here
import React, { Component } from 'react'
class YouTubeDebugger extends Component {
    constructor() {
      super()
      this.state = {
        errors: [],
        user: null,
        settings: {
          bitrate: 8,
          video: {
            resolution: '1080p'
          }
        }
      }

    }
    // End constructor

    changeBitrate = () => {
      this.setState({
        settings: Object.assign({}, this.state.settings, {
          bitrate: 12,
          video: {
            resolution: '1080p'
          }
        })
      })
    }

    changeResolution = () => {
      this.setState({
        settings: Object.assign({}, this.state.settings, {
          bitrate: 8,
          video: {
            resolution: '720p'
          }
        })
      })
    }

    render() {
      return (
        <div>          
          <button onClick={this.changeBitrate} className="bitrate">Change Bitrate</button>
          <br />
          <br />
          <button onClick={this.changeResolution} className="resolution">Change Resolution</button>
        </div>

        

      )
    }
}

export default YouTubeDebugger