import React from 'react'
import Tweet from './Tweet'

class Feed extends React.Component {
  render() {
    let tweets = this.props.tweets.map( tweet => {
      return (
        <Tweet key={tweet.id} {...tweet} />
      )
    })
    return (
      <div>
        <ul>
          { tweets }
        </ul>
      </div>
    )
  }
}

export default Feed

