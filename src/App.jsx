import { Layout } from 'antd';
const { Header, Footer, Sider, Content } = Layout;

import HeaderContent from '@components/Header/HeaderContent';

import "./styles/normalize.css";
import "./styles/main.css";


const App = () => {
  return (
    <>     
      <Layout className='wrapper'>
        <Sider className='sidebar'>
          Sidebar
        </Sider>
        <Layout>
          <Header className='header'>
            <HeaderContent />
          </Header>
          <Content>Content</Content>
          <Footer className='footer'>Footer</Footer>
        </Layout>
      </Layout>            
    </>
  );
}

export default App;
