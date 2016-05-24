import React from 'react'

const Tweet = ({ id, author, tweet }) => (
  <li>
    <span>{id}</span>|
    {' '}
    <span>{tweet}</span>|
    {' '}
    <span>{author}</span>
  </li>
)

export default Tweet

