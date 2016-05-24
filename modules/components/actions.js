export const addTweet = (author, tweet) => {
  return {
    type: 'ADD_TWEET',
    author,
    tweet
  }
}
