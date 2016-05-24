import React from 'react'
import { connect } from 'react-redux'
import { searchTweets } from './actions'

class Search extends React.Component {
  search() {
    this.props.dispatch(searchTweets(this.refs.search.value))
  }

  render() {
    return (
      <input onChange={this.search.bind(this)} ref="search" />
    )
  }
}

export default connect()(Search)

