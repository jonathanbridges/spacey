import React from 'react';
import Carousel from 'nuka-carousel';


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
      return (
        <div id="slides">
          <div className="slide"></div>
        </div>
      )
    } else {

      // const imgStyle = {
      //   height: `480px`,
      //   width: `100%`,
      //   objectFit: `cover`
      // };

      let roverImageCollection = this.props.roverImages.data.photos;
      let roverImages = roverImageCollection.map((roverImg, idx) => (
        <div className="rover-img-container" key={idx} style={{backgroundImage: `url(${roverImg.img_src})`}}>
          {/* <img src={roverImg.img_src} className="rover-img" alt="" style={imgStyle} /> */}
        </div>
      ));

      return (
        <div>
          <Carousel>
            {roverImages}
          </Carousel>
        </div>
      )
    }
  }
}


export default roverImages;