import React from 'react';

class roverImages extends React.Component {

  componentWillMount() {
    let date;
    this.props.fetchRoverManifest().then(() => {
      date = this.props.roverManifest.data.photo_manifest.max_date;
      this.props.fetchRoverPhotos(date);
    });
  }

  render() {
    if (!this.props.roverImages) {
      return (<div></div>)
    } else {
    let roverImageCollection = this.props.roverImages.data.photos;
    let roverImages = roverImageCollection.map((roverImg, idx) => (
      <img key={idx} src={roverImg.img_src} alt="" height="auto" width="100%" />
    ));

      return (
        <div>
          {roverImages}
        </div>
      )
    }
  }
}

export default roverImages;