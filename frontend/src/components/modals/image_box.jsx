import React from 'react';

const ImageBox = () => (
  <img
    className="ModalImg"
    onClick={e => e.target.classList.toggle('big')}
  />
);

export default ImageBox;
