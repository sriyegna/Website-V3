import React, { Component } from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import "../../node_modules/react-vertical-timeline-component/style.min.css";
import { MdSchool, MdWork, MdAccountCircle, MdCode, MdComputer } from 'react-icons/md';
import { FaRegSmileWink, FaHamburger } from 'react-icons/fa';
import { Card, Grid, Cell, ProgressBar } from 'react-mdl';
import Ninja from "../assets/ninja.png";
class About extends Component {

    render() {
        return (
            <div>
                {/* About me section  */}
                <Card shadow={0} style={{width: '80%', margin: '0 auto'}}>
                    <Grid className="about-grid">
                        <Cell col={4}>                            
                            <img src={Ninja} style={{width: '100%', height: '80%', marginTop: '10%'}} />
                        </Cell>
                        <Cell col={8}>
                            <h4>Hi. In case you haven't figured out, I'm Sri.</h4>
                            <p>I am a student in the Bachelor of Computing program at the University of Guelph with a genuine passion for software performance and security. I love to learn new languages and tinker around with something new.</p>
                            <p>I am primarily focused on developing <span className="background-grey">web applications</span> however I also enjoy developing in other languages such as C, C#, and Java. I am currently working at BlackBerry creating a web application using React to help monitor cybersecurity threats using Cylance - artificial based advanced threat detection!</p>
                            {/* <div>
                                <Grid>
                                    <Cell col={2}>
                                        Web Development
                                    </Cell>
                                    <Cell col={10}>
                                        <ProgressBar className="progress-bar" progress={80} />
                                    </Cell>
                                    <Cell col={2}>
                                        Object-Oriented Programming
                                    </Cell>
                                    <Cell col={10}>
                                        <ProgressBar className="progress-bar" progress={70} />
                                    </Cell>
                                    <Cell col={2}>
                                        Work Ethic
                                    </Cell>
                                    <Cell col={10}>
                                        <ProgressBar className="progress-bar" progress={95} />
                                    </Cell>
                                    <Cell col={2}>
                                        Time Management
                                    </Cell>
                                    <Cell col={10}>
                                        <ProgressBar className="progress-bar" progress={95} />
                                    </Cell>
                                </Grid>
                            </div> */}
                        </Cell>
                    </Grid>
                </Card>
                {/* Vertical Timeline of events  */}
                <div className="vertical-timeline">
                    <VerticalTimeline>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            date="1994"
                            iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
                            icon={<MdAccountCircle />}
                        >
                            <h3 className="vertical-timeline-element-title">Cake Day</h3>
                            <h4 className="vertical-timeline-element-subtitle">Montreal, QC</h4>
                            <p>
                            My adventure began in February 1994. Who could imagine I would end up where I am now.
                            </p>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            date="2004"
                            iconStyle={{ background: 'rgb(255, 165, 0)', color: '#fff' }}
                            icon={<MdComputer />}
                        >
                            <h3 className="vertical-timeline-element-title">My First Computer</h3>
                            <p>
                            At age 10 my dad helped me build my first computer. By buying the parts <span className="background-grey">(motherboard, RAM, CPU, PSU, etc)</span>, we assembled the computer and installed Windows! I still remember the day we got high-speed internet!
                            </p>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            date="2006"
                            iconStyle={{ background: 'rgb(255, 165, 0)', color: '#fff' }}
                            icon={<MdCode />}
                        >
                            <h3 className="vertical-timeline-element-title">SriScape</h3>
                            <p>
                            Yes that's right. My first experience with programming (Java) was when I made a Old School RuneScape ripoff. At the time it was just RuneScape. None of that pesky RS3. Achieving over <span className="background-grey">20,000 unique users</span> on a spare Pentium 3 desktop my dad got from work.
                            </p>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            date="2012"
                            iconStyle={{ background: 'rgb(255, 165, 0)', color: '#fff' }}
                            icon={<MdCode />}
                        >
                            <h3 className="vertical-timeline-element-title">Script Kiddie</h3>
                            <p>
                            I began to self-learn <span className="background-grey">Python, HTML, CSS, and JavaScript</span>. Making various simple applications such as a name based notetaker, a personal website, and automating some twitter feeds. I might have done some tinkering with SQL injection and other exploits. Might being the key word < FaRegSmileWink />.
                            </p>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            date="2013 - 2014"
                            iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                            icon={<MdWork />}
                        >
                            <h3 className="vertical-timeline-element-title">Software Test Specialist</h3>
                            <h4 className="vertical-timeline-element-subtitle">BlackBerry - Waterloo, ON</h4>
                            <p>
                            My first real work experience with Canada's largest cell phone company. I got real world experience with <span className="background-grey">working in teams, and bug reporting and debugging real software</span>! I developed small scripts to help my day to day duties be easier.
                            </p>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--education"
                            date="2014 - 2015"
                            iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                            icon={<MdWork />}
                        >
                            <h3 className="vertical-timeline-element-title">Email Services - BB10 Test Prime</h3>
                            <h4 className="vertical-timeline-element-subtitle">BlackBerry - Waterloo, ON</h4>
                            <p>
                            I went back? Damn right I did. BlackBerry was doing amazing work and I enjoyed being part of the process. In this role I learned how to manage an offshore team and boy was that a challenge. I had to work early and late to speak with people in Hyderabad, India. This was a great experience learning <span className="background-grey">team management and automation testing</span>!
                            </p>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--education"
                            date="2016"
                            iconStyle={{ background: 'rgb(255, 165, 0)', color: '#fff' }}
                            icon={<MdCode />}
                        >
                            <h3 className="vertical-timeline-element-title">Pikaptcha</h3>
                            <p>
                            What do you do when you 'gotta catch em all' but you don't know where they are? You use Pokemon Go Maps. What do you do when you need massive amounts of Pokemon Go accounts to run the map but the only program available is charging people $10? You create a free one. That's what I did. I created Pikaptcha because I know the userbase of Pokemon Go players can't pay the $10, or even have a credit card. Written in <span className="background-grey">Python and using the Selenium framework and 2Captcha API</span>, I wrote a program to automatically create Pokemon Go accounts, bypass Googles reCaptcha, and verify the emails. Several projects have used my program as a base to continue my legacy.
                            </p>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--education"
                            date="2017"
                            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                            icon={<MdSchool />}
                        >
                            <h3 className="vertical-timeline-element-title">Mohawk College</h3>
                            <h4 className="vertical-timeline-element-subtitle">Software Development Diploma</h4>
                            <p>
                            I decided to enroll in Mohawk College and get a Diploma. With the help of some great professors, I learned many things about <span className="background-grey">Reactive Web Development, Java, Systems Design, Software Testing, .NET, Object Oriented Systems, Data Structures, Database Theory, Server Management, and Project Management</span>.
                            </p>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            date="2019"
                            iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                            icon={<MdWork />}
                        >
                            <h3 className="vertical-timeline-element-title">Application Developer</h3>
                            <h4 className="vertical-timeline-element-subtitle">FirstOntario Credit Union - Stoney Creek, ON</h4>
                            <p>
                            My first developer work experience where I designed a new e-banking website using <span className="background-grey">HTML, CSS, JavaScript, and a proprietary framework known as UXP</span>. I got to participate in the <span className="background-grey">decision making process with consulting firms, marketing firms, vendors, and our directors</span>. And I can't forget to mention the biweekly barbeques <FaHamburger />!
                            </p>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--education"
                            date="2017"
                            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                            icon={<MdSchool />}
                        >
                            <h3 className="vertical-timeline-element-title">University of Guelph</h3>
                            <h4 className="vertical-timeline-element-subtitle">Bachelor of Computing</h4>
                            <p>
                            Continuing my education from College, I decided to transfer to the University of Guelph. Here I learned more about <span className="background-grey">Microcomputers, Software Design and Development, Operating Systems, and Algorithms</span>.
                            </p>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            date="2019"
                            iconStyle={{ background: 'rgb(255, 165, 0)', color: '#fff' }}
                            icon={<MdCode />}
                        >
                            <h3 className="vertical-timeline-element-title">MultiPh.one</h3>
                            <p>
                            I had a problem with spam calls. I realized I would enter my phone number without concern when signing up for various websites and services. After some digging, I found a service called SignalWire that will rent you VoIP numbers for $0.08/month. I created an application using <span className="background-grey">Angular as the frontend, and .NET core (and MS Identity Core) as the backend</span> to allow me (or any user for that matter) to securely register, purchase a number, and allow call forwarding to a real number from the purchased number. This allowed users to keep their personal number private while still being able to receive calls! Later I added the functionality to allow users to send and receive texts from their purchased number. I also decided that since it only costs $0.08/month per number, users should be able to generate any number of phone numbers they please!
                            </p>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--education"
                            date="2017"
                            iconStyle={{ background: 'rgb(255, 165, 0)', color: '#fff' }}
                            icon={<MdCode />}
                        >
                            <h3 className="vertical-timeline-element-title">StockTracker</h3>
                            <p>
                            Who wants to get rich? I do. That's why I created StockTracker. A simple application to perform calculations on historical stock data for tickers that the user enters. The application uses <span className="background-grey">Angular as a frontend, Python as the backend, and makes REST calls to Stock API's and populates a MySQL database.</span>
                            </p>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            date="2019"
                            iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                            icon={<MdWork />}
                        >
                            <h3 className="vertical-timeline-element-title">Software Developer Student</h3>
                            <h4 className="vertical-timeline-element-subtitle">BlackBerry - Waterloo, ON</h4>
                            <p>
                            That's right, back again! This time I'm here to develop enterprise grade web applications to help monitor cyber security threats using <span className="background-grey">React</span> and their newly acquired company Cylance! This will be an interesting term that I am sure to enjoy!
                            </p>
                        </VerticalTimelineElement>
                    </VerticalTimeline>
                </div>

            </div>
        )
    }
}

export default About;