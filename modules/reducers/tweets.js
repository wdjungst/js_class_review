const tweets = (state = [], action) => {
  switch(action.type) {
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

