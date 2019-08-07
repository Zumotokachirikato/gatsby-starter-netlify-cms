import React from 'react'
import PropTypes from 'prop-types'
import { CastingCallPageTemplate } from '../../templates/casting-calls'

const CastingCallPagePreview = ({ entry, widgetFor }) => (
  <CastingCallPageTemplate
    title={entry.getIn(['data', 'title'])}
    image={entry.getIn(['data', 'image'])}
    signuplink={entry.get(['data', 'signuplink'])}
    content={widgetFor('body')}
  />
)

CastingCallPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default CastingCallPagePreview
