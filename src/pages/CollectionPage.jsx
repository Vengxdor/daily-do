import React from 'react'
import { Link, useParams } from 'react-router-dom'

function CollectionPage () {
  const { collectionId, collectionName } = useParams()
  return (
    <div>
      <Link to='/'>_</Link>
      <h1>{collectionName}</h1>
      <p>{collectionId }</p>
    </div>
  )
}

export default CollectionPage
