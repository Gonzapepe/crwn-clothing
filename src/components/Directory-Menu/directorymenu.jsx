import React, { Component } from 'react'
import MenuItem from '../MenuItem/menuitem'
import './directorymenu.scss'

class DirectoryMenu extends Component {
    constructor() {
        super()
        this.state = {
            sections: [
            {
              title: 'hats',
              imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
              id: 1,
              linkUrl: 'shop/hats'
            },
            {
              title: 'jackets',
              imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
              id: 2,
              linkUrl: 'shop/jackets'
            },
            {
              title: 'shoes',
              imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
              id: 3,
              linkUrl: 'shop/sneakers'
            },
            {
              title: 'women',
              imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
              size: 'large',
              id: 4,
              linkUrl: 'shop/womens'
            },
            {
              title: 'men',
              imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
              size: 'large',
              id: 5,
              linkUrl: 'shop/mens'
            }
          ]
        }
    }


render(){
    return(
        <div className='directory-menu'>
            { this.state.sections.map(({ id, ...otherStateProps}) => (
                <MenuItem key={id} {...otherStateProps} />
            )) }
        </div>
    )
}
}

export default DirectoryMenu