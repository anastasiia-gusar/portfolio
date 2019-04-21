import React, { Component } from 'react';
import ImageGallery from 'react-image-gallery';

import { getViewportSize } from '../../utils/viewport';
import k1 from '../../assets/media/k1.jpg';
import k2 from '../../assets/media/k2.jpg';
import k3 from '../../assets/media/k3.jpg';
import k4 from '../../assets/media/k4.png';
import k5 from '../../assets/media/k5.png';
import k6 from '../../assets/media/k6.png';
import k7 from '../../assets/media/k7.png';

import './ContentSoft.scss';

class ContentSoft extends Component {
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
      { original: k5 },
      { original: k6 },
      { original: k7 },
      { original: k1 },
      { original: k2 },
      { original: k3 },
      { original: k4 },
    ];
  }

  render() {
    const images = this.getImages();
    return (
      <div className="ContentSoft" id="soft">
        <div className="ContentSoft__header">Soft Skills</div>
        <p className="ContentSoft__text">
          <div className="ContentSoft__textHeader">Верстка и дизайн цепочки писем</div>
          Созданы для e-mail рассылки клиентам компании через CRM. Все письма и Коммерческое предложение созданы в соответствии с Brand Book, с учетом целевой аудитории и основного целевого действия каждого письма.
          Использовались: Photoshop, Illustrator, HTML/CSS.
        </p>
        <div className="ContentSoft__slider">
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

export default ContentSoft;
