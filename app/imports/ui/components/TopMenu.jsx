import React from 'react';
import { Container, Menu, Icon, Dropdown, Image } from 'semantic-ui-react';

export default class TopMenu extends React.Component {
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {

    const options = [
      { key: 1, text: 'Choice 1', value: 1 },
      { key: 2, text: 'Choice 2', value: 2 },
      { key: 3, text: 'Choice 3', value: 3 },
    ];

    return (
      <Container fluid>
        <Menu inverted secondary pointing>

          <Image src={'https://myrocksoul.com/wp-content/uploads/logo_3.png'} height={105} alt='Rock Soul Logo'/>

          <Menu.Item
            style={{ borderColor: 'red' }}
            position='right'
            name='home'
            onClick={this.handleItemClick}>
              HOME
          </Menu.Item>

          <Menu.Item
            name='about'
            onClick={this.handleItemClick}
          >
              ABOUT ROCKSOUL
          </Menu.Item>

          <Dropdown text='GAMING ACCESSORIES' options={options} simple item />

          <Dropdown text='PC ACCESSORIES' options={options} simple item />

          <Dropdown text='MORE' options={options} simple item />

          <Menu.Item fitted><Icon name="search"/></Menu.Item>

        </Menu>
      </Container>
    );
  }
}
