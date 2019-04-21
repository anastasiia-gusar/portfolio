import React, { Component } from 'react';
import ImageGallery from 'react-image-gallery';

import LinkButton from '../LinkButton';
import { getViewportSize } from '../../utils/viewport';
import t0 from '../../assets/media/d1.jpg';
import t1 from '../../assets/media/d2.png';
import t2 from '../../assets/media/d3.png';
import t3 from '../../assets/media/d4.png';
import t4 from '../../assets/media/d5.png';

import './ContentGraphic.scss';

class ContentGraphic extends Component {
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
    ];
  }

  render() {
    const images = this.getImages();
    return (
      <div className="ContentGraphic" id="graphic">
        <div className="ContentGraphic__header">Graphic Art</div>
        <p className="ContentGraphic__text">
          <div className="ContentGraphic__textHeader">Работы в растровой и векторной графике для души :)</div>
          Использовались: Adobe Photoshop, Illustrator.
        </p>
        <div className="ContentGraphic__slider">
          <ImageGallery
            showPlayButton={false}
            useBrowserFullscreen={false}
            showFullscreenButton={false}
            items={images}
          />
        </div>
        <div className="ContentGraphic__contact">
          <LinkButton
            className="ContentGraphic__contactButton"
            text="ОТПРАВИТЬ ПИСЬМО"
            href="mailto: anastasiia.shpak1@gmail.com"
          />
        </div>
      </div>
    );
  }
}

export default ContentGraphic;
