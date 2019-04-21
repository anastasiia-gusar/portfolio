import React, { Component } from 'react';
import cn from 'classnames';

import Link from '../Link';
import LinkIcon from '../LinkIcon';
import viberIcon from '../../assets/svg/viber.svg';
import instagramIcon from '../../assets/svg/instagram.svg';
import linkedinIcon from '../../assets/svg/linkedin.svg';
import emailIcon from '../../assets/svg/email.svg';

import './SideMenu.scss';

class SideMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isCollapsed: true,
    };
  }

  toggleCollapse = () => {
    this.setState({ isCollapsed: !this.state.isCollapsed });
  }

  render() {
    const { isCollapsed } = this.state;
    return (
      <div className={cn('SideMenu', {
        'SideMenu--collapsed': isCollapsed,
        'SideMenu--expand': !isCollapsed,
      })}>
        <div className="SideMenu__wrapper">
          <div className="SideMenu__smallPhoto" />
          <div className="SideMenu__stateControl">
            <div
              onClick={this.toggleCollapse}
              className={cn('SideMenu__stateControlButton', {
                'SideMenu__stateControlButton--expand': isCollapsed,
                'SideMenu__stateControlButton--collapse': !isCollapsed,
              })}
            />
          </div>
          <div className="SideMenu__content">
            <div className="SideMenu__photo" />
            <div className="SideMenu__text">
              <div className="SideMenu__contacts">
                <div className="SideMenu__contact">
                  <div className="SideMenu__contactLabel">тел.:</div>
                  <div className="SideMenu__contactText">
                    +38 (093) 345 77 68
                    <img src={viberIcon} alt="" className="SideMenu__contactIcon" />
                  </div>

                </div>
                <div className="SideMenu__contact">
                  <div className="SideMenu__contactLabel">e-mail:</div>
                  <div className="SideMenu__contactText">anastasiia.shpak1@gmail.com</div>
                </div>
              </div>
              <ul className="SideMenu__links">
                <li className="SideMenu__linkContainer">
                  <Link
                    text="About"
                    href="#"
                    className="SideMenu__link"
                  />
                </li>
                <li className="SideMenu__linkContainer">
                  <Link
                    text="UI | UX"
                    href="#"
                    className="SideMenu__link"
                  />
                </li>
                <li className="SideMenu__linkContainer">
                  <Link
                    text="Soft Skills"
                    href="#"
                    className="SideMenu__link"
                  />
                </li>
                <li className="SideMenu__linkContainer">
                  <Link
                    text="Graphic art"
                    href="#"
                    className="SideMenu__link"
                  />
                </li>
              </ul>
            </div>
            <div className="SideMenu__social">
              <LinkIcon
                icon={instagramIcon}
                target="_blank"
                href="https://www.instagram.com/ana.shpak_design.workpage"
                className="SideMenu__socialItem"
              />
              <LinkIcon
                icon={linkedinIcon}
                target="_blank"
                href="#"
                className="SideMenu__socialItem"
              />
              <div className="SideMenu__socialSpace" />
              <LinkIcon
                icon={emailIcon}
                target="_blank"
                href="#"
                className="SideMenu__socialItem"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SideMenu;
