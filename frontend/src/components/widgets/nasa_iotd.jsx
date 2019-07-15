import React from 'react';

class imageOfTheDay extends React.Component {

  componentDidMount() {
    this.props.fetchImageOfTheDay();
  }
  
  render () {
    if (!this.props.nasaIOTD.status) {
      return (<div></div>)
    } else {
      return (
        <div>
          <img src={this.props.nasaIOTD.data.url} width="400" height="400" alt=""/>
        </div>
      )
    }
  }
}

export default imageOfTheDay;