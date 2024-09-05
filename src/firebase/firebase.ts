import type TaskI from '@/interfaces/TaskI'
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore, collection, addDoc, deleteDoc, doc } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID
}

const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
export const db = getFirestore(app)

export const tasksCollection = collection(db, 'tasks')

export const addTaskToFirestore = async (task: TaskI) => {
  try {
    const docRef = await addDoc(tasksCollection, task)
    return docRef.id
  } catch (e) {
    console.error('Error adding task: ', e)
  }
}

export const deleteTaskFromFirestore = async (taskId: string) => {
  try {
    const taskDoc = doc(db, 'tasks', taskId)
    await deleteDoc(taskDoc)
  } catch (e) {
    console.error('Error deleting task: ', e)
  }
}
