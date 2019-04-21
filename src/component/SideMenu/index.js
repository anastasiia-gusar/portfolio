import React, { Component } from 'react';

import viberIcon from '../../assets/svg/viber.svg';

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
              <ul className="SideMenu__menu">
                <li className="SideMenu__menuItem">About</li>
                <li className="SideMenu__menuItem">UI | UX</li>
                <li className="SideMenu__menuItem">Soft Skills</li>
                <li className="SideMenu__menuItem">Graphic art</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SideMenu;
