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

      let roverImageCollection = this.props.roverImages.data.photos;
      let roverImages = roverImageCollection.map((roverImg, idx) => (
        <div className="rover-img-container" key={idx} style={{backgroundImage: `url(${roverImg.img_src})`}}>
          <div className="rover-deets">
            <p className="rover-info"> Curiosity: {this.props.roverImages.data.photos[`${idx}`].camera.full_name} </p>
          </div>
        </div>
      ));

      return (
        <div>
          <Carousel slidesToShow={2}>
            {roverImages}
          </Carousel>
        </div>
      )
    }
  }
}


export default roverImages;