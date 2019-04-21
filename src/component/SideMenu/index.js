import React, { Component } from 'react';

import Link from '../Link';
import LinkIcon from '../LinkIcon';
import viberIcon from '../../assets/svg/viber.svg';
import instagramIcon from '../../assets/svg/instagram.svg';
import linkedinIcon from '../../assets/svg/linkedin.svg';
import emailIcon from '../../assets/svg/email.svg';

import './SideMenu.scss';

class SideMenu extends Component {
  render() {
    return (
      <div className="SideMenu">
        <div className="SideMenu__wrapper">
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
                href="#"
                className="SideMenu__socialItem"
              />
              <LinkIcon
                icon={linkedinIcon}
                href="#"
                className="SideMenu__socialItem"
              />
              <div className="SideMenu__socialSpace" />
              <LinkIcon
                icon={emailIcon}
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
