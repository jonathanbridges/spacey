import React from "react";

class imageOfTheDay extends React.Component {
  componentDidMount() {
    this.props.fetchImageOfTheDay();
  }

  setModalImg() {
    return (e) => {
      e.preventDefault();
      const src = e.target.src;
      const setSrc = () => (document.querySelector(".ModalImg").src = src);

      this.props.modalOn("image");
      setTimeout(setSrc, 0);
    };
  }

  render() {
    if (!this.props.nasaIOTD) {
      return (
        <div className="NasaIotd">
          <h1 className="NasaIotd--header">NASA Image of the Day</h1>
          <p className="NasaIotd--copyright">
            Error loading content. Please try again later.
          </p>
        </div>
      );
    } else {
      const {
        data: { copyright, title, url, media_type, explanation },
      } = this.props.nasaIOTD;

      const renderHeader = (
        <h1 className="NasaIotd--header">
          {`NASA ${media_type === "image" ? "Image" : "Video"} of the Day`}
        </h1>
      );
      const renderTitle = <h4 className="NasaIotd--desc">{title}</h4>;

      const renderImage = (
        <img
          className="NasaIotd--img"
          src={url}
          width="100%"
          height="auto"
          alt=""
          onClick={this.setModalImg()}
        />
      );

      const renderVideo = (
        <iframe
          title="NASA Image of the Day"
          src={url}
          width="100%"
          height="300px"
          allow="fullscreen"
        />
      );

      const renderCopyright = (
        <p className="NasaIotd--copyright">
          {`Copyright: ${copyright ? copyright : "NASA"}`}
        </p>
      );

      const renderDescription = <p className="NasaIotd--desc">{explanation}</p>;
      return (
        <div className="NasaIotd">
          {renderHeader}
          {title && renderTitle}
          {media_type === "video" && renderVideo}
          {media_type === "image" && renderImage}
          {renderCopyright}
          {explanation && renderDescription}
        </div>
      );
    }
  }
}

export default imageOfTheDay;
