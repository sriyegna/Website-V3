import React, { Component } from 'react';
import { Grid, Cell, Card, CardText, CardActions, Button } from 'react-mdl';
import "../../node_modules/react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Pikaptcha from '../assets/pikaptcha.png';
import MultiPhone from '../assets/multiphone.png';
import Esl from '../assets/esl.png';
import Websitev2 from '../assets/websitev2.png';
import StockTracker from '../assets/stocktrackerfull.png'
import { FaGlasses, FaMale , FaRegBuilding } from 'react-icons/fa';
import { GiBrain } from 'react-icons/gi';

class LandingPage extends Component {

    render() {
        return (
            <div>                
                {/* Top Welcome Banner */}
                <div className="landing-banner">
                    <h3 style={{color: 'white'}}>Welcome</h3>
                </div>
                {/* Top Summary Cards */}
                <div className="summary-columns">
                    <Grid>
                        <Cell col={4}>
                            <Card className="landing-card" shadow={0}>
                                <FaGlasses className="landing-card-icon" />
                                <span className="card-title">My Vision</span>
                                <CardText className="card-text">
                                I strive to learn more about both programming and mathematics. I hope to use the knowledge I have acquired to work in a technology based company whose purpose is to not only innovate and expand their current line of products, but to also invent and expand our knowledge of what we can accomplish as a race.
                                </CardText>
                            </Card>
                        </Cell>
                        <Cell col={4}>
                            <Card className="landing-card" shadow={0}>
                                <FaMale className="landing-card-icon" />
                                <span className="card-title">About Myself</span>
                                <CardText className="card-text">
                                At an early age, I was introduced to the world of technology and it's impact on society. During my years of growth, I spent many hours with my computer and grasped the general concept of how Microsoft Windows and the internet work. Over time curiosity got the better of me and I began to write small programs to automate simple things.
                                <br/><br/>
                                I am a prospective graduate of the Bachelor of Computing program at the University of Guelph expecting to graduate in August 2020.
                                </CardText>
                            </Card>
                        </Cell>
                        <Cell col={4}>
                            <Card className="landing-card" shadow={0}>
                                <GiBrain className="landing-card-icon" />
                                <span className="card-title">My Interests</span>
                                <CardText className="card-text">
                                Machine Learning
                                <br/><br/>
                                Cybersecurity
                                <br/><br/>
                                Reactive Web Development
                                <br/><br/>
                                Server Side Web Development
                                <br/><br/>
                                Desktop Applications
                                </CardText>
                            </Card>
                        </Cell>
                    </Grid>
                </div>
                {/* Current Project - StockTracker  */}
                <div className="current-projects">
                    <h3 style={{color: 'white'}}>Current Project</h3>
                    <img style={{width: '80%'}} src={StockTracker} />
                    <p style={{color: 'white'}}>
                        StockTracker is an application to perform calculations on various stocks to determine whether or not I should purchase the stock.
                        <br/>
                        Technologies include Angular 8, Python (Flask), MySQL, REST
                        <br/>                    
                        <a href="#">Visit the GitHub</a>
                    </p>
                </div>
                {/* Previous Projects carousel  */}
                <div className="past-projects">
                    <h3 style={{color: 'white'}}>Past Projects</h3>
                    <div className="past-project-carousel">
                        <Carousel className="past-projects" showArrows={true} showThumbs={false} autoPlay={true} infiniteLoop={true} swipeable={true}>
                            <div>
                                <img src={MultiPhone} />
                                <p className="legend">Multiph.one</p>
                            </div>
                            <div>
                            <img src={Esl} />
                                <p className="legend">ESL</p>
                            </div>
                            <div>
                                <img src={Pikaptcha} />
                                <p className="legend">Pikaptcha</p>
                            </div>
                            <div>
                                <img src={Websitev2} />
                                <p className="legend">Website V2</p>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        )
    }
}

export default LandingPage;