export const addTweet = (author, tweet) => {
  return {
    type: 'ADD_TWEET',
    author,
    tweet
  }
}

export const searchTweets = (search) => {
  return {
    type: 'SEARCH_TWEETS',
    search
  }
}

