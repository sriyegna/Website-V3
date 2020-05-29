import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Layout, Header, Drawer, Navigation, Content } from 'react-mdl';
import Main from './components/main';

function App() {
  return (
    <div className="App">
      <div className="demo-big-content">
        <Layout>
            <Header className="transparent-header" title="Title" scroll>
                <Navigation>
                    <a href="#">Link</a>
                    <a href="#">Link</a>
                    <a href="#">Link</a>
                    <a href="#">Link</a>
                </Navigation>
            </Header>
            <Drawer title="Title">
                <Navigation>
                    <a href="#">Link</a>
                    <a href="#">Link</a>
                    <a href="#">Link</a>
                    <a href="#">Link</a>
                </Navigation>
            </Drawer>

            <Content>
                <Main/>
            </Content>
        </Layout>
      </div>
    </div>
  );
}

export default App;
