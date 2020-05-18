import React from 'react'
import MenuItem from '../MenuItem/menuitem'
import './directorymenu.scss'
import { connect } from 'react-redux'
import { selectDirectorySections } from '../../redux/directory/directory-selectors'
import { createStructuredSelector } from 'reselect'


const DirectoryMenu = ({ sections }) =>  {

    return(
        <div className='directory-menu'>
            { sections.map(({ id, ...otherStateProps}) => (
                <MenuItem key={id} {...otherStateProps} />
            )) }
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections
})

export default connect(mapStateToProps)(DirectoryMenu)