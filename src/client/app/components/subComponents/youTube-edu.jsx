/* eslint-disable class-methods-use-this */
/* eslint-disable react/sort-comp */
import React from 'react';
import YouTube from 'react-youtube';

class Educational extends React.Component {
  onReadyFunc(event) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }
  render() {
    const opts = {
      height: '390',
      width: '640',
      playerVars: { // https://developers.google.com/youtube/player_parameters
        autoplay: 1,
        controls: 0,
        loop: 1,
        listType: 'user_uploads',
      },
    };
    return (
      <YouTube
        videoId="3cZj2agscRs" // https://youtu.be/3cZj2agscRs
        opts={opts}
        onReady={this.onReadyFunc}
      />
    );
  }
}

export default Educational;
