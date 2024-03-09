import { addDoc, collection } from 'firebase/firestore'
import { db } from '../firebase'

export const userCollections = async (user) => {
  if (!user) return
  try {
    // store the collection in firestore
    const collectionArr = collection(db, 'Users')

    await addDoc(collectionArr, {
      uid: user.uid,
      tasks: [],
      collections: []
    })
  } catch (error) {
    console.error(error)
  }
}
