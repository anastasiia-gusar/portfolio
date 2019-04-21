import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import { isTouch } from '../../utils/device';

import './LinkIcon.scss';

const LinkIcon = ({ icon, href, className = '' }) => {
  return (
    <a
      className={cn('LinkIcon', className, { 'LinkIcon--touch': isTouch })}
      href={href}
    >
      <img src={icon} alt=""/>
    </a>
  );
};

LinkIcon.propTypes = {
  icon: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default LinkIcon;
