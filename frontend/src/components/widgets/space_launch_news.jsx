import React from 'react';

class SpaceLaunchNews extends React.Component {

  componentDidMount() {
    debugger 
    this.props.fetchSpaceLaunchNow();
  }

  render() {
    debugger 
    if (this.props.spaceLaunchNews === undefined) {
      return (<div></div>)
    } else {
      // let iotd = this.props.nasaIOTD.data;
      return (
        <div>
          <h1>Space Launch News</h1>
        </div>
      )
    }
  }
}

export default SpaceLaunchNews;