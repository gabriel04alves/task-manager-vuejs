import { doc, collection, addDoc, deleteDoc, getDocs } from 'firebase/firestore'
import { auth, db } from '../firebase/firebase'
import type TaskI from '@/interfaces/TaskI'

export async function addTaskToFirestore(task: TaskI) {
  const user = auth.currentUser
  if (!user) throw new Error('Usuário não autenticado')

  const taskWithDate = {
    ...task,
    createdAt: new Date()
  }

  const taskDocRef = await addDoc(collection(db, 'users', user.uid, 'tasks'), taskWithDate)
  return taskDocRef.id
}

export async function deleteTaskFromFirestore(taskId: string) {
  const user = auth.currentUser
  if (!user) throw new Error('Usuário não autenticado')

  const taskDocRef = doc(db, 'users', user.uid, 'tasks', taskId)
  await deleteDoc(taskDocRef)
}

export async function fetchTasksForUser() {
  const user = auth.currentUser
  if (!user) throw new Error('Usuário não autenticado')

  const tasksCollection = collection(db, 'users', user.uid, 'tasks')
  const tasksSnapshot = await getDocs(tasksCollection)
  const tasksList = tasksSnapshot.docs.map((doc) => {
    const data = doc.data()
    return {
      id: doc.id,
      ...data,
      createdAt: data.createdAt ? new Date(data.createdAt.toMillis()) : new Date()
    }
  }) as TaskI[]

  return tasksList
}
