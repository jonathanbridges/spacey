import React from 'react';

const ImageBox = () => (
  <div
    className="ModalImgBox"
    onClick={e => {
      const classList = e.target.parentNode.classList;
      const imageRatio = e.target.width / e.target.height;
      const windowRatio = window.innerWidth / window.innerHeight;

      classList.toggle('big');
      if ((classList.length === 2) && (imageRatio < windowRatio)) {
        const imageHeight = 0.95 * window.innerHeight;
        const imageWidth = imageHeight * imageRatio;
        e.target.style.maxWidth = `${imageWidth}px`;
        e.target.style.width = '100%';
        e.target.style.height = 'auto';
      } else if ((classList.length === 1) && (imageRatio < windowRatio)) {
        e.target.style.width = '100%';
        e.target.style.height = 'auto';
      }
    }}
  >
    <img className="ModalImg" />
  </div>
);

export default ImageBox;
