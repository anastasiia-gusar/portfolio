import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import { isTouch } from '../../utils/device';

import './LinkButton.scss';

const LinkButton = ({ text, href, className = '' }) => {
  return (
    <a
      className={cn('LinkButton', className, { 'LinkButton--touch': isTouch })}
      href={href}
    >
      {text}
    </a>
  );
};

LinkButton.propTypes = {
  text: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default LinkButton;
