import React, { Component } from 'react';

import ContentAbout from '../ContentAbout';

import './Content.scss';

class Content extends Component {
  render() {
    return (
      <div className="Content">
        <ContentAbout />
      </div>
    );
  }
}

export default Content;
