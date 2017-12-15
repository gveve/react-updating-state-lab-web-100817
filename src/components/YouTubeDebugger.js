// Code YouTubeDebugger Component Here

import React from 'react';

class YouTubeDebugger extends React.Component {
  constructor() {
    super();

  this.state = {
     errors: [],
     user: null,
     settings: {
       bitrate: 8,
       video: {resolution: '1080p'}
     }
   }
  }

  handleClick = () => {
    this.setState({
      settings: Object.assign({}, this.state.settings, {bitrate: 12}),})
  }

  otherClick = () => {
    this.setState({
     settings: Object.assign({}, this.state.settings, {video: {resolution: '720p'}})
   })
  }

  render() {
     return (
       <div>
         <button className='bitrate' onClick={this.handleClick}>Change Bitrate</button>
         <button className='resolution' onClick={this.otherClick}>Change Resolution</button>
       </div>
     )
   }
}

export default YouTubeDebugger;
