import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import { isTouch } from '../../utils/device';

import './Link.scss';

const Link = ({ text, href, className = '' }) => {
  return (
    <a
      className={cn('Link', className, { 'Link--touch': isTouch })}
      href={href}
    >
      {text}
    </a>
  );
};

Link.propTypes = {
  text: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default Link;
