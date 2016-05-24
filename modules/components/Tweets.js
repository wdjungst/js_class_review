import React from 'react'
import { connect } from 'react-redux'
import Feed from './Feed'
import AddTweet from './AddTweet'

const mapStateToProps = (state) => {
  return { tweets: state.tweets }
}

const Tweets = ({ tweets }) => (
  <div>
    <AddTweet />
    <Feed tweets={tweets} />
  </div>
)

export default connect(mapStateToProps)(Tweets)
