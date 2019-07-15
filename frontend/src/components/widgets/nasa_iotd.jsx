import React from 'react';

class imageOfTheDay extends React.Component {

  componentDidMount() {
    this.props.fetchImageOfTheDay();
  }

  render () {
    if (!this.props.nasaIOTD === undefined) {
      return (<div></div>)
    } else {
      let iotd = this.props.nasaIOTD.data;

      return (
        <div>
          <h3 className="iotd-header">NASA Image of the Day</h3>
          <p className="iotd-copyright">Copyright: {iotd.copyright}</p>
          <img className="iotd-img" src={iotd.url} width="100%" height="auto" alt=""/>
          <p className="iotd-desc">{iotd.explanation}</p>
        </div>
      )
    }
  }
}

export default imageOfTheDay;