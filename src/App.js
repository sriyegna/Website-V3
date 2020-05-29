import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Layout, Header, Drawer, Navigation, Content } from 'react-mdl';
import Main from './components/main';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <div className="demo-big-content">
        <Layout>
            <Header className="transparent-header" title="Title" scroll>
                <Navigation>
                  <Link to="/">Home</Link>
                  <Link to="/about">About Me</Link>
                  <Link to="/projects">Projects</Link>
                  <Link to="/resume">Resume</Link>
                  <Link to="/contact">Contact</Link>
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
