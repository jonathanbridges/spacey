import React from 'react';

class imageOfTheDay extends React.Component {

  componentDidMount() {
    this.props.fetchImageOfTheDay();
  }

  setModalImg() {
    return e => {
      e.preventDefault();
      const src = e.target.src;
      const setSrc = () => document.querySelector('.ModalImg').src = src;

      this.props.modalOn('image');
      setTimeout(setSrc, 0);
    };
  }

  render () {
    if (this.props.nasaIOTD === undefined) {
      return (<div></div>)
    } else {
      let iotd = this.props.nasaIOTD.data;
      if (iotd.media_type === "video") {
        return (
          <div className="NasaIotd">
            <h1 className="NasaIotd--header">NASA Image of the Day</h1>
            <br/>
            <iframe title="NASA Image of the Day" src={iotd.url} width="100%" height="300px" allow="fullscreen"></iframe>
            <br/>
            <p className="NasaIotd--desc">{iotd.explanation}</p>
          </div>
        )
      } else {
        return (
          <div className="NasaIotd">
            <h1 className="NasaIotd--header">NASA Image of the Day</h1>
            <p className="NasaIotd--copyright">Copyright: {iotd.copyright}</p>
            <img className="NasaIotd--img" src={iotd.url} width="100%" height="auto" alt="" onClick={this.setModalImg()} />
            <p className="NasaIotd--desc">{iotd.explanation}</p>
          </div>
        )
      }
    }
  }
}

export default imageOfTheDay;