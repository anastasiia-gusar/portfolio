import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import { isTouch } from '../../utils/device';

import './LinkIcon.scss';

const LinkIcon = ({ icon, href, className = '', target = '' }) => {
  return (
    <a
      className={cn('LinkIcon', className, { 'LinkIcon--touch': isTouch })}
      href={href}
      target={target}
    >
      <img src={icon} alt=""/>
    </a>
  );
};

LinkIcon.propTypes = {
  icon: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  target: PropTypes.string,
  className: PropTypes.string,
};

export default LinkIcon;
