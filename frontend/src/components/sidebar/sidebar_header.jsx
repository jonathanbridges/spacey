import React from 'react'

const SideBarHeader = ()=>{
    const scrollToTop = () => {
        console.log('test');
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }
    return (
      <div className="SideBarHeader">
        <span
          className="emoji"
          role="img"
          aria-label="rocket"
          onClick={scrollToTop}
        >
          🚀
        </span>
      </div>
    );
}

export default SideBarHeader