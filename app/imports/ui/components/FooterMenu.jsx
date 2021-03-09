import React from 'react';
import { Grid, List, Container, Icon } from 'semantic-ui-react';

export default class FooterMenu extends React.Component {
  render() {
    return (
        <Container className='footer'>
          <Grid columns={4}>

            <Grid.Column>
              <List>
                <List.Item>CONTACT US</List.Item>
                <Icon name="facebook"/>
                <Icon name="twitter"/>
                <Icon name="mail"/>
                <hr/>
              </List>
            </Grid.Column>

            <Grid.Column>
              <List>
                <List.Item>GAMING ACCESSORIES</List.Item>
                <hr/>
                <List.Item>GAMING Keyboard</List.Item>
                <List.Item>GAMING Mouse</List.Item>
                <List.Item>GAMING Headset</List.Item>
                <List.Item>GAMING Monitor</List.Item>
              </List>
            </Grid.Column>

            <Grid.Column>
              <List>
                <List.Item>PC ACCESSORIES</List.Item>
                <hr/>
                <List.Item>Revolutionary Converter</List.Item>
                <List.Item>Webcam HD 1080 P</List.Item>
                <List.Item>Water Proof USB Flexible Keyboard</List.Item>
                <List.Item>VOIP Stereo Headset</List.Item>
              </List>
            </Grid.Column>

            <Grid.Column>
              <List>
                <List.Item>MORE</List.Item>
                <hr/>
                <List.Item>Manufacture Warranty</List.Item>
              </List>
            </Grid.Column>

          </Grid>
        </Container>
    );
  }
}
