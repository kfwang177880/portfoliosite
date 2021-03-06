import React, { Component } from 'react';
import { Grid, Cell} from 'react-mdl';

class Landing extends Component {
  render() {
    return (
      <div style= {{width: '100%', margin: 'auto'}}>
        <Grid className = "landing-grid">
          <Cell col={12}>
            <img
              src="https://i.pinimg.com/originals/a5/3e/15/a53e15c3885351656c08d355f1259a11.png"
              alt="avatar"
              className="avatar-img"
            />

            <div className="banner-text">
              <h1>Web Developer | Oracle Apps DBA</h1>

              <hr/>

              <p>HTML/CSS| JavaScript | React | React Native | SQL | postreg| Oracle</p>

              <div className="social-links">

                {/* linkedIN */}
                <a href="https://www.linkedin.com/in/kfwang" rel="noopener noreferrer" target="_blank">
                  <i className="fa fa-linkedin-square" aria-hidden="true" />
                </a>

                {/* GitHUb */}
                <a href="https://github.com/kfwang177880" rel="noopener noreferrer" target="_blank">
                  <i className="fa fa-github-square" aria-hidden="true" />
                </a>

              </div>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Landing;
