import React, { Component } from 'react';
import './App.css';
import { Layout, Header, Drawer, Navigation, Content, Dialog, DialogTitle, DialogContent, DialogActions, Button } from 'react-mdl';
import Main from './components/main';
import { Link } from 'react-router-dom';
import { FaLinkedin } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleOpenDialog = this.handleOpenDialog.bind(this);
    this.handleCloseDialog = this.handleCloseDialog.bind(this);
  }

  handleOpenDialog() {
    this.setState({
      openDialog: true
    });
  }

  handleCloseDialog() {
    this.setState({
      openDialog: false
    });
  }

  render() {
    return (
      <div className="App">
        <div className="demo-big-content">
          <Layout>
              {/* Navigation links on top right of page. Visible on desktop view */}
              <Header className="transparent-header" title="Sri Natarajan" scroll>
                  <Navigation>
                    <Link to="/">Home</Link>
                    <Link to="/about">About Me</Link>
                    <Link to="/projects">Projects</Link>
                    <Link to="/resume">Resume</Link>
                    <Link onClick={this.handleOpenDialog}>Contact</Link>
                  </Navigation>
              </Header>
              {/* Navigation links on side drawer. Visible on desktop and mobile views */}
              <Drawer title="Sri Natarajan">
                  <Navigation>
                  <Link to="/">Home</Link>
                    <Link to="/about">About Me</Link>
                    <Link to="/projects">Projects</Link>
                    <Link to="/resume">Resume</Link>
                    <Link onClick={this.handleOpenDialog}>Contact</Link>
                  </Navigation>
              </Drawer>

              {/* Contact Modal visible when user clicks Contact */}
              <Dialog open={this.state.openDialog} onCancel={this.handleCloseDialog}>
                <DialogTitle>Contact</DialogTitle>
                <DialogContent>
                <p><MdEmail /> Email: <a href="mailto:sriyegna@gmail.com">sriyegna@gmail.com</a></p>
                <p><FaLinkedin /> LinkedIn: <a href="https://www.linkedin.com/in/srinath-natarajan/">Click Here</a></p>
                </DialogContent>
                <DialogActions>
                  <Button type='button' onClick={this.handleCloseDialog}>Close</Button>
                </DialogActions>
              </Dialog>

              <Content>
                  <Main/>
              </Content>
          </Layout>
        </div>
      </div>
    );
  }
}

export default App;
