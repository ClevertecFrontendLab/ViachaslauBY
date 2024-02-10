import {SettingOutlined} from '@ant-design/icons';

import './headerContent.css';

const HeaderContent = () => {
  return ( 
      <>
        <div className="header__info">
          <span className="header__page">Главная</span>
          <h1 className="header__title">
            Приветствуем тебя в CleverFit — приложении, которое поможет тебе добиться своей мечты!
          </h1>
        </div>
        <div className="header__settings">
          <SettingOutlined className='settings__icon'/>
          <span className='settings__text'>Настройки</span>
        </div>
      </>
  );
}

export default HeaderContent;