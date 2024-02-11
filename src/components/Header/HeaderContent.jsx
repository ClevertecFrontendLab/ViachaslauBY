import {SettingOutlined} from '@ant-design/icons';
import { Typography } from 'antd';
import { Button } from 'antd';

import './headerContent.css';

const { Title } = Typography;

const HeaderContent = () => {
  return ( 
      <>
        <div className='header__info'>
          <span className='header__page'>Главная</span>          
          <Title className='header__title'>
            Приветствуем тебя в CleverFit — приложении, которое поможет тебе добиться своей мечты!
          </Title>          
        </div>
        <div className='header__settings'>
          <Button className='settings__text' icon={<SettingOutlined className='settings__icon'/>}>Настройки</Button>                   
        </div>
      </>
  );
}

export default HeaderContent;