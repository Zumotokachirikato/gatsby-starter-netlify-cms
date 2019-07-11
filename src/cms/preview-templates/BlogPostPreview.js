import React from 'react'
import PropTypes from 'prop-types'
import { ShowPostTemplate } from '../../templates/show-post'

const ShowPostPreview = ({ entry, widgetFor }) => (
  <ShowPostTemplate
    title={entry.getIn(['data', 'title'])}
    image={entry.getIn(['data', 'image'])}
    content={widgetFor('body')}
    description={entry.getIn(['data', 'description'])}
  />
)

ShowPostPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default ShowPostPreview
