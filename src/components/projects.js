import React, { Component } from 'react';
import { Grid, Cell, Card, CardTitle, CardActions, CardText, Button, CardMenu, IconButton } from 'react-mdl';

class Projects extends Component {

    render() {
        return (
            <div>
                <Grid>
                    <Cell col={4}>
                        <Card shadow={0} style={{width: '100%', height: '100%', background: 'url(http://www.getmdl.io/assets/demos/image_card.jpg) center / cover', margin: 'auto'}}>
                            <CardTitle expand />
                            <CardActions style={{height: '52px', padding: '16px', background: 'rgba(0,0,0,0.2)'}}>
                                <span style={{color: '#fff', fontSize: '14px', fontWeight: '500'}}>
                                    Image.jpg
                                </span>
                            </CardActions>
                        </Card>
                    </Cell>
                    <Cell col={8}>
                        <Card shadow={0} style={{width: "100%"}}>
                            <CardTitle style={{color: '#fff', height: '176px', background: 'url(http://www.getmdl.io/assets/demos/welcome_card.jpg) center / cover'}}>Welcome</CardTitle>
                            <CardText>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Mauris sagittis pellentesque lacus eleifend lacinia...
                            </CardText>
                            <CardActions border>
                                <Button colored>Get Started</Button>
                            </CardActions>
                            <CardMenu style={{color: '#fff'}}>
                                <IconButton name="share" />
                            </CardMenu>
                        </Card>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Projects;