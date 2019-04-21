import React, { Component } from 'react';

import ContentAbout from '../ContentAbout';
import ContentUI from '../ContentUI';
import ContentSoft from '../ContentSoft';
import ContentGraphic from '../ContentGraphic';

import './Content.scss';

class Content extends Component {
  render() {
    return (
      <div className="Content">
        <ContentAbout />
        <ContentUI />
        <ContentSoft />
        <ContentGraphic />
        <div className="Content__thanks">Спасибо за внимание!</div>
      </div>
    );
  }
}

export default Content;
