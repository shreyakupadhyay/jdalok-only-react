import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { Menu, Image } from 'semantic-ui-react'

const src = 'https://www.pexels.com/photo/brown-house-in-between-of-mountains-730981/'

class Photo extends Component {
  static propTypes = {
    color: PropTypes.string,
  }

  state = { activeItem: 'All Photos' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
        <div>
            <Menu color={'red'} key={'red'} widths={3}>
                <Menu.Item name='All Photos' active={activeItem === 'All Photos'} onClick={this.handleItemClick} />
                <Menu.Item name='Food' active={activeItem === 'Food'} onClick={this.handleItemClick} />
                <Menu.Item name='Ambience' active={activeItem === 'Ambience'} onClick={this.handleItemClick} />
            </Menu>
            <Image.Group size='small'>
                <Image src={src} />
                <Image src={src} />
                <Image src={src} />
                <Image src={src} />
                <Image src={src} />
            </Image.Group>
        </div>
    )
  }
}
export default Photo