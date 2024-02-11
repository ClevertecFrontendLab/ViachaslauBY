import { Typography, List, Card } from 'antd';
import { HeartFilled, CalendarOutlined, ProfileOutlined } from '@ant-design/icons';

import './mainContent.css';

const data = [
  '— планировать свои тренировки на календаре, выбирая тип и уровень нагрузки;',
  '— отслеживать свои достижения в разделе статистики, сравнивая свои результаты с нормами и рекордами;',
  '— создавать свой профиль, где ты можешь загружать свои фото, видео и отзывы о тренировках;',
  '— выполнять расписанные тренировки для разных частей тела, следуя подробным инструкциям и советам профессиональных тренеров',  
];

const { Title } = Typography;

const MainContent = () => {
  return ( 
    <>
      <div className='container'>
        <div className='main__wrapper'>                  
          <List
            className='main__info'
            header={<Title className='info__title' level={4}>CleverFit ты сможешь:</Title>}                      
            dataSource={data}
            renderItem={item => (
              <List.Item>
                <Typography.Text></Typography.Text> {item}
              </List.Item>
            )}
          />
          <p className='main__description'>
            CleverFit — это не просто приложение, а твой личный помощник в мире фитнеса. Не откладывай на завтра — начни тренироваться уже сегодня!
          </p>

          <div className='site-card-border-less-wrapper main__cards'>
            <Card className='card' title='Расписать тренировки' bordered={false} style={{ width: 240 }}>
              <a className='card__link' href='http://'>
                <HeartFilled className='link__icon' />
                <span className='link__text'>Тренировки</span>
              </a>            
            </Card>
            <Card className='card' title='Назначить календарь' bordered={false} style={{ width: 240 }}>
              <a className='card__link' href='http://'>
                <CalendarOutlined className='link__icon'/>
                <span className='link__text'>Календарь</span>
              </a>            
            </Card>
            <Card className='card' title='Заполнить профиль' bordered={false} style={{ width: 240 }}>
              <a className='card__link' href='http://'>
                <ProfileOutlined className='link__icon' />
                <span className='link__text'>Профиль</span>
              </a>            
            </Card>          
          </div>                      
        </div>           
      </div>           
    </>
  );
}

export default MainContent;