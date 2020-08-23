import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';

class Contact extends Component {
  render() {
    return (
      <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={6}>
          <h2>Kwee F. Wang</h2>
          <img
              src="https://s3-us-west-1.amazonaws.com/peopleworld/pictures/af720dfb33a24005f475227b343bef44.jpeg"
              alt="avatar"
              style={{height: '250px'}}
            />
            <p style={{ width: '75%', margin: 'auto', paddingTop: '1em'}}>
            I am a committed, hardworking and responsible person, whom I can deliver what is 
            expected from my employers on this very inspiring, full of motivation kind of 
            business. 
            </p>
          </Cell>
          <Cell col={6}>
            <h2>Contact Me</h2>
            <hr/>
            <div className="contact-list">
              <List>
                <ListItem>
                  <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                    <i className="fa fa-phone-square" aria-hidden="true"/>
                    (917) 828-7348
                  </ListItemContent>
                </ListItem>
                <ListItem>
                  <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                    <i className="fa fa-envelope" aria-hidden="true"/>
                    kfwang12216@gmail.com
                  </ListItemContent>
                </ListItem>
                <ListItem>
                  <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                    <i className="fa fa-skype" aria-hidden="true"/>
                    kfwang177880
                  </ListItemContent>
                </ListItem>
              </List>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Contact;
