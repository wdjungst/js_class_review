import React from 'react'
import { connect } from 'react-redux'
import Feed from './Feed'
import AddTweet from './AddTweet'
import Search from './Search'

const mapStateToProps = (state) => {
  return { tweets: state.tweets }
}

const Tweets = ({ tweets }) => (
  <div>
    <AddTweet />
    <Feed tweets={tweets} />
    <Search />
  </div>
)

export default connect(mapStateToProps)(Tweets)
