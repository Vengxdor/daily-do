import { doc, setDoc } from 'firebase/firestore'
import { db } from '../firebase'

export const userCollections = async (user) => {
  if (!user) return

  try {
    // Genera un identificador único para el documento
    const documentId = user.uid // Reemplaza 'nombrePersonalizado' con tu lógica para generar un nombre único

    // Obtiene una referencia al documento con el identificador único
    const userDocRef = doc(db, 'Users', documentId)

    // Al agregar el documento, proporciona un objeto con los datos del documento
    await setDoc(userDocRef, {
      uid: user.uid,
      tasks: [],
      collections: []
    })
  } catch (error) {
    console.error(error)
  }
}
