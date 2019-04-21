import React, { Component } from 'react';
import ImageGallery from 'react-image-gallery';

import { getViewportSize } from '../../utils/viewport';
import t0 from '../../assets/media/t0.png';
import t1 from '../../assets/media/t1.png';
import t2 from '../../assets/media/t2.jpg';
import t3 from '../../assets/media/t3.png';
import t4 from '../../assets/media/t4.png';
import t5 from '../../assets/media/t5.png';
import t6 from '../../assets/media/t6.png';

import './ContentUI.scss';

class ContentUI extends Component {
  constructor(props) {
    super(props);
    this.state = {
      height: getViewportSize().height,
    };
  }

  componentDidMount() {
    window.addEventListener('resize', this.resizeHandler)
  }

  resizeHandler = () => {
    const { height } = getViewportSize();
    if (this.state.height !== height) {
      this.setState({ height });
    }
  }

  getImages() {
    return [
      { original: t0 },
      { original: t1 },
      { original: t2 },
      { original: t3 },
      { original: t4 },
      { original: t5 },
      { original: t6 },
    ];
  }

  render() {
    const images = this.getImages();
    console.log('images', images);
    return (
      <div className="ContentUI" style={{ minHeight: this.state.height }}>
        <div className="ContentUI__header">Projects UI / UX</div>
        <div className="ContentUI__slider" style={{ minHeight: this.state.height }}>
          <ImageGallery
            showPlayButton={false}
            useBrowserFullscreen={false}
            showFullscreenButton={false}
            items={images}
          />
        </div>
      </div>
    );
  }
}

export default ContentUI;
