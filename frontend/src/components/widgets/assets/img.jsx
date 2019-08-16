import React from 'react';

class Img extends React.Component {
  constructor(props) {
    super(props);
    this.state = { loaded: false };
    this.onLoad = this.onLoad.bind(this);
  }

  onLoad() {
    this.setState({ loaded: true });
  };

  setModalImg() {
    return e => {
      e.preventDefault();
      const src = e.target.src;
      const setSrc = () => document.querySelector('.ModalImg').src = src;

      this.props.modalOn('image');
      setTimeout(setSrc, 0);
    };
  }

  render() {
    const { className, src, alt } = this.props;
    const { loaded } = this.state;

    return (
      <img
        className={className}
        src={loaded ? src || 'https://i.gifer.com/24OD.gif' : 'https://i.gifer.com/24OD.gif'}
        alt={alt}
        onLoad={this.onLoad}
        onClick={this.setModalImg()}
      />
    );
  }
}

export default Img;
