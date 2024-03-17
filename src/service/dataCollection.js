import { doc, setDoc } from 'firebase/firestore'
import { db } from '../firebase'

export const userCollections = async (user, name) => {
  if (!user) return

  try {
    const documentId = user.uid

    // Ref the document collection Users and give it the name of the user Id.
    const userDocRef = doc(db, 'Users', documentId)

    // Provides an object with the document data.
    await setDoc(userDocRef, {
      uid: user.uid,
      collections: [],
      username: name,
      userActive: true
    })
  } catch (error) {
    console.error(error)
  }
}
