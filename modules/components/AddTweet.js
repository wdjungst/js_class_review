import React from 'react'
import { connect } from 'react-redux'
import { addTweet } from './actions'

class AddTweet extends React.Component {
  addTweet(e) {
    e.preventDefault()
    let author = this.refs.author.value
    let tweet = this.refs.tweet.value
    this.props.dispatch(addTweet(author, tweet))
    this.refs.addTweetsForm.reset()
  }

  render() {
    return(
      <div>
        <form ref="addTweetsForm" onSubmit={this.addTweet.bind(this)}>
          <input ref="author" placeholder="author" />
          <input ref="tweet" placeholder="tweet" />
          <button type="submit">Tweet!!!</button>
        </form>
      </div>
    )
  }
}

export default connect()(AddTweet)

