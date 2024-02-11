import { Layout } from 'antd';

import HeaderContent from '@components/Header/HeaderContent';
import MainContent from '@pages/Main/MainContent';

import 'antd/dist/antd.css';
import './styles/normalize.css';
import './styles/main.css';

const { Header, Footer, Sider, Content } = Layout;

const App = () => {
  return (
    <>     
      <Layout className='wrapper'>
        <Sider className='sidebar'>
          
        </Sider>
        <Layout>
          <Header className='header'>
            <HeaderContent />
          </Header>
          <Content className='main'>
            <MainContent />
          </Content>
          <Footer className='footer'>
            Footer
          </Footer>
        </Layout>
      </Layout>            
    </>
  );
}

export default App;