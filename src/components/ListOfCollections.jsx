import React, { useEffect, useState } from 'react'

export function ListOfCollections () {
  const [collections] = useState(
    JSON.parse(window.localStorage.getItem('listCollections')) || []
  )

  useEffect(() => {

  }, [collections])
  console.log(collections)

  return (
    <ul>
      {collections.map((collection, index) => (
        <li key={index}>
          <p>{collection.collectionName}</p>
          <p>{collection.id}</p>
        </li>
      ))}
    </ul>
  )
}
