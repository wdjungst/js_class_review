const tweets = (state = [], action) => {
  switch(action.type) {
    case 'SEARCH_TWEETS':
      let term = action.search.charAt(0) === '@' ? action.search.substring(1) : action.search
      let pattern = new RegExp(term)
      let tweets = []
      if (action.search.charAt(0) === '@') {
        state.map( tweet => {
          if (pattern.test(tweet.author))
            tweets.push({ ...tweet })
        })
      } else {
        state.map( tweet => {
          if (pattern.test(tweet.tweet))
            tweets.push({ ...tweet })
        })
      }
      return tweets.length ? tweets : state
    case 'ALL_TWEETS':
      return state
    case 'ADD_TWEET':
      let nextId = state[state.length -1].id + 1
      return [
        ...state,
        {
          id: nextId,
          author: action.author,
          tweet: action.tweet
        }
      ]
    default:
      return state
  }
}

export default tweets

