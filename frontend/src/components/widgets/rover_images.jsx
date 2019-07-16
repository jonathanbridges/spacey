import React from 'react';

class roverImages extends React.Component {

  componentDidMount() {
    let date;
    this.props.fetchRoverManifest().then(() => {
      date = this.props.roverManifest.data.photo_manifest.max_date;
      this.props.fetchRoverPhotos(date);

    }
    );
  }

  render() {
    // if (this.props.nasaIOTD === undefined) {
    //   return (<div></div>)
    // } else {
    //   let iotd = this.props.nasaIOTD.data;

    //   return (
    //     <div>
    //       <h3 className="iotd-header">NASA Image of the Day</h3>
    //       <p className="iotd-copyright">Copyright: {iotd.copyright}</p>
    //       <img className="iotd-img" src={iotd.url} width="100%" height="auto" alt="" />
    //       <p className="iotd-desc">{iotd.explanation}</p>
    //     </div>
    //   )

    return (
      <div></div>
    )
  }
}

export default roverImages;