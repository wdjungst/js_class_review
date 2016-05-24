import React from 'react'
import Title from 'react-title-component'
import Tweets from './Tweets'

const Home = () => (
  <div>
    <Title render={prev => `${prev} | Home`}/>
    <Tweets />
  </div>
)

export default Home

