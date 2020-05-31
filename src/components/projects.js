import React, { Component } from 'react';
import { Grid, Cell, Card, CardActions, CardText, Button, CardMenu, IconButton, List, ListItem } from 'react-mdl';
import Bounce from 'react-reveal/Bounce';
import Pikaptcha from '../assets/pikaptcha.png';
import MultiPhone from '../assets/multiphonefull.png';
import Osrs from '../assets/osrs.png';
import Esl from '../assets/esl.png';
import Websitev2 from '../assets/websitev2.png';
import Websitev1 from '../assets/websitev1.png';
import StockTracker from '../assets/stocktrackermini.png'

class Projects extends Component {    

    render() {
        return (
            <div className="container">
                <div>
                    <Bounce left>
                        <Card className="project-card" shadow={0}>
                            <h3 className="no-bottom-margin">StockTracker</h3>
                            <CardText>
                                An application to perform calculations on historic stock data and present the data to the user using easy to read charts. StockTracker will gather data such as Discount Cash Flow, Open and Close data, and perform Mean Revision calculations over n-days. Using this data, users can plot whether the stock is increasing or decreasing over an n-day period. StockTracker can also track profits or losses in purchased stocks.
                                <br/><br/>
                                <List>
                                    <ListItem style={{minHeight:0, paddingTop:0}}>Angular 8</ListItem>
                                    <ListItem style={{minHeight:0, paddingTop:0}}>Python</ListItem>
                                    <ListItem style={{minHeight:0, paddingTop:0}}>Flask</ListItem>
                                    <ListItem style={{minHeight:0, paddingTop:0}}>MySQL</ListItem>
                                    <ListItem style={{minHeight:0, paddingTop:0}}>AlphaVantage API</ListItem>
                                    <ListItem style={{minHeight:0, paddingTop:0}}>Bootstrap</ListItem>
                                    <ListItem style={{minHeight:0, paddingTop:0}}>REST</ListItem>
                                </List>
                                <img className="project-image" src={StockTracker} />
                            </CardText>
                            <CardActions border>
                                <a href="https://github.com/sriyegna/Verifit"><Button colored>GitHub</Button></a>
                            </CardActions>
                            <CardMenu style={{color: '#fff'}}>
                                <IconButton name="share" />
                            </CardMenu>
                        </Card>
                    </Bounce>

                    <Bounce right>
                        <Card className="project-card" shadow={0}>
                            <h3 className="no-bottom-margin">MultiPh.one</h3>
                            <CardText>
                                <strong>Discontinued</strong> due to server costs and costs of purchasing numbers
                                <br/><br/>
                                An application that allows users to generate Canadian or US VoIP numbers. Users can start a conversation to send and receive texts. Users can also set any of their purchased numbers to forward to any number. Users can add or delete contacts.
                                <br/><br/>
                                <List>
                                    <ListItem style={{minHeight:0, paddingTop:0}}>Angular 7</ListItem>
                                    <ListItem style={{minHeight:0, paddingTop:0}}>.NET Core</ListItem>
                                    <ListItem style={{minHeight:0, paddingTop:0}}>MSSQL</ListItem>
                                    <ListItem style={{minHeight:0, paddingTop:0}}>Identity Core</ListItem>
                                    <ListItem style={{minHeight:0, paddingTop:0}}>SignalWire API</ListItem>
                                    <ListItem style={{minHeight:0, paddingTop:0}}>Bootstrap</ListItem>
                                    <ListItem style={{minHeight:0, paddingTop:0}}>REST</ListItem>
                                    <ListItem style={{minHeight:0, paddingTop:0}}>IIS</ListItem>
                                </List>
                                <img className="project-image" src={MultiPhone} />
                            </CardText>
                            <CardActions border>
                                <a href="https://github.com/sriyegna/Verifit"><Button colored>GitHub</Button></a>
                            </CardActions>
                            <CardMenu style={{color: '#fff'}}>
                                <IconButton name="share" />
                            </CardMenu>
                        </Card>
                    </Bounce>

                    <Bounce left>
                        <Card className="project-card" shadow={0}>
                            <h3 className="no-bottom-margin">Old School RuneScape Quest Calculator</h3>
                            <CardText>
                                An application that lets users determine what Quests they are eligible to complete. The calculator can pull your account data from the RuneScape high scores (if you are on there) and populate your skill levels. The user can then select which quests they have completed already and will then be shown what quests they are eligible for.
                                <br/><br/>
                                <List>
                                    <ListItem style={{minHeight:0, paddingTop:0}}>C#</ListItem>
                                    <ListItem style={{minHeight:0, paddingTop:0}}>REST</ListItem>
                                </List>
                                <img className="project-image" src={Osrs} />
                            </CardText>
                            <CardActions border>
                                <a href="https://github.com/sriyegna/Verifit"><Button colored>GitHub</Button></a>
                            </CardActions>
                            <CardMenu style={{color: '#fff'}}>
                                <IconButton name="share" />
                            </CardMenu>
                        </Card>
                    </Bounce>

                    <Bounce right>
                        <Card className="project-card" shadow={0}>
                            <h3 className="no-bottom-margin">Pikaptcha</h3>
                            <CardText>
                                An application created during the Pokemon Go craze. The application can be used to generate Pokemon Go accounts and allows the user to bypass Google reCaptcha if the user pays for 2Captcha services.
                                <br/><br/>
                                <List>
                                    <ListItem style={{minHeight:0, paddingTop:0}}>Python</ListItem>
                                    <ListItem style={{minHeight:0, paddingTop:0}}>Selenium</ListItem>
                                    <ListItem style={{minHeight:0, paddingTop:0}}>REST</ListItem>
                                    <ListItem style={{minHeight:0, paddingTop:0}}>2Captcha API</ListItem>
                                </List>
                                <img className="project-image" src={Pikaptcha} />
                            </CardText>
                            <CardActions border>
                                <a href="https://github.com/sriyegna/Verifit"><Button colored>GitHub</Button></a>
                            </CardActions>
                            <CardMenu style={{color: '#fff'}}>
                                <IconButton name="share" />
                            </CardMenu>
                        </Card>
                    </Bounce>

                    <Bounce left>
                        <Card className="project-card" shadow={0}>
                            <h3 className="no-bottom-margin">Emergency Services Locator</h3>
                            <CardText>
                                'ESL' is a web application that allows users to locate nearby emergency services such as Police Stations, Fire Stations, and Hospitals. The web application can use HTML5 geolocation to locate the user and determine which is the closest facility to their location. Additionally, users can limit which service they want to locate, and add new facilities to the list.
                                <br/><br/>
                                <List>
                                    <ListItem style={{minHeight:0, paddingTop:0}}>HTML5</ListItem>
                                    <ListItem style={{minHeight:0, paddingTop:0}}>CSS</ListItem>
                                    <ListItem style={{minHeight:0, paddingTop:0}}>PHP</ListItem>
                                    <ListItem style={{minHeight:0, paddingTop:0}}>JavaScript</ListItem>
                                    <ListItem style={{minHeight:0, paddingTop:0}}>JQuery</ListItem>
                                    <ListItem style={{minHeight:0, paddingTop:0}}>Geolocation</ListItem>
                                    <ListItem style={{minHeight:0, paddingTop:0}}>Bootstrap</ListItem>
                                    <ListItem style={{minHeight:0, paddingTop:0}}>BingMaps</ListItem>
                                    <ListItem style={{minHeight:0, paddingTop:0}}>OpenData API</ListItem>
                                </List>
                                <img className="project-image" src={Esl} />
                            </CardText>
                            <CardActions border>
                                <a href="https://github.com/sriyegna/Verifit"><Button colored>GitHub</Button></a>
                            </CardActions>
                            <CardMenu style={{color: '#fff'}}>
                                <IconButton name="share" />
                            </CardMenu>
                        </Card>
                    </Bounce>

                    <Bounce right>
                        <Card className="project-card" shadow={0}>
                            <h3 className="no-bottom-margin">Website V2</h3>
                            <CardText>
                                This is the second attempt at creating my personal website.
                                <br/><br/>
                                <List>
                                    <ListItem style={{minHeight:0, paddingTop:0}}>HTML5</ListItem>
                                    <ListItem style={{minHeight:0, paddingTop:0}}>CSS</ListItem>
                                    <ListItem style={{minHeight:0, paddingTop:0}}>JavaScript</ListItem>
                                    <ListItem style={{minHeight:0, paddingTop:0}}>Bootstrap</ListItem>
                                </List>
                                <img className="project-image" src={Websitev2} />
                            </CardText>
                            <CardActions border>
                                <a href="https://github.com/sriyegna/Verifit"><Button colored>GitHub</Button></a>
                            </CardActions>
                            <CardMenu style={{color: '#fff'}}>
                                <IconButton name="share" />
                            </CardMenu>
                        </Card>
                    </Bounce>

                    <Bounce left>
                        <Card className="project-card" shadow={0}>
                            <h3 className="no-bottom-margin">Website V1</h3>
                            <CardText>
                            This is the first attempt at creating my personal website.
                                <br/><br/>
                                <List>
                                    <ListItem style={{minHeight:0, paddingTop:0}}>HTML</ListItem>
                                    <ListItem style={{minHeight:0, paddingTop:0}}>CSS</ListItem>
                                    <ListItem style={{minHeight:0, paddingTop:0}}>PHP</ListItem>
                                </List>
                                <img className="project-image" src={Websitev1} />
                            </CardText>
                            <CardActions border>
                                <a href="https://github.com/sriyegna/Verifit"><Button colored>GitHub</Button></a>
                            </CardActions>
                            <CardMenu style={{color: '#fff'}}>
                                <IconButton name="share" />
                            </CardMenu>
                        </Card>
                    </Bounce>                    
                </div>
            </div>
        )
    }
}

export default Projects;