import { useReducer } from 'react'
import { expensesReducer } from '../expensesReducer'

export default function Home() {
  const [expenses, dispatch] = useReducer(expensesReducer, [])

  function addTest() {
    dispatch({
      type: 'add',
      payload: { id: Date.now(), title: 'Coffee', amount: 3, category: 'Food' },
    })
  }

  return (
    <>
      <h1>Expenses</h1>
      <button onClick={addTest}>Add test expense</button>
      <pre>{JSON.stringify(expenses, null, 2)}</pre>
    </>
  )
}
