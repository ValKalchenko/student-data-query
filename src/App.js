import { Layout, Image } from "antd";
import AppRoutes from "./components/Routes";
import SideMenu from "./components/SideMenu";
import { Amplify } from "aws-amplify";
import awsconfig from './aws-exports';
import { withAuthenticator } from "@aws-amplify/ui-react";
import '@aws-amplify/ui-react/styles.css';

Amplify.configure(awsconfig);

const { Sider, Content, Footer } = Layout;


function App() {
  return (
    <Layout>
      <Sider style={{backgroundColor: 'white'}}>
        <Image
          src="https://marvel-b1-cdn.bc0a.com/f00000000266434/www.chc.edu/sites/default/files/new_logo.png"
          preview={false}
        />
        <SideMenu />
      </Sider>
      <Layout>
        <Content>
          <AppRoutes />
        </Content>
        <Footer style={{textAlign: 'center'}}>
          Student Data Query @2023
        </Footer>
      </Layout>
    </Layout>
    
  );
}

export default withAuthenticator(App);
