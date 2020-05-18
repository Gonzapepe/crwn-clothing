import React from 'react'

import './collections-overview.scss'
import CollectionPreview from '../collection-preview/collection-preview'
import { createStructuredSelector } from 'reselect'
import { selectCollections } from '../../redux/shop/shop-selectors'
import { connect } from 'react-redux'

const CollectionsOverview = ({ collections }) => (

    <div className='collections-overview' >
          {collections.map(({ id, ...otherStateProps }) => (
                <CollectionPreview key={id} {...otherStateProps} />
            ))}
    </div>

)

const mapStateToProps = createStructuredSelector({
    collections: selectCollections
})

export default connect(mapStateToProps)(CollectionsOverview)