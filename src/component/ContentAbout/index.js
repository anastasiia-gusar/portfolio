import React, { Component } from 'react';

import LinkButton from '../LinkButton';
import { getViewportSize } from '../../utils/viewport';

import './ContentAbout.scss';

class ContentAbout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      height: getViewportSize().height,
    };
  }

  componentDidMount() {
    window.addEventListener('resize', this.resizeHandler)
  }

  resizeHandler = () => {
    const { height } = getViewportSize();
    if (this.state.height !== height) {
      this.setState({ height });
    }
  }

  render() {
    return (
      <div className="ContentAbout" style={{ minHeight: this.state.height }}>
        <h2 className="ContentAbout__header" id="about">Гусар Анастасия Сергеевна</h2>
        <p className="ContentAbout__text">Весь предыдущий опыт работы дал мне возможность определила для себя единное направления для развития - <strong>UI/UX Design.</strong></p>
        <p className="ContentAbout__text">На данный момент я усиленно развиваюсь в данном направлении и <strong>ищу свою команду мечты!</strong></p>
        <p className="ContentAbout__text--small">
          Имею опыт работы в создании маркетинговых материалов, что повышают понимание ценности продукта со стороны клиента и призывают к сотрудничеству, например:
          <ul className="dashed">
            <li>Разработка концепции и дизайна, а так же верстка цепочки писем (были подгружены в Microsoft Dynamic CRM для отправки клиентам).</li>
            <li>Разработка материалов для Отдела продаж (Коммерческое предложение, акции, презентации и т.д).</li>
            <li>Банеры, видео для рекламы.</li>
            <li>Поддержка сайт через админку, так же была полностью ответственна за создание подрядчиками лендингов для компании на предыдущем месте работы.</li>
          </ul>
        </p>
        <p className="ContentAbout__text">
          Буду очень рада принести свой вклад компанию и развиваться с Вами :)
        </p>
        <div className="ContentAbout__skills">
          <div className="ContentAbout__skillsLeft">
            <div className="ContentAbout__skillsHeader">Навыки</div>
            <div className="ContentAbout__skillsWrapper">
              <div className="ContentAbout__skillsItem"><strong>Adobe Photoshop</strong> (5 лет опыта)</div>
              <div className="ContentAbout__skillsItem"><strong>Adobe Illustrator</strong> (до 1 год опыта)</div>
              <div className="ContentAbout__skillsItem"><strong>Figma</strong> (до 1 год опыта)</div>
              <div className="ContentAbout__skillsItem"><strong>HTML / CSS</strong> (до 1 год опыта)</div>
              <div className="ContentAbout__skillsItem"><strong>Английский</strong> Intermidiate</div>
            </div>
          </div>
          <div className="ContentAbout__skillsRight">
            <div className="ContentAbout__skillsHeader">Курсы</div>
            <div className="ContentAbout__skillsWrapper">
              <div className="ContentAbout__skillsItem"><strong>Artcraft</strong> - школа компьютерной графики
                Обучение компьютерной графике, цифровому рисунку, работа с планшетом Wacom</div>
              <div className="ContentAbout__skillsItem"><strong>HTML Academy</strong> - Онлайн-курсы HTML/CSS
                Обучаюсь в настоящее время.</div>
              <div className="ContentAbout__skillsItem"><strong>Green Forest</strong> - курсы английского языка
                Обучаюсь в настоящее время.</div>
            </div>
          </div>
        </div>
        <div className="ContentAbout__contact">
          <LinkButton
            className="ContentAbout__contactButton"
            text="ОТПРАВИТЬ ПИСЬМО"
            href="#"
          />
        </div>
      </div>
    );
  }
}

export default ContentAbout;
