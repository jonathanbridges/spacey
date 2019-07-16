import React from 'react';

class imageOfTheDay extends React.Component {

  componentDidMount() {
    this.props.fetchImageOfTheDay();
  }

  render () {
    if (this.props.nasaIOTD === undefined) {
      return (<div></div>)
    } else {
      let iotd = this.props.nasaIOTD.data;

      return (
        <div className="NasaIotd">
          <h3 className="NasaIotd--header">NASA Image of the Day</h3>
          <p className="NasaIotd--copyright">Copyright: {iotd.copyright}</p>
          <img className="NasaIotd--img" src={iotd.url} width="100%" height="auto" alt=""/>
          <p className="NasaIotd-desc">{iotd.explanation}</p>
        </div>
      )
    }
  }
}

export default imageOfTheDay;