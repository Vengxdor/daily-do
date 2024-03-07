import { doc, updateDoc } from 'firebase/firestore'
import { db } from '../firebase'

export const userCollections = async (user) => {
  if (!user) return
  try {
    // store the collection in firestore
    const collectionArr = doc(db, 'Users/UserInfo')

    const userId = user.uid
    const initialUserInfo = {
      [userId]: {
        uid: userId,
        collections: [],
        tasks: []
      }
    }
    await updateDoc(collectionArr, initialUserInfo)
  } catch (error) {
    console.error(error)
  }
}
