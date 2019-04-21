import React, { Component } from 'react';

import ContentAbout from '../ContentAbout';
import ContentUI from '../ContentUI';

import './Content.scss';

class Content extends Component {
  render() {
    return (
      <div className="Content">
        <ContentAbout />
        <ContentUI />
      </div>
    );
  }
}

export default Content;
