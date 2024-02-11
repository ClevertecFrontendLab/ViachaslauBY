import { Button } from 'antd';
import { AndroidFilled, AppleFilled } from '@ant-design/icons';

import './footerContent.css'

const FooterContent = () => {
  return ( 
    <>
      <a className='footer__link' href='http://'>Смотреть отзывы</a>
      <div className='footer__card'>
        <a className='footer-card__link' href='http://'>Скачать на телефон</a>
        <span className='footer-card__text'>Доступно в PRO-тарифе</span>
        <div className='footer-card__buttons'>
          <Button className='footer__button' shape="round" icon={<AndroidFilled />} >Android OS</Button>
          <Button className='footer__button' shape="round" icon={<AppleFilled />} >Apple iOS</Button>
        </div>
      </div>
    </>
  );
}

export default FooterContent;