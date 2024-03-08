import { useContext } from 'react'
import { UserAccountContext } from '../context/userContext'
import { doc, getDoc } from 'firebase/firestore'
import { db } from '../firebase'

export function useUserAccount () {
  const { userAccount, setUserAccount } = useContext(UserAccountContext)

  const useDoc = async () => {
    if (!userAccount) return
    // get the document from firebase
    const documment = doc(db, 'Users', 'UserInfo')
    const docSnapShot = await getDoc(documment)

    if (!docSnapShot.exists()) return
    // get the user data from the document
    const data = docSnapShot.data()
    const userData = data[userAccount.uid]
    console.log(userData)
  }
  useDoc()

  return { userAccount, setUserAccount }
}
