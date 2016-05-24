import React from 'react'
import { connect } from 'react-redux'
import Feed from './Feed'

const mapStateToProps = (state) => {
  return { tweets: state.tweets }
}

const Tweets = ({ tweets }) => (
  <div>
    <Feed tweets={tweets} />
  </div>
)

export default connect(mapStateToProps)(Tweets)
