import React, { Component } from 'react';
import { Grid, Cell, Card, CardText, CardActions, Button } from 'react-mdl';
import ReactDOM from 'react-dom';
import "../../node_modules/react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Pikaptcha from '../assets/pikaptcha.png';
import MultiPhone from '../assets/multiphone.png';
import Esl from '../assets/esl.png';
import Osrs from '../assets/osrs.png';
import Websitev2 from '../assets/websitev2.png';
import { FaGlasses, FaMale , FaRegBuilding } from 'react-icons/fa';

class LandingPage extends Component {

    render() {
        return (
            <div>                
                <div className="landing-banner">
                    <h3>Welcome</h3>
                </div>
                <div className="summary-columns">
                    <Grid>
                        <Cell col={4}>
                            <Card className="landing-card" shadow={0}>
                                <FaGlasses className="landing-card-icon" />
                                <span className="card-title">My Vision</span>
                                <CardText className="card-text">
                                I strive to learn more about both programming and mathematics. I hope to complete my diploma and pursue a degree that would allow me to work in a technology based company whose purpose is to not only innovate and expand their current line of products, but to also invent and expand our knowledge of what we can accomplish as a race.
                                </CardText>
                                <CardActions className="card-action" border>
                                    <Button colored>Projects</Button>
                                </CardActions>
                            </Card>
                        </Cell>
                        <Cell col={4}>
                            <Card className="landing-card" shadow={0}>
                                <FaMale className="landing-card-icon" />
                                <span className="card-title">About Myself</span>
                                <CardText className="card-text">
                                At an early age, I was introduced to the world of technology and it's impact on society. During my years of growth, I spent many hours with my computer and grasped the general concept of how Microsoft Windows and the internet work. Over time curiosity got the better of me and I began to write small programs to automate simple things.
                                <br/><br/>
                                Currently, I am a student at Mohawk College in the Computer Systems Technology - Software Development program. I plan to complete my diploma and further my education by obtaining a degree.
                                </CardText>
                                <CardActions className="card-action" border>
                                    <Button colored>About Me</Button>
                                </CardActions>
                            </Card>
                        </Cell>
                        <Cell col={4}>
                            <Card className="landing-card" shadow={0}>
                                <FaRegBuilding className="landing-card-icon" />
                                <span className="card-title">Are You an Employer?</span>
                                <CardText className="card-text">
                                My Resume
                                <br/><br/>
                                Contact Me
                                </CardText>
                                <CardActions className="card-action" border>
                                    <Button colored>Work Experience</Button>
                                </CardActions>
                            </Card>
                        </Cell>
                    </Grid>
                </div>
                <div className="current-projects">
                    <h3>Current Project</h3>
                    <div style={{height:'300px'}}></div>
                    <p>StockTracker is an application to perform calculations on various stocks to determine whether or not I should purchase the stock.</p>
                    <p>Technologies include Angular 8, Python (Flask), MySQL, REST</p>
                    <a href="#">Visit the GitHub</a>
                </div>
                <div className="past-projects">
                    <h3>Past Projects</h3>
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